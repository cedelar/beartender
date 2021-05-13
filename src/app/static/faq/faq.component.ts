import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FaqQuestion } from 'src/app/_model/faqquestion.model';
import { FaqDataService } from 'src/app/_services/faq-data.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public faqQuestions: FaqQuestion[];
  public errormessage: string = "";

  constructor(
    private _faqQuestionDataService: FaqDataService
  ) { }

  ngOnInit(): void {
    this._faqQuestionDataService.faqQuestions$.subscribe(
      v => {
        this.faqQuestions = v;
      },
      (err: HttpErrorResponse) => {
          this.errormessage = `Er was een probleem tijdens het laden van de FAQ, probeer het later opnieuw`;
      }
    );
  }
}
