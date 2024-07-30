import { TArray, TObject, Type } from "@sinclair/typebox";

export const createSuccessResponse = (
  statusCodeObject: any,
  message: string,
  data: any,
) => {
  return {
    timestamp: new Date(),
    statusCode: statusCodeObject?.code || 200,
    status: statusCodeObject?.name || "OK",
    message: message || "Success",
    success: true,
    data: data || {},
  };
};

export const createErrorResponse = (statusCodeObject: any, message: string) => {
  return {
    timestamp: new Date(),
    statusCode: statusCodeObject?.code || 500,
    status: statusCodeObject?.name || "Internal Server Error",
    message: message || "Error",
    success: false,
  };
};

export function SuccessResponseDecorator(dataSchema: TObject | TArray) {
  return Type.Object({
    timestamp: Type.Date(),
    statusCode: Type.Number(),
    status: Type.String(),
    message: Type.String(),
    success: Type.Boolean(),
    data: dataSchema,
  });
}

export function ErrorResponseDecorator() {
  return Type.Object({
    timestamp: Type.Date(),
    statusCode: Type.Number(),
    status: Type.String(),
    message: Type.String(),
    success: Type.Boolean(),
  });
}
