import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private _authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._authService.user$.subscribe(
      user => {
        if(user == null){
          this.router.navigate(['/home']);
        }
      }
    );
  }
}

