import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Router} from "@angular/router";
import {User} from "../model/User";

@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private router: Router) {
    }

    url: string;
    headers: Headers;
    options: RequestOptions;
    creds: String;
    updatedUser: string;

    authenticate(user: User) {
        this.url = "http://localhost:8050/auth/oauth/token";
        this.headers = new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(user.username + ':' + user.password)
        });
        this.options = new RequestOptions({headers: this.headers});
        this.creds = 'grant_type=client_credentials';
        this.http.post(this.url, this.creds, this.options)
            .map(res => res.json()).subscribe(response => {
            localStorage.setItem('currentUser', JSON.stringify({
                userName: user.username,
                token: response.access_token
            }));
            this.router.navigateByUrl("/items");
        }, (error) => {
            console.log('error in', error);
        });
    }
}