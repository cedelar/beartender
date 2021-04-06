import { Component, OnInit } from '@angular/core';
import { FaqQuestion } from 'src/app/model/faqquestion.model';
import { FaqDataService } from 'src/app/services/faq-data.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(
    private _faqQuestionDataService: FaqDataService
  ) { }

  ngOnInit(): void {
  }

  get faqQuestions(): FaqQuestion[]{
    return this._faqQuestionDataService.faqQuestions;
  }
}
