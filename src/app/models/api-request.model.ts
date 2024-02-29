export interface ApiRequest {
    method: string;
    url: string;
    body?: any; 
    headers?: { [header: string]: string | string[] };
  }
  