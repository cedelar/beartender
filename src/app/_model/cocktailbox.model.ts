interface CocktailboxJson {
    name: string,
    subtitle: string,
    description: string, 
    amount: number,
    price: number,
    imageLink: string,
    choicetitle: string,
    choices: string,
    quote: string
}

export class Cocktailbox{
    constructor(
        private _name: string,
        private _subtitle: string,
        private _description: string, 
        private _amount: number,
        private _price: number,
        private _imageLink: string,

        private _choicetitle: string,
        private _choices: string[],
        private _quote: string

    ){}

    get name(): string {
        return this._name;
    }

    get subtitle(): string {
        return this._subtitle;
    }

    get description(): string {
        return this._description;
    }

    get amount(): number {
        return this._amount;
    }

    get price(): number {
        return this._price;
    }

    get imageLink(): string {
        return this._imageLink;
    }

    get choicetitle(): string {
        return this._choicetitle;
    }

    get choices(): string[] {
        return this._choices;
    }

    get quote(): string {
        return this._quote;
    }

    static fromJSON(json: CocktailboxJson): Cocktailbox{
        let jsonChoice: string = json.choices;
        let splitChoices: string[] = jsonChoice.split("---");
        return new Cocktailbox(
            json.name,
            json.subtitle,
            json.description,
            json.amount,
            json.price,
            json.imageLink,
            json.choicetitle,
            splitChoices,
            json.quote
        );
    }

}