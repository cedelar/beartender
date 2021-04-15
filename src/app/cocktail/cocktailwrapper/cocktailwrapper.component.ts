import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from 'src/app/_model/cocktail.model';

@Component({
  selector: 'app-cocktailwrapper',
  templateUrl: './cocktailwrapper.component.html',
  styleUrls: ['./cocktailwrapper.component.css']
})
export class CocktailwrapperComponent implements OnInit {
  @Input() cocktail: Cocktail;

  constructor() { }

  ngOnInit(): void {
  }
}
