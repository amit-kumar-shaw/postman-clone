import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRequest } from '../models/api-request.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendRequest(request: ApiRequest): Observable<ApiResponse<any>> {

    const headers = new HttpHeaders(request.headers);

    switch (request.method.toUpperCase()) {
      case 'GET':
        return this.http.get<ApiResponse<any>>(request.url, { headers });
      case 'POST':
        return this.http.post<ApiResponse<any>>(request.url, request.body, { headers });
      case 'PUT':
        return this.http.put<ApiResponse<any>>(request.url, request.body, { headers });
      case 'DELETE':
        return this.http.delete<ApiResponse<any>>(request.url, { headers });
      case 'PATCH':
        return this.http.patch<ApiResponse<any>>(request.url, request.body, { headers });
      default:
        throw new Error('Unsupported request method.');
    }
  }
}
