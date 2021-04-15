import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(
      user => {
        if(user == null){
          this.isLoggedIn = false;
        }else{
          this.isLoggedIn = true;
        }
      }
    );
  }

  get username(): string{
    try{
      return this.authService.user$.value.firstname;
    }catch (error){
      return "";
    }
  }

  onLogout(): void{
    this.authService.logout();
  }
}
