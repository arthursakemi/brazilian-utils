import { STATES_DATA } from '../../../common/states';

import { Validator } from './validator';

export class RN extends Validator {
  protected checkLength(ie: string): boolean {
    return STATES_DATA.RN.ieLength.includes(ie.length);
  }

  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '20';
  }

  protected calcIe(ie: string): boolean {
    return this.calcDigit(ie);
  }

  private calcDigit(ie: string): boolean {
    const length = ie.length;
    const position = length - 1;
    let weight = length;
    const body = ie.substr(0, position);
    let sum = 0;

    body.split('').forEach((digit) => {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });

    const rest = sum % 11;
    let dig = 11 - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  }
}
