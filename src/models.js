class User {

    constructor(id, name, username, email, adress, phone, website, company, userURL ){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.adress = adress;
        this.phone = phone;
        this.website = website;
        this.company = company;
        this.userURL = userURL;
    }
}





// export interface IUsers {
//     id: Number;
//     name: String;
//     username: String;
//     email: String;
//     address: IAddress;
//     phone: String;
//     website: String;
//     company: ICompany;
// }

// export interface IAddress {
//     street: String;
//     suite: String;
//     ciry: String;
//     zipcode: String;
//     geo: IGeo;
// }

// export interface ICompany {
//     name: String;
//     catchPhrase: String;
//     bs: String;
// }

// export interface IGeo {
//     lat: String;
//     lng: String;
// }