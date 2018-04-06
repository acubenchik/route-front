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

    it('should create an instance', () => {
        expect(service).toBeDefined();
    });

});