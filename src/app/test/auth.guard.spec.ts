import {AuthGuard} from "../services/auth.guard";

import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from "@angular/router";
import 'rxjs/Rx';

describe('AuthGuard', () => {
    let service: AuthGuard;

    let router = {
        navigate: jasmine.createSpy("navigate")
    };

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
            ]
            ,
            providers: [
                {provide: Router, useValue: router},
                AuthGuard
            ]
        });

        service = TestBed.get(AuthGuard);

    });

    it('should return true if user is preset in localStorage', () => {
        localStorage.setItem("currentUser", "not null");
        let result: boolean = service.canActivate(null, null);
        expect(result).toBeTruthy();
    });

    it('should return false if user is not present in localStorage', () => {
        localStorage.clear();
        let result: boolean = service.canActivate(null, null);
        expect(result).toBeFalsy();
        expect(router.navigate).toHaveBeenCalledWith([ '/login' ] );
    });

});