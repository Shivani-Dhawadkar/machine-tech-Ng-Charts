import { AbstractControl, ValidationErrors } from "@angular/forms";



export class chartValueValidator {
  public static validChartValue (control : AbstractControl) : null | ValidationErrors{
    let val = +control.value as number;
    if(!val){
        return null
    }
    if(val > 100){
        return {
            invalidValue : `value should be less than 100`
        }
    }else{
        return null
    }
    }
}