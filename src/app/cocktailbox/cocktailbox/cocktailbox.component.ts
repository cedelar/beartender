import { Component, OnInit } from '@angular/core';
import { Cocktailbox } from 'src/app/model/cocktailbox.model';
import { CocktailboxDataService } from 'src/app/services/cocktailbox-data.service';

@Component({
  selector: 'app-cocktailbox',
  templateUrl: './cocktailbox.component.html',
  styleUrls: ['./cocktailbox.component.css']
})
export class CocktailboxComponent implements OnInit {

  constructor(
    private _cocktailboxDataService: CocktailboxDataService
  ) { }

  ngOnInit(): void {
  }

  get cocktailboxes(): Cocktailbox[]{
    return this._cocktailboxDataService.cocktailboxes;
  }
  
}
