interface UserJson{
    firstname: string,
    lastname: string,
    email: string,
    street: string,
    number: string,
    postcode: string,
    city: string, 
    isAdmin: boolean
}

export class User{
    constructor(
        private _firstname: string,
        private _lastname: string,
        private _email: string,
        private _street: string,
        private _number: string,
        private _postcode: string,
        private _city: string, 
        private _isAdmin: boolean
    ){}

    get firstname(): string {
        return this._firstname;
    }

    get lastname(): string {
        return this._lastname;
    }

    get email(): string {
        return this._email;
    }

    get street(): string {
        return this._street;
    }

    get number(): string {
        return this._number;
    }

    get postcode(): string {
        return this._postcode;
    }

    get city(): string {
        return this._city;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    toString(): string{
        return "User:" + 
            "\nfirstname: " + this._firstname +
            "\nlastname: " + this._lastname + 
            "\nemail: " + this._email +
            "\nadress: " + this._street + " " + this._number + ", " + this._postcode + " " + this._city + 
            "\nAdmin?: " + this._isAdmin;
    }

    static fromJSON(json: UserJson): User{
        return new User(
            json.firstname,
            json.lastname,
            json.email,
            json.street,
            json.number,
            json.postcode,
            json.city, 
            json.isAdmin
        );
    }
}