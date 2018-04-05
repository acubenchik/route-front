import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {User} from "../model/User";
import {AuthenticationService} from "../services/authentication.service";

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    user: User;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        localStorage.removeItem('currentUser');
        this.user = new User("", "");
    }

    onSubmit() {
        this.authenticationService.authenticate(this.user);
    }
}