import { Injectable } from '@angular/core';
import { FaqQuestion } from '../model/faqquestion.model';
import { FAQQUESTIONS } from '../static/faq/mock-faq';

@Injectable({
  providedIn: 'root'
})
export class FaqDataService {
  private _faqQuestions = FAQQUESTIONS;

  constructor() { }

  get faqQuestions(): FaqQuestion[]{
    return this._faqQuestions;
  }
}
