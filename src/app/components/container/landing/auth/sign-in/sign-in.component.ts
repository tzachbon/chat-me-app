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
        this.navigateToPath();
      }
    });
  }

  initForm() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    this.form = new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email]),
      password: new FormControl(password, [Validators.required, Validators.minLength(6)]),
      saveUserData: new FormControl(true)
    });

    if (email && password) {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.isLoading = true;
    const { email, password } = this.form.value;

    this.authService.onSignIn(email, password).subscribe((res: IHttp<{ token: string, user: User }>) => {
      this.onSaveUserData(email, password);
      const { token, user } = res.body;
      this.authService.setUser(user);
      this.authService.setToken(token);
      this.isLoading = false;

    })
  }

  navigateToPath() {
    const path = localStorage.getItem('path');
    if (path && !path.match('sign')) {
      this.router.navigate([path], { relativeTo: this.route });
      localStorage.removeItem('path');
    } else {
      this.router.navigate(['/main'], { relativeTo: this.route });
    }
  }

  onSaveUserData(email, password) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

  }

  ngOnDestroy() {
    if (this.user$) {
      this.user$.unsubscribe();
    }
  }

}
