import {AuthGuard} from "../services/auth.guard";

import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthGuard', () => {
    let service: AuthGuard;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
            ]
            ,
            providers: [AuthGuard]
        });

        service = TestBed.get(AuthGuard);

    });

    it('should return true if user is preset in localStorage', () => {
        localStorage.setItem("currentUser", "not null");
        let result: boolean = service.canActivate(null, null);
        expect(result).toBeTruthy();
    });

    it('should return false if user is not present in localStorage', () => {
        localStorage.setItem("currentUser", null);
        let result: boolean = service.canActivate(null, null);
        expect(result).toBeFalsy();
    });

});