import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiRequest } from '../models/api-request.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private responseData = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  sendRequest(request: ApiRequest): void {
    const headers = new HttpHeaders(request.headers);
    let options = {
      headers: headers,
      observe: 'response' as 'body' // This tells HttpClient to return the full response
  };

  let observable: Observable<HttpResponse<any>>;

    switch (request.method.toUpperCase()) {
      case 'GET':
        observable = this.http.get(request.url, { ...options, observe: 'response' });
        break;
      case 'POST':
        observable = this.http.post<ApiResponse<any>>(request.url, request.body, { ...options, observe: 'response' });
        break;
      case 'PUT':
        observable = this.http.put<ApiResponse<any>>(request.url, request.body, { ...options, observe: 'response' });
        break;
      case 'DELETE':
        observable = this.http.delete<ApiResponse<any>>(request.url, { ...options, observe: 'response' });
        break;
      case 'PATCH':
        observable = this.http.patch<ApiResponse<any>>(request.url, request.body, { ...options, observe: 'response' });
        break;
      default:
        throw new Error('Unsupported request method.');
    }

    observable.subscribe(
      data => {
        this.responseData.next(data);
      },
      error => {
        this.responseData.next(error); 
      }
    );
  }

  getResponseData(): Observable<any> {
    return this.responseData.asObservable();
  }
}
