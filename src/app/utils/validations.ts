import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static match(date1: string, date2: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const fecha1 = controls.get(date1);
      const fecha2 = controls.get(date2);
      if (fecha2?.errors && !fecha2.errors['date']) {
        return null;
      }
      if (fecha1?.value > fecha2?.value) {
        controls.get(date2)?.setErrors({ date: true });
        return { date: true };
      } else {
        return null;
      }
    };
  }
}