import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { OrderDataService } from 'src/app/_services/order-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public isConfirmState: boolean;

  constructor(
    private _authService: AuthenticationService,
    private _orderdataService: OrderDataService,
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

    this._orderdataService.confirmationState$.subscribe(
      val => {
        this.isConfirmState = val
      }
    );
  }


}

