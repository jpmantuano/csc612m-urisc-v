import { Instruction } from './RiscVCustomVisitor';

const MEM_SIZE = 0x0800; // 2048 bytes

// Parse register name "xN" to index N
const regIndex = (reg: string): number => {
    if (!reg || !reg.startsWith('x')) return -1;
    const idx = parseInt(reg.slice(1), 10);
    return isNaN(idx) ? -1 : idx;
};

// Parse offset(base) like "4(x1)"
const parseOffsetBase = (str: string): { offset: number; base: number } | null => {
    const m = str.match(/(-?\d+)\((x\d+)\)/);
    if (!m) return null;
    const offset = parseInt(m[1], 10);
    const base = regIndex(m[2]);
    if (base < 0) return null;
    return { offset, base };
};

// Load 32-bit little endian word from memory
const loadWord = (mem: Uint8Array, addr: number): number => {
    if (addr < 0 || addr + 3 >= MEM_SIZE) return 0;
    return (
        mem[addr] |
        (mem[addr + 1] << 8) |
        (mem[addr + 2] << 16) |
        (mem[addr + 3] << 24)
    );
};

// Store 32-bit little endian word to memory
const storeWord = (mem: Uint8Array, addr: number, val: number) => {
    if (addr < 0 || addr + 3 >= MEM_SIZE) return;
    mem[addr] = val & 0xff;
    mem[addr + 1] = (val >> 8) & 0xff;
    mem[addr + 2] = (val >> 16) & 0xff;
    mem[addr + 3] = (val >> 24) & 0xff;
};

// Parse immediate decimal or hex string
const parseImm = (immStr: string): number => {
    if (!immStr) return 0;
    if (immStr.startsWith('0x') || immStr.startsWith('0X')) {
        return parseInt(immStr, 16);
    }
    return parseInt(immStr, 10);
};

export function ExecuteInstructions(
    instructions: Instruction[],
    registers: number[],
    memory: Uint8Array,
    setRegisters: React.Dispatch<React.SetStateAction<number[]>>,
    setMemory: React.Dispatch<React.SetStateAction<Uint8Array>>
) {
    const newRegs = [...registers];
    const newMem = new Uint8Array(memory);

    // Start storing .word directives at address 0
    let memPtr = 0;

    console.log('--- Begin Execution ---');
    console.log('Initial Registers:', newRegs.slice(0, 16));
    console.log('Initial Memory (first 16 bytes):', Array.from(newMem.slice(0, 16)));

    for (const instr of instructions) {
        if (instr.type === 'word' && typeof instr.wordValue === 'number') {
            console.log(`Storing .word value 0x${instr.wordValue.toString(16)} at memory address 0x${memPtr.toString(16)}`);
            storeWord(newMem, memPtr, instr.wordValue);
            memPtr += 4;
            continue;
        }

        if (instr.type !== 'instruction' || !instr.mnemonic || !instr.args) continue;

        const mnem = instr.mnemonic.toUpperCase();
        const args = instr.args.map((a) => a.trim());

        console.log(`Executing instruction: ${mnem} ${args.join(', ')}`);

        switch (mnem) {
            case 'ADD': {
                const rd = regIndex(args[0]);
                const rs1 = regIndex(args[1]);
                const rs2 = regIndex(args[2]);
                if (rd > 0 && rs1 >= 0 && rs2 >= 0) {
                    newRegs[rd] = (newRegs[rs1] + newRegs[rs2]) | 0;
                    console.log(`ADD: x${rd} = x${rs1} (${newRegs[rs1]}) + x${rs2} (${newRegs[rs2]}) = ${newRegs[rd]}`);
                }
                break;
            }
            case 'SUB': {
                const rd = regIndex(args[0]);
                const rs1 = regIndex(args[1]);
                const rs2 = regIndex(args[2]);
                if (rd > 0 && rs1 >= 0 && rs2 >= 0) {
                    newRegs[rd] = (newRegs[rs1] - newRegs[rs2]) | 0;
                    console.log(`SUB: x${rd} = x${rs1} (${newRegs[rs1]}) - x${rs2} (${newRegs[rs2]}) = ${newRegs[rd]}`);
                }
                break;
            }
            case 'ADDI': {
                const rd = regIndex(args[0]);
                const rs1 = regIndex(args[1]);
                const imm = parseImm(args[2]);
                if (rd > 0 && rs1 >= 0) {
                    newRegs[rd] = (newRegs[rs1] + imm) | 0;
                    console.log(`ADDI: x${rd} = x${rs1} (${newRegs[rs1]}) + ${imm} = ${newRegs[rd]}`);
                }
                break;
            }
            case 'LW': {
                const rd = regIndex(args[0]);
                const ob = parseOffsetBase(args[1]);
                if (rd > 0 && ob) {
                    const addr = newRegs[ob.base] + ob.offset;
                    newRegs[rd] = loadWord(newMem, addr);
                    console.log(`LW: x${rd} = Memory[0x${addr.toString(16)}] = ${newRegs[rd]}`);
                }
                break;
            }
            case 'SW': {
                const rs2 = regIndex(args[0]);
                const ob = parseOffsetBase(args[1]);
                if (rs2 >= 0 && ob) {
                    const addr = newRegs[ob.base] + ob.offset;
                    storeWord(newMem, addr, newRegs[rs2]);
                    console.log(`SW: Memory[0x${addr.toString(16)}] = x${rs2} (${newRegs[rs2]})`);
                }
                break;
            }
            // Add more instructions with logs as needed...
            default:
                console.log(`Instruction ${mnem} not implemented.`);
                break;
        }
    }

    // x0 is always zero
    newRegs[0] = 0;

    console.log('Final Registers:', newRegs.slice(0, 16));
    console.log('Final Memory (first 16 bytes):', Array.from(newMem.slice(0, 16)));
    console.log('--- End Execution ---');

    setRegisters(newRegs);
    setMemory(newMem);
}
