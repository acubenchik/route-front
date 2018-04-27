import {FormControl} from '@angular/forms';

interface ValidateFunction {
    (c: FormControl): {valid: boolean} | null;
}

export let validateName: ValidateFunction =
    function (c: FormControl): {valid: boolean} | null {
        if (c.value && c.value.startsWith("Bob")) {
            return {valid: false};
        }
        return null;
    };