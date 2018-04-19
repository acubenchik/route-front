import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Router} from "@angular/router";
import {User} from "../model/User";

@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private router: Router) {
    }

    public authenticate(user: User) {
        let url = "http://localhost:8050/auth/oauth/token";
        let headers: Headers = new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(user.username + ':' + user.password)
        });
        let options : RequestOptions = new RequestOptions({headers: headers});
        let creds : string = 'grant_type=client_credentials';
        this.http.post(url, creds, options)
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

    public getHeaders() : Headers {
        let headers: Headers = new Headers({
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
        });
        return headers;
    }
}