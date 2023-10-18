// To parse this data:
//
//   import { Convert, FinishResponse } from "./file";
//
//   const finishResponse = Convert.toFinishResponse(json);

export interface FinishResponse {
    status:  boolean;
    code:    number;
    message: string;
    data?:    Data;
}

export interface Data {
    id:         string;
    indicators: string[];
    passion:    string;
    time:       Date;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toFinishResponse(json: string): FinishResponse {
        return JSON.parse(json);
    }

    public static finishResponseToJson(value: FinishResponse): string {
        return JSON.stringify(value);
    }
}
