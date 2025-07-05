// src/antlr/SyntaxErrorListener.ts
import antlr4 from 'antlr4';

export class SyntaxErrorListener extends antlr4.error.ErrorListener {
    public errors: string[] = [];

    syntaxError(
        recognizer: any,
        offendingSymbol: any,
        line: number,
        column: number,
        msg: string,
        e: any
    ): void {
        this.errors.push(`Line ${line}:${column} - ${msg}`);
    }
}