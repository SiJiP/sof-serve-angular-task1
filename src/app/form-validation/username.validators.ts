import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{
    static ageValidator(control: AbstractControl): ValidationErrors | null {
        let today: Date = new Date();
        let minAge : Date = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        let date = control.value.split('-');
        let birthDate = new Date(date[0], date[1], date[2]);
        if(birthDate > minAge){
            return {ageValidator: true}
        }  
        return null;
    }
}