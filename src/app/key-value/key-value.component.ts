import { Component } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css'],
})
export class KeyValueComponent {
  requestUrl: string;
  params: Array<{ key: string; value: string }> = [{ key: '', value: '' }];

  constructor() {
    this.requestUrl = '';
    this.params = [{ key: '', value: '' }];
  }

  addParam(): void {
    this.params.push({ key: '', value: '' });
    console.log(this.params);
  }

  deleteParam(index: number): void {
    this.params.splice(index, 1);
  }
}
