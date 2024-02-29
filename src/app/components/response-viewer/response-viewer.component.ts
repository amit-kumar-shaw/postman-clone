import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-response-viewer',
  templateUrl: './response-viewer.component.html',
  styleUrls: ['./response-viewer.component.css']
})
export class ResponseViewerComponent implements OnInit {
  responseData: any;
  private dataSubscription: Subscription;

  constructor(private apiService: ApiService) { 
    this.dataSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.dataSubscription = this.apiService.getResponseData().subscribe(
      data => {
        console.log(data);
        this.responseData = data; 
        console.log(this.responseData.status);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe(); 
    }
  }

}
