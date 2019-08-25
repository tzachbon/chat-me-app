import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IHttp } from 'src/app/models/http.model';
import { User } from '../../../../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  form: FormGroup;
  showPassword = false;
  isLoading = false;
  user$: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initUserCheck();
    this.initForm();
  }

  initUserCheck() {
    this.user$ = this.authService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/main'], { relativeTo: this.route });
      }
    });
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    this.isLoading = true;
    const { email, password } = this.form.value;
    this.authService.onSignIn(email, password).subscribe((res: IHttp<{ token: string, user: User }>) => {
      this.isLoading = false;
      console.log('====================================');
      console.log(res.body);
      console.log('====================================');
      const { token, user } = res.body;
      this.authService.setUser(user);
      this.authService.setToken(token);
      this.isLoading = false;

    })
  }

  ngOnDestroy() {
    if (this.user$) {
      this.user$.unsubscribe();
    }
  }

}
