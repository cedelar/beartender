interface CocktailJson {
    name: string,
    description: string,
    imageLink: string
}

export class Cocktail{
    constructor(
        private _name: string,
        private _description: string,
        private _imageLink: string
    ){}

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get imageLink(): string {
        return this._imageLink;
    }

    static fromJSON(json: CocktailJson): Cocktail{
        return new Cocktail(
            json.name,
            json.description,
            json.imageLink
        );
    }
}