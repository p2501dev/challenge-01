import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

import { SharedService } from './services/shared.service';

@Component({
  selector: 'chll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  text: string;
  object: any;

  private readonly subscriptions = new Subscription();

  constructor(private sharedService: SharedService) {
    const sub = this.sharedService
      .getFromData()
      .pipe(throttleTime(250))
      .subscribe(data => this.convertFormData(data));
    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  formatFormData(): void {
    this.text = JSON.stringify(this.object, undefined, 2);
  }

  convertFormData(data: string): void {
    try {
      this.object = JSON.parse(data);
    } catch {
      return;
    }
  }
}
