// src/antlr/RiscVCustomVisitor.ts
import RiscVVisitor from '../antlr/uriscvVisitor';
import { ParseTree } from 'antlr4/tree/Tree';

export interface Instruction {
    type: 'instruction' | 'word';
    line: number;
    mnemonic?: string;
    args?: string[];
    wordValue?: number;
}

export class RiscVCustomVisitor extends RiscVVisitor {
    public instructions: Instruction[] = [];

    // Visit the root program node
    visitProgram(ctx: any): Instruction[] {
        // Visit all line children
        for (let i = 0; i < ctx.line().length; i++) {
            this.visitLw(ctx.line(i));
        }
        return this.instructions;
    }

    visitLine(ctx: any): void {
        if (ctx.directive()) {
            this.visitDirective(ctx.directive());
        } else if (ctx.instruction()) {
            this.visitInstruction(ctx.instruction());
        }
        // Labels and comments are ignored here but can be added if needed
    }

    visitDirective(ctx: any): void {
        if (ctx.WORD_DIRECTIVE()) {
            const valText = ctx.wordValue().getText();
            let value = 0;
            if (valText.startsWith('0x') || valText.startsWith('0X')) {
                value = parseInt(valText, 16);
            } else {
                value = parseInt(valText, 10);
            }
            this.instructions.push({
                type: 'word',
                line: ctx.start.line,
                wordValue: value,
            });
        }
    }

    visitInstruction(ctx: any): void {
        // The mnemonic is the first child token text
        const mnemonic = ctx.children[0].getText().toUpperCase();
        const args: string[] = [];

        // Collect arguments by skipping commas and whitespace tokens
        for (let i = 1; i < ctx.children.length; i++) {
            const child = ctx.children[i];
            const text = child.getText();
            if (text !== ',' && text.trim() !== '') {
                args.push(text);
            }
        }

        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic,
            args,
        });
    }
}