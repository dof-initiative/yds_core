import fs from "node:fs";
import { execSync } from "child_process";

export class LinkMLValidateResults {
    private _exitCode: number
    private _stdout: string[]
    
    constructor(exitCode: number, stdout: string) {
        this._exitCode = exitCode

        // parse stdout (split on newline and set split results to _stdout)
        this._stdout = stdout.split("\n")
    }

    public get exitCode() {
        return this._exitCode
    }

    public get stdout() {
        return this._stdout
    }
}

export function runLinkMLValidate(schemaPath: string, dataPath: string): LinkMLValidateResults {
    const command = "linkml-validate -s " + schemaPath + " " + dataPath
    try {
        const stdout = execSync(command).toString()
        return new LinkMLValidateResults(0, stdout)
    } catch (error: any) {
        return new LinkMLValidateResults(error.status, error.stdout)
    }
}
