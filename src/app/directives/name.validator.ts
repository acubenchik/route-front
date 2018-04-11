import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import {validateName} from "./name.validator.service";

@Directive({
    selector: '[validateName][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: validateName, multi: true }
    ]
})
export class NameValidator {}