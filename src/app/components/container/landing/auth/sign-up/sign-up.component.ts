import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../../services/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { IHttp } from 'src/app/models/http.model';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  showPassword = false;
  submitted = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      image: new FormControl('')
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Value = reader.result;
      this.form.controls['image'].setValue(base64Value);
      this.form.updateValueAndValidity();
    };
  }


  onSubmit() {
    this.isLoading = true;

    const userData: User = this.form.value;
    this.authService.onSignUp(userData).subscribe((res: IHttp<{ user: User, token: string }>) => {
      if (res.isValid) {
        console.log('====================================');
        console.log(res.body);
        console.log('====================================');
        const { token, user } = res.body;
        this.authService.setUser(user);
        this.authService.setToken(token);
        this.isLoading = false;
        this.submitted = true;
        this.router.navigate(['/'], { relativeTo: this.route });
      }
    }, e => {
      console.error('Sign Up Error: ', e);

      this.authService.setUser(null);
      this.authService.setToken(null);
      this.isLoading = false;
      this.submitted = true;
    });
  }
}
