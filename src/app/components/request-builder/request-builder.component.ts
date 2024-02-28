import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-builder',
  templateUrl: './request-builder.component.html',
  styleUrls: ['./request-builder.component.css']
})
export class RequestBuilderComponent implements OnInit {
  selectedMethod: string;
  requestUrl: string;
  httpMethods: string[] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

  constructor() {
    this.selectedMethod = 'GET'; // Default selection
    this.requestUrl = '';
  }

  ngOnInit(): void {}

  sendRequest(): void {
    const request = {
      method: this.selectedMethod,
      url: this.requestUrl,
      // Add more properties as needed
    };
    // this.apiService.sendRequest(request).subscribe({
    //   next: (response) => {
    //     console.log(response); // Handle the response accordingly
    //     // You might want to display this response in the UI
    //   },
    //   error: (error) => {
    //     console.error(error); // Handle errors
    //   }
    // });
  }
}
