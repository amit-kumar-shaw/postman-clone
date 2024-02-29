import { Component, OnInit } from '@angular/core';
import { ApiRequest } from 'src/app/models/api-request.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-request-builder',
  templateUrl: './request-builder.component.html',
  styleUrls: ['./request-builder.component.css']
})
export class RequestBuilderComponent implements OnInit {
  selectedMethod: string;
  requestUrl: string;
  httpMethods: string[] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  apiResponse: any;

  constructor(private apiService: ApiService) {
    this.selectedMethod = 'GET'; // Default selection
    this.requestUrl = '';
  }

  ngOnInit(): void {}

  sendRequest(): void {
    const request: ApiRequest = {
      method: this.selectedMethod,
      url: this.requestUrl,
    };
    console.log(request);
    this.apiService.sendRequest(request);
    // this.apiService.sendRequest(request).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.apiResponse = response;
    //   },
    //   error: (error) => {
    //     console.error(error);
    //     this.apiResponse = error;
    //   }
    // });
  }
}
