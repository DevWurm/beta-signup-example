import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beta-signup',
  templateUrl: './beta-signup.component.html',
  styleUrls: ['./beta-signup.component.css']
})
export class BetaSignupComponent implements OnInit {
  private firstname = "";
  private lastname = "";
  private email = "";

  constructor(private http: Http, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.http.post(`https://formspree.io/${environment.signupEmail}`, JSON.stringify({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        _format: "plain",
        _subject: "Beta signup",
        _replyto: this.email
      }),
      new RequestOptions({
        headers: new Headers({ ['Content-Type']: 'application/json', ['Accept']: 'application/json', })
      })).subscribe(res => {
        if (res.ok) {
          return this.router.navigate(["beta", "success"]);
        }
        console.error(res.text());
    });
  }
}
