interface OrderJson{
    userEmail: string,
    isDelivery: boolean,
    adress: string,
    date: string,
    boxMap: Map<string, number>,
    cocktailMap: Map<string, number>,
    glassAmount: number,
    price: number
}

export class Order{
    constructor(
        private _userEmail: string,
        private _isDelivery: boolean,
        private _adress: string,
        private _date: string,
        private _boxMap: Map<string, number>,
        private _cocktailMap: Map<string, number>,
        private _glassAmount: number,
        private _price: number
    ){}

    get userEmail(): string{
        return this._userEmail;
    }

    get isDelivery(): boolean{
        return this._isDelivery;
    }

    get adress(): string{
        return this._adress;
    }

    get date(): string{
        return this._date;
    }

    get boxMap(): Map<string, number>{
        return this._boxMap;
    }

    get cocktailMap(): Map<string, number>{
        return this._cocktailMap;
    }

    get glassAmount(): number{
        return this._glassAmount;
    }

    get price(): number{
        return this._price;
    }

    static fromJSON(json: OrderJson): Order{
        return new Order(
            json.userEmail,
            json.isDelivery,
            json.adress,
            json.date,
            json.boxMap,
            json.cocktailMap,
            json.glassAmount,
            json.price
        );
    }
}