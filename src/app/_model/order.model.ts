interface OrderJson{
    id: number,
    userEmail: string,
    isDelivery: boolean,
    adress: string,
    date: string,
    boxMap: Map<string, number>,
    cocktailMap: Map<string, number>,
    glassAmount: number,
    price: number,
    isPaid: boolean
}

export class Order{
    constructor(
        private _id: number,
        private _userEmail: string,
        private _isDelivery: boolean,
        private _adress: string,
        private _date: string,
        private _boxMap: Map<string, number>,
        private _cocktailMap: Map<string, number>,
        private _glassAmount: number,
        private _price: number,
        private _isPaid: boolean 
    ){}

    get id(): number{
        return this._id;
    }

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

    get isPaid(): boolean{
        return this._isPaid;
    }

    static fromJSON(json: OrderJson): Order{
        return new Order(
            json.id,
            json.userEmail,
            json.isDelivery,
            json.adress,
            json.date,
            json.boxMap,
            json.cocktailMap,
            json.glassAmount,
            json.price,
            json.isPaid
        );
    }

    private static reviver(key: any, value: any) {
        if(typeof value === 'object' && value !== null) {
          if (value.dataType === 'Map') {
            return new Map(value.value);
          }
        }
        return value;
      }
}