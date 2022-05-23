import { NestResponse } from '../../core/http/nest-response';

class NestResponseBuilder {
  private resposta: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };

  public status(status: number): NestResponseBuilder {
    this.resposta.status = status;
    return this;
  }

  public headers(headers: unknown): NestResponseBuilder {
    this.resposta.headers = headers;
    return this;
  }

  public body(body: unknown): NestResponseBuilder {
    this.resposta.body = body;
    return this;
  }

  public build() {
    return new NestResponse(this.resposta);
  }
}

export { NestResponseBuilder };
