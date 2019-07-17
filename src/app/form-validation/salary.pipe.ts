import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "salaryPipe"
})
export class SalaryPipe implements PipeTransform {
  transform(value: any, args?: any) {
    if (value > 1000000) {
      return null;
    }

    return value;
  }
}
