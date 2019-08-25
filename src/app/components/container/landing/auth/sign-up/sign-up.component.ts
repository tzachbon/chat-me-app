import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../../services/auth/auth.service';





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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
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
    setTimeout(() => {
      this.isLoading = false;
      this.submitted = true;
      console.log('====================================');
      console.log(this.form.value);
      console.log('====================================');
    }, 50000);
  }

}
