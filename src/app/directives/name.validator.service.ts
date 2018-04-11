import {FormControl} from '@angular/forms';

export function validateName(c: FormControl): any {
    if (c.value && c.value.startsWith("Bob")) {
        return {valid: false};
    }
    return null;
}