export class NestResponse {
  status: number;
  headers: unknown;
  body: unknown;

  constructor(responsta: NestResponse) {
    Object.assign(this, responsta);
  }
}
