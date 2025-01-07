export type ApplicationError = {
    name: string,
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
  };

export type RequestError = {
status: number,
data: object | null,
statusText: string,
name: string,
message: string,
};

export type ErrorMessages = {
  generic: string,
  loginFail: string,
  duplicatedEmail: string,
  duplicatedSession: string,
  invalidFields: string,
  missingValues: string,
  userNotFound: string,
  invalidKey: string,
  alreadyValidated: string,
  pendingValidation: string,
  lowerPermission: string,
  dataNotFound: string,
  unauthorized: string,
  invalidExpirationDate: string,
  uploadError: string,
};
