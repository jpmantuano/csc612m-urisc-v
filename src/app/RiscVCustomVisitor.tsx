import RiscVVisitor from '../antlr/uriscvVisitor';

export interface Instruction {
    type: 'instruction' | 'word';
    line: number;
    mnemonic?: string;
    args?: string[];
    wordValue?: number;
}

export class RiscVCustomVisitor extends RiscVVisitor {
    public instructions: Instruction[] = [];

    // Generic visit method (if your base class lacks it)
    visit(ctx: any): any {
        if (!ctx) return null;
        const methodName = 'visit' + ctx.constructor.name.replace('Context', '');
        if (typeof (this as any)[methodName] === 'function') {
            return (this as any)[methodName](ctx);
        }
        if (ctx.children) {
            for (const child of ctx.children) {
                this.visit(child);
            }
        }
        return null;
    }

    visitProgram(ctx: any): Instruction[] {
        for (let i = 0; i < ctx.line().length; i++) {
            this.visit(ctx.line(i));
        }
        return this.instructions;
    }

    visitLine(ctx: any): void {
        if (ctx.directive()) {
            this.visitDirective(ctx.directive());
        } else if (ctx.instruction()) {
            this.visitInstruction(ctx.instruction());
        }
        // Optionally handle labels and comments here
    }

    visitDirective(ctx: any): void {
        const directiveToken = ctx.WORD_DIRECTIVE ? ctx.WORD_DIRECTIVE() : null;
        if (directiveToken) {
            const directiveText = directiveToken.getText().toLowerCase();
            if (directiveText === '.word') {
                const valText = ctx.wordValue()?.getText();
                if (!valText) return;
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
    }

    visitInstruction(ctx: any): void {
        // Dispatch to specific instruction visitors
        if (ctx.lw()) return this.visitLw(ctx.lw());
        if (ctx.sw()) return this.visitSw(ctx.sw());
        if (ctx.add()) return this.visitAdd(ctx.add());
        if (ctx.addi()) return this.visitAddi(ctx.addi());
        if (ctx.sub()) return this.visitSub(ctx.sub());
        if (ctx.slt()) return this.visitSlt(ctx.slt());
        if (ctx.slti()) return this.visitSlti(ctx.slti());
        if (ctx.sll()) return this.visitSll(ctx.sll());
        if (ctx.slli()) return this.visitSlli(ctx.slli());
        if (ctx.andInstr()) return this.visitAnd(ctx.andInstr());
        if (ctx.andi()) return this.visitAndi(ctx.andi());
        if (ctx.orInstr()) return this.visitOr(ctx.orInstr());
        if (ctx.ori()) return this.visitOri(ctx.ori());
        if (ctx.beq()) return this.visitBeq(ctx.beq());
        if (ctx.bne()) return this.visitBne(ctx.bne());
        if (ctx.blt()) return this.visitBlt(ctx.blt());
        if (ctx.bge()) return this.visitBge(ctx.bge());

        console.warn('Unknown instruction:', ctx.getText());
    }

    // Helper to extract registers and immediates
    extractRegisters(ctx: any): string[] {
        return ctx.register ? ctx.register().map((r: any) => r.getText()) : [];
    }

    visitLw(ctx: any): void {
        const rd = ctx.register().getText();
        const offsetBase = ctx.offsetBase().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'LW',
            args: [rd, offsetBase],
        });
    }

    visitSw(ctx: any): void {
        const rs2 = ctx.register().getText();
        const offsetBase = ctx.offsetBase().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'SW',
            args: [rs2, offsetBase],
        });
    }

    visitAdd(ctx: any): void {
        const [rd, rs1, rs2] = this.extractRegisters(ctx);
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'ADD',
            args: [rd, rs1, rs2],
        });
    }

    visitAddi(ctx: any): void {
        const rd = ctx.register(0).getText();
        const rs1 = ctx.register(1).getText();
        const imm = ctx.immediate().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'ADDI',
            args: [rd, rs1, imm],
        });
    }

    visitSub(ctx: any): void {
        const [rd, rs1, rs2] = this.extractRegisters(ctx);
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'SUB',
            args: [rd, rs1, rs2],
        });
    }

    visitSlt(ctx: any): void {
        const [rd, rs1, rs2] = this.extractRegisters(ctx);
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'SLT',
            args: [rd, rs1, rs2],
        });
    }

    visitSlti(ctx: any): void {
        const rd = ctx.register(0).getText();
        const rs1 = ctx.register(1).getText();
        const imm = ctx.immediate().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'SLTI',
            args: [rd, rs1, imm],
        });
    }

    visitSll(ctx: any): void {
        const [rd, rs1, rs2] = this.extractRegisters(ctx);
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'SLL',
            args: [rd, rs1, rs2],
        });
    }

    visitSlli(ctx: any): void {
        const rd = ctx.register(0).getText();
        const rs1 = ctx.register(1).getText();
        const shamt = ctx.shamt().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'SLLI',
            args: [rd, rs1, shamt],
        });
    }

    visitAnd(ctx: any): void {
        const [rd, rs1, rs2] = this.extractRegisters(ctx);
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'AND',
            args: [rd, rs1, rs2],
        });
    }

    visitAndi(ctx: any): void {
        const rd = ctx.register(0).getText();
        const rs1 = ctx.register(1).getText();
        const imm = ctx.immediate().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'ANDI',
            args: [rd, rs1, imm],
        });
    }

    visitOr(ctx: any): void {
        const [rd, rs1, rs2] = this.extractRegisters(ctx);
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'OR',
            args: [rd, rs1, rs2],
        });
    }

    visitOri(ctx: any): void {
        const rd = ctx.register(0).getText();
        const rs1 = ctx.register(1).getText();
        const imm = ctx.immediate().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'ORI',
            args: [rd, rs1, imm],
        });
    }

    visitBeq(ctx: any): void {
        const rs1 = ctx.register(0).getText();
        const rs2 = ctx.register(1).getText();
        const label = ctx.label().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'BEQ',
            args: [rs1, rs2, label],
        });
    }

    visitBne(ctx: any): void {
        const rs1 = ctx.register(0).getText();
        const rs2 = ctx.register(1).getText();
        const label = ctx.label().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'BNE',
            args: [rs1, rs2, label],
        });
    }

    visitBlt(ctx: any): void {
        const rs1 = ctx.register(0).getText();
        const rs2 = ctx.register(1).getText();
        const label = ctx.label().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'BLT',
            args: [rs1, rs2, label],
        });
    }

    visitBge(ctx: any): void {
        const rs1 = ctx.register(0).getText();
        const rs2 = ctx.register(1).getText();
        const label = ctx.label().getText();
        this.instructions.push({
            type: 'instruction',
            line: ctx.start.line,
            mnemonic: 'BGE',
            args: [rs1, rs2, label],
        });
    }
}
