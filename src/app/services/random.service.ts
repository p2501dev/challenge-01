import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RandomService {
  private seq: number;
  private maxNodes = 100;

  public getRandomFormData(): string {
    this.seq = 0;

    const randomObj = this.getRandomObject(5);
    const randomTxt = JSON.stringify(randomObj, undefined, 2);

    return randomTxt;
  }

  private getRandomObject(seedCount?: number): object {
    const result = {};

    if (this.seq > this.maxNodes) {
      return result;
    }

    const propCount = this.getRandomNumber(6) + (seedCount !== undefined ? seedCount : 1);
    for (let index = 0; index < propCount; index++) {
      const label = this.getSeqAsLetter();
      const value = this.getRandomNumber(4) === 0 ? this.getRandomObject() : this.getRandomValue();

      Object.defineProperty(result, label, <PropertyDescriptor>{
        value: value,
        writable: true,
        enumerable: true,
      });
    }

    return result;
  }

  private getRandomValue(): number | string | boolean {
    switch (this.getRandomNumber(3)) {
      case 0:
        return this.getRandomBoolean();
      case 1: {
        const number = this.getRandomNumber(999999);
        return this.getRandomBoolean() ? number : number * -1;
      }
      case 2:
        return 'Lorem ipsum';
    }

    return false;
  }

  private getRandomBoolean(): boolean {
    return Math.floor(Math.random() * Math.floor(2)) === 0;
  }

  private getRandomNumber(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private getSeqAsLetter(): string {
    this.seq += 1;
    return this.convertLetter(this.seq);
  }

  private convertLetter(number: number): string {
    const baseChar = 'A'.charCodeAt(0);
    let result = '';

    do {
      number -= 1;
      result = String.fromCharCode(baseChar + (number % 26)) + result;
      // tslint:disable-next-line:no-bitwise
      number = (number / 26) >> 0;
    } while (number > 0);

    return result;
  }
}
