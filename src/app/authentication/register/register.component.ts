import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  ValidationErrors, 
  ValidatorFn, 
  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public newUser: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newUser = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email],
        //serverSideValidateUsername(this.authService.checkUserNameAvailability),
      ],
      street: ['', [Validators.required, Validators.pattern(/[^0-9]+/)]],
      number: ['', [Validators.required, Validators.pattern(/[0-9]+/)]],
      postcode: ['', [Validators.required, Validators.pattern(/[0-9]+/)]],
      city: ['', [Validators.required, Validators.pattern(/[^0-9]+/)]],
      passwordGroup: this.fb.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(8)
            ],
          ],
          confirmPassword: ['', Validators.required],
        },
        { validator: comparePasswords }
      ),
    });
  }

  onSubmit() {
    this.authService
    .register(
      this.newUser.value.firstname,
      this.newUser.value.lastname,
      this.newUser.value.email,
      this.newUser.value.street,
      this.newUser.value.number,
      this.newUser.value.postcode,
      this.newUser.value.city,
      this.newUser.value.passwordGroup.password
    )
    .subscribe(
      (val) => {
        if (val) {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
            this.authService.redirectUrl = undefined;
          } else {
            this.router.navigate(['/home']);
          }
        }
      }
    );
  }
}

function comparePasswords(control: AbstractControl): ValidationErrors {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value
    ? null
    : { passwordsDiffer: true };
}

function serverSideValidateUsername(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return checkAvailabilityFn(control.value).pipe(
      map((available) => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}
