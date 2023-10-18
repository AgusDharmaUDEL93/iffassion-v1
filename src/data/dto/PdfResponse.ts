// To parse this data:
//
//   import { Convert, PDFResponse } from "./file";
//
//   const pDFResponse = Convert.toPDFResponse(json);

export interface PDFResponse {
    status:  boolean;
    code:    number;
    message: string;
    data?:    Data;
}

export interface Data {
    pdf: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPDFResponse(json: string): PDFResponse {
        return JSON.parse(json);
    }

    public static pDFResponseToJson(value: PDFResponse): string {
        return JSON.stringify(value);
    }
}
