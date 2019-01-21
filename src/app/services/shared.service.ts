import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private readonly formData$ = new ReplaySubject<string>(1);

  public getFromData(): Observable<string> {
    return this.formData$;
  }

  public setFormData(data: string) {
    this.formData$.next(data);
  }
}
