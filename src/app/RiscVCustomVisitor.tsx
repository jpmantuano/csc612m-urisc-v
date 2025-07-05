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
            this.visit(ctx.line(i)); // visits each line properly
        }
        return this.instructions;
    }

    visitLine(ctx: any): void {
        if (ctx.directive()) {
            this.visitDirective(ctx.directive());
        } else if (ctx.instruction()) {
            this.visitInstruction(ctx.instruction());
        }
        // Labels and comments can be handled here if needed
    }

    visitDirective(ctx: any): void {
        if (ctx.WORD_DIRECTIVE()) {
            const valText = ctx.wordValue()?.getText();
            if (!valText) return; // safety check
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
        const mnemonic = ctx.children[0].getText().toUpperCase();
        const args: string[] = [];

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