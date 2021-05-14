import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_model/order.model';
import { DashboardDataService } from 'src/app/_services/dashboard-data.service';

@Component({
  selector: 'app-orderedboxlist',
  templateUrl: './orderedboxlist.component.html',
  styleUrls: ['./orderedboxlist.component.css']
})
export class OrderedboxlistComponent implements OnInit {
  public orders: Order[];
  public errormessage: string = "";

  constructor(
    private _dashboardDataService: DashboardDataService
  ) { }

  ngOnInit(): void {
    this._dashboardDataService.orders$.subscribe(
      o => {
        this.orders = o;
      },
      (err: HttpErrorResponse) => {
          console.log(err.message);
          this.errormessage = `Er was een probleem tijdens het laden, probeer het later opnieuw`;
      }
    )
  }
}
