'use client';

import React, { useState, useEffect } from 'react';
import antlr4 from 'antlr4';
import RiscVLexer from '../antlr/uriscvLexer';
import RiscVParser from '../antlr/uriscvParser';
import { SyntaxErrorListener } from './SyntaxErrorListener';
import { RiscVCustomVisitor, Instruction } from './RiscVCustomVisitor';
import { ExecuteInstructions } from './ExecuteInstructions';

const REG_COUNT = 32;
const MEM_SIZE = 0x0800; // 2048 bytes
const MEM_PAGE_SIZE = 32;

const toHex = (num: number, digits = 4) =>
    '0x' + num.toString(16).toUpperCase().padStart(digits, '0');

export default function SimulatorInput() {
    const [assembly, setAssembly] = useState<string>(
        `# Enter your RISC-V assembly here\n.word 0x12345678\nADD x1, x2, x3`
    );
    const [registers, setRegisters] = useState<number[]>(Array(REG_COUNT).fill(0));
    const [memory, setMemory] = useState<Uint8Array>(new Uint8Array(MEM_SIZE));
    const [memPageStart, setMemPageStart] = useState(0);
    const [gotoAddr, setGotoAddr] = useState('');
    const [parseErrors, setParseErrors] = useState<string[]>([]);
    const [parsedInstructions, setParsedInstructions] = useState<Instruction[]>([]);

    const parseAssembly = (text: string) => {
        try {
            const chars = new antlr4.InputStream(text);
            const lexer = new RiscVLexer(chars);
            const tokens = new antlr4.CommonTokenStream(lexer);
            const parser = new RiscVParser(tokens);

            const errorListener = new SyntaxErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);

            const tree = parser.program();

            const visitor = new RiscVCustomVisitor();
            const instructions = visitor.visit(tree);

            // Log parsed instructions for debugging
            console.log('Parsed Instructions:', instructions);

            setParseErrors(errorListener.errors);
            setParsedInstructions(instructions);
        } catch (e: any) {
            setParseErrors([`Parsing failed: ${e.message}`]);
            setParsedInstructions([]);
        }
    };

    useEffect(() => {
        if (parsedInstructions.length === 0) return;

        // Reset registers and memory before execution
        const initialRegs = Array(REG_COUNT).fill(0);
        const initialMem = new Uint8Array(MEM_SIZE);

        setRegisters(initialRegs);
        setMemory(initialMem);

        ExecuteInstructions(
            parsedInstructions,
            initialRegs,
            initialMem,
            setRegisters,
            setMemory
        );
    }, [parsedInstructions]);

    const onAssemblyChange = (text: string) => {
        setAssembly(text);
        parseAssembly(text);
    };

    const onRegisterChange = (index: number, value: string) => {
        let val = parseInt(value);
        if (isNaN(val)) val = 0;
        setRegisters((regs) => {
            const newRegs = [...regs];
            if (index !== 0) newRegs[index] = val;
            return newRegs;
        });
    };

    const onMemoryChange = (addr: number, value: string) => {
        let val = parseInt(value);
        if (isNaN(val) || val < 0) val = 0;
        if (val > 255) val = 255;
        setMemory((mem) => {
            const newMem = new Uint8Array(mem);
            newMem[addr] = val;
            return newMem;
        });
    };

    const onGotoMemory = () => {
        let addr = parseInt(gotoAddr, 16);
        if (isNaN(addr) || addr < 0 || addr >= MEM_SIZE) {
            alert(`Invalid address. Enter hex between 0x0000 and 0x07FF.`);
            return;
        }
        const pageStart = addr - (addr % MEM_PAGE_SIZE);
        setMemPageStart(pageStart);
    };

    const renderRegisters = () => {
        const rows = [];
        for (let i = 0; i < REG_COUNT; i++) {
            rows.push(
                <tr key={`reg-${i}`}>
                    <td>{`x${i}`}</td>
                    <td>{toHex(i, 2)}</td>
                    <td>
                        {i === 0 ? (
                            <input type="number" value={0} disabled />
                        ) : (
                            <input
                                type="number"
                                value={registers[i]}
                                onChange={(e) => onRegisterChange(i, e.target.value)}
                            />
                        )}
                    </td>
                </tr>
            );
        }
        return rows;
    };

    const renderMemoryPage = () => {
        const rows = [];
        for (let offset = 0; offset < MEM_PAGE_SIZE; offset++) {
            const addr = memPageStart + offset;
            rows.push(
                <tr key={`mem-${addr}`}>
                    <td>{toHex(addr, 4)}</td>
                    <td>
                        <input
                            type="number"
                            min={0}
                            max={255}
                            value={memory[addr]}
                            onChange={(e) => onMemoryChange(addr, e.target.value)}
                        />
                    </td>
                    <td>{memory[addr].toString(16).toUpperCase().padStart(2, '0')}</td>
                </tr>
            );
        }
        return rows;
    };

    return (
        <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
            <h1>μRISCV Simulator Input</h1>

            <section style={{ marginBottom: 30 }}>
                <h2>1. Input RISC-V Assembly Program</h2>
                <textarea
                    rows={10}
                    cols={80}
                    value={assembly}
                    onChange={(e) => onAssemblyChange(e.target.value)}
                    style={{ fontFamily: 'monospace', fontSize: 14, width: '100%' }}
                    spellCheck={false}
                />
                <p style={{ fontSize: 12, color: '#666' }}>
                    Program memory range: 0x0000 - 0x07FF
                </p>

                {parseErrors.length > 0 && (
                    <div style={{ color: 'red', marginTop: 10 }}>
                        <b>Parsing Errors:</b>
                        <ul>
                            {parseErrors.map((err, i) => (
                                <li key={`err-${i}`}>{err}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {parsedInstructions.length > 0 && (
                    <div style={{ color: 'green', marginTop: 10, fontFamily: 'monospace' }}>
                        <b>Parsed Instructions:</b>
                        <ul>
                            {parsedInstructions.map((instr, i) => (
                                <li key={i}>
                                    {instr.type === 'word'
                                        ? `.word ${instr.wordValue} (line ${instr.line})`
                                        : `${instr.mnemonic} ${instr.args?.join(', ')} (line ${instr.line})`}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            <section style={{ marginBottom: 30 }}>
                <h2>2. Input Register Values (x1 to x31)</h2>
                <table border={1} cellPadding={5} style={{ borderCollapse: 'collapse' }}>
                    <thead>
                    <tr>
                        <th>Register</th>
                        <th>Index (Hex)</th>
                        <th>Value (Decimal)</th>
                    </tr>
                    </thead>
                    <tbody>{renderRegisters()}</tbody>
                </table>
                <p style={{ fontSize: 12, color: '#666' }}>
                    Note: x0 is always zero and cannot be changed.
                </p>
            </section>

            <section>
                <h2>3. Input Memory Values (Data Segment)</h2>
                <div style={{ marginBottom: 10 }}>
                    <label>
                        GOTO Memory Address (hex):&nbsp;
                        <input
                            type="text"
                            value={gotoAddr}
                            onChange={(e) => setGotoAddr(e.target.value)}
                            placeholder="e.g. 0x00A0"
                            style={{ width: 80 }}
                        />
                    </label>
                    <button onClick={onGotoMemory} style={{ marginLeft: 10 }}>
                        Go
                    </button>
                </div>
                <table
                    border={1}
                    cellPadding={5}
                    style={{ borderCollapse: 'collapse', width: '100%' }}
                >
                    <thead>
                    <tr>
                        <th>Address</th>
                        <th>Value (Decimal)</th>
                        <th>Value (Hex)</th>
                    </tr>
                    </thead>
                    <tbody>{renderMemoryPage()}</tbody>
                </table>
                <p style={{ fontSize: 12, color: '#666' }}>
                    Memory range: 0x0000 - 0x07FF (2048 bytes). Showing {MEM_PAGE_SIZE} bytes per page.
                </p>
                <div style={{ marginTop: 10 }}>
                    <button
                        onClick={() => setMemPageStart((start) => Math.max(0, start - MEM_PAGE_SIZE))}
                        disabled={memPageStart === 0}
                    >
                        Previous Page
                    </button>
                    <button
                        onClick={() =>
                            setMemPageStart((start) =>
                                Math.min(MEM_SIZE - MEM_PAGE_SIZE, start + MEM_PAGE_SIZE)
                            )
                        }
                        disabled={memPageStart >= MEM_SIZE - MEM_PAGE_SIZE}
                        style={{ marginLeft: 10 }}
                    >
                        Next Page
                    </button>
                </div>
            </section>
        </div>
    );
}
