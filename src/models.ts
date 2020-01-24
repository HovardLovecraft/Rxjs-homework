export interface IUsers {
    id: Number;
    name: String;
    username: String;
    email: String;
    address: IAddress;
    phone: String;
    website: String;
    company: ICompany;
}

export interface IAddress {
    street: String;
    suite: String;
    ciry: String;
    zipcode: String;
    geo: IGeo;
}

export interface ICompany {
    name: String;
    catchPhrase: String;
    bs: String;
}

export interface IGeo {
    lat: String;
    lng: String;
}