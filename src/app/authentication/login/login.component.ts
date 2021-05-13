import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUser: FormGroup;
  public errormessage: string = "";
  
  constructor(    
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      });
  }

  onSubmit() {
    this.authService
    .login(
      this.loginUser.value.email,
      this.loginUser.value.password
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
      },
      (err: HttpErrorResponse) => {
          this.errormessage = `Er was een probleem tijdens het inloggen, probeer het later opnieuw`;
      }
    );
  }
}
