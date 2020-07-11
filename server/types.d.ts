declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    file: {
      location: string;
    };
  }
  export interface Response {
    user: {
      id: string;
    };
  }
}
