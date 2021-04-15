interface FaqQuestionJson{
    question: string,
    answer: string
}

export class FaqQuestion{
    constructor(
        private _question: string,
        private _answer: string
    ){}

    get question(): string {
        return this._question;
    }

    get answer(): string {
        return this._answer;
    }

    static fromJSON(json: FaqQuestionJson): FaqQuestion{
        return new FaqQuestion(
            json.question,
            json.answer,
        );
    }
}