export class BaseErrorListener {
    syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, msg: string, e: any): void {
        // default empty implementation
    }
}

export class SyntaxErrorListener extends BaseErrorListener {
    public errors: string[] = [];

    override syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, msg: string, e: any): void {
        this.errors.push(`Line ${line}:${column} - ${msg}`);
    }
}
