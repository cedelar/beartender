import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cocktailbox } from 'src/app/_model/cocktailbox.model';
import { CocktailboxDataService } from 'src/app/_services/cocktailbox-data.service';

@Component({
  selector: 'app-cocktailbox',
  templateUrl: './cocktailbox.component.html',
  styleUrls: ['./cocktailbox.component.css']
})
export class CocktailboxComponent implements OnInit {
  public cocktailboxes: Cocktailbox[];
  public errormessage: string = "";

  constructor(
    private _cocktailboxDataService: CocktailboxDataService
  ) { }

  ngOnInit(): void {
    this._cocktailboxDataService.cocktailboxes$.subscribe(
      v => {
        this.cocktailboxes = v;
      },
      (err: HttpErrorResponse) => {
          this.errormessage = `Er was een probleem tijdens het laden van de boxen, probeer het later opnieuw`;
      }
    );
  }
}
