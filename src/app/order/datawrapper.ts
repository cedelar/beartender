export class Datawrapper{
    constructor(
        private _title: string,
        private _subtitle: string,
        private _imagelink: string,
        private _kind: string,
        private _amount: number
    ){}

    get title(): string {
        return this._title;
    }

    get subtitle(): string {
        return this._subtitle;
    }

    get imagelink(): string {
        return this._imagelink;
    }

    get kind(): string {
        return this._kind;
    }

    get amount(): number{
        return this._amount;
    }
}