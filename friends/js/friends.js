/**
 * Create a Friend class with the following properties
 * - name (string)
 * - email (string)
 * - phone (string)
 * 
 * Create an collection of 3 to 5 friends with any values.
 * 
 * Iterate through the collection and display each friend
 * in the console.
 */

class Friend {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    display() {
        console.log(this.name, this.email, this.phone);
    }
}
const friends = [
    new Friend("Adam", "adam@friends.net", "513-555-1212"),
    new Friend("Barb", "barb@friends.net", "614-555-1212"),
    new Friend("Paty", "paty@friends.net", "859-555-1212")
]

const print = () => {
    console.log("NAME", "EMAIL           ", "PHONE")
    console.log("====", "================", "============")
    for(let f of friends) {
        console.log(f.name, f.email, f.phone);
    }
}

print();