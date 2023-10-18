// To parse this data:
//
//   import { Convert, StartChainingResponse } from "./file";
//
//   const startChainingResponse = Convert.toStartChainingResponse(json);

export interface ChainingResponse {
    status:  boolean;
    code:    number;
    message: string;
    data?:    Data;
}

export interface Data {
    chaining: Chaining;
    question?: Question;
}

export interface Chaining {
    finish: boolean;
    id:     string;
}

export interface Question {
    id:       string;
    question: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toStartChainingResponse(json: string): ChainingResponse {
        return JSON.parse(json);
    }

    public static startChainingResponseToJson(value: ChainingResponse): string {
        return JSON.stringify(value);
    }
}
