class sort {

    constructor(obj1, obj2, obj3) {
        this.obj1 = obj1;
        this.obj2 = obj2;
        this.obj3 = obj3;

    }
    sortFn() {
        let arr = this.obj1.concat(this.obj2, this.obj3)
        console.log("combined array", arr)

        arr.sort(function (a, b) {

            return new Date(a.DOB) - new Date(b.DOB);
        });

        console.log("sorted array", arr);

    }
    eighteenFn() {
        let arr = this.obj1.concat(this.obj2, this.obj3)
        let n = arr.length
        for (let i = 0; i < n; i++) {
            let today = new Date();
            let birthDate = new Date(arr[i].DOB);
            let age = today.getFullYear() - birthDate.getFullYear();
            if (age > 18) {
                console.log(arr[i].user_name)
            }
        }

    }
}

let males = [{ "name": "Jishnu", "last_name": "Vishwanath", "user_name": "neolivz", "DOB": "20-JAN-1984", "Place": "Thodupuzha" }, { "name": "Binoy", "last_name": "John", "user_name": "carnage", "DOB": "07-APR-1997", "Place": "Ernakulam" }, { "name": "Graph", "last_name": "Overflow", "user_name": "graphOverflow", "DOB": "16-DEC-1993", "Place": "Ernakulam" }, { "name": "Shiniyas", "last_name": "Khan", "user_name": "shan", "DOB": "17-NOV-2001", "Place": "Ernakulam" }];
let females = [{ "name": "Gauri", "last_name": "Kumar", "user_name": "lilwolf", "DOB": "18-AUG-1994", "Place": "Alappuzha" }, { "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }];
let females2 = [{ "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }];

let obj = new sort(males, females, females2);
obj.sortFn();
obj.eighteenFn();