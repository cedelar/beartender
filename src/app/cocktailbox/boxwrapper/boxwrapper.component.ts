import { Component, OnInit, Input } from '@angular/core';
import { Cocktailbox } from 'src/app/model/cocktailbox.model';

@Component({
  selector: 'app-boxwrapper',
  templateUrl: './boxwrapper.component.html',
  styleUrls: ['./boxwrapper.component.css']
})
export class BoxwrapperComponent implements OnInit {
  @Input() cocktailbox : Cocktailbox | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
