export default class Customer {
    name!: string;
    email!: string;
    number!: number;
    address!: string;
    constructor(name: string, email: string, address: string, number: number) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.number = number;
    }
}
