import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean;
  public isAdmin: boolean;

  constructor(private _authService: AuthenticationService) { }

  ngOnInit(): void {
    this._authService.user$.subscribe(
      user => {
        if(user == null){
          this.isLoggedIn = false;
          this.isAdmin = false;
        }else{
          this.isLoggedIn = true;
          if(user.isAdmin){
            console.log("true");
            this.isAdmin = true;
          }else{
            console.log("false");
            this.isAdmin = false;
          }
        }
      }
    );
  }

  get username(): string{
    try{
      return this._authService.user$.value.firstname;
    }catch (error){
      return "";
    }
  }

  onLogout(): void{
    this._authService.logout();
  }
}
