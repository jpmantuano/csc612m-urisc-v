import antlr4 from 'antlr4';

const ErrorListener = antlr4.error?.ErrorListener;

if (!ErrorListener) {
    throw new Error('antlr4.error.ErrorListener not found. Check your antlr4 package version.');
}

export class SyntaxErrorListener extends ErrorListener {
    public errors: string[] = [];

    syntaxError(
        recognizer: any,
        offendingSymbol: any,
        line: number,
        column: number,
        msg: string,
        e: any
    ): void {
        this.errors.push(`Line ${line}:${column} - ${msg} Exception: ${e}`);
    }
}