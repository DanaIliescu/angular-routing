import {FormControl} from '@angular/forms'

export class InternshipValidator {
    static getInitialsValidator(){
        return function(control: FormControl){
            //custom code
            if (control.value.match(/^123/)){
            return {'initialsError':true}
            }
        }
    }

    static getIdValidator() {
        return function (control: FormControl):any{
            if (!control.value.match(/^(0|[1-9][0-9]*)$/) && control.value.length > 0) {
                return {'numberError':true}
            }

            if (control.value.length < 6 && control.value.length > 0){
                return {'idError':true}
            }
        }
    }
}