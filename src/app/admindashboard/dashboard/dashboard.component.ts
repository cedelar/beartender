import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { DashboardDataService } from 'src/app/_services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _authService: AuthenticationService,
    private _dashboarddataService: DashboardDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._authService.user$.subscribe(
      user => {
        if(user == null || user.role != "admin"){
          this.router.navigate(['/home']);
        }
      }
    );
  }

}
