import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ErrorStateMatcher} from '@angular/material/core';
import {
  MatSnackBar,
} from "@angular/material/snack-bar";
import {delay} from "rxjs";

interface MailChimpResponse {
  result: string;
  msg: string;
}


@Component({
  selector: 'app-pages-subscribe',
  templateUrl: './subcribe-page.html',
  styleUrls: ['./subcribe-page.css']
})
export class SubcribeComponent {
  requestActive = false;
  mailChimpEndpoint = 'https://the-banished.us21.list-manage.com/subscribe/post-json?u=aa13a26086f34e69f3e1a6c85&amp;id=874eb6e7f4&amp;f_id=00a982e6f0';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  // reactive form components
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  durationInSeconds = 3;

  async submit() {
    if (this.emailControl.status === 'VALID') {
      const params = new HttpParams()
        .set('EMAIL', this.emailControl.value ?? "")
        .set('b_aa13a26086f34e69f3e1a6c85_874eb6e7f4', '');

      const mailChimpUrl = this.mailChimpEndpoint + "&"+ params.toString();
      this.requestActive = true;

      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c')
        .subscribe(response => {
          if (response.result && response.result !== 'error') {
            this.requestActive = false;
            this.emailControl.reset();

            this._snackBar.open(response.msg, "Close", {
              duration: this.durationInSeconds * 1000,
            });
          }
          else {
            this.requestActive = false;
            this.emailControl.setErrors({'incorrect': true});
            this._snackBar.open(response.msg, "Close");
          }
        });
    }
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
