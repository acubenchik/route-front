import {validateName} from "../directives/name.validator.service";
import {FormControl} from '@angular/forms';


describe('NameValidator', () => {

    it('should determine that name is invalid', () => {
        let result = validateName(<FormControl>{value: 'Bob'});
        expect(result.valid).toBeFalsy();
    });

    it('should determine that name is valid if name is null', () => {
        let result = validateName(<FormControl>{});
        expect(result).toBeNull();
    });

    it('should determine that name is valid', () => {
        let result = validateName(<FormControl>{value: 'dummy name'});
        expect(result).toBeNull();
    });
});