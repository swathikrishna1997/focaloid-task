class sort {
person=[]
    constructor(...obj1) {
        for(let i of obj1){
            let value=JSON.parse(i);
            this.person=this.person.concat(value);
        }
        

    }
    sortFn() {
        //console.log(this.obj1)
        
        
        console.log("combined array", this.person)

       let sort= this.person.sort(function (a, b) {

            return new Date(a.DOB) - new Date(b.DOB);
        });

        console.log("sorted array", sort);

    }
    eighteenFn() {
        
        let arr1=this.person.filter(function(a){
            let today = new Date();
            let birthDate = new Date(a.DOB);
           let age = today.getFullYear() - birthDate.getFullYear();
            return age>18;
        });
       for(let i of arr1)
       console.log(i.user_name)
        

       

    }
}

let males = [{ "name": "Jishnu", "last_name": "Vishwanath", "user_name": "neolivz", "DOB": "20-JAN-1978", "Place": "Thodupuzha" }, { "name": "Binoy", "last_name": "John", "user_name": "carnage", "DOB": "07-APR-1997", "Place": "Ernakulam" }, { "name": "Graph", "last_name": "Overflow", "user_name": "graphOverflow", "DOB": "16-DEC-1993", "Place": "Ernakulam" }, { "name": "Shiniyas", "last_name": "Khan", "user_name": "shan", "DOB": "17-NOV-2001", "Place": "Ernakulam" }];
let females = [{ "name": "Gauri", "last_name": "Kumar", "user_name": "lilwolf", "DOB": "18-AUG-1994", "Place": "Alappuzha" }, { "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }];
let females2 = [{ "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }];
let m=JSON.stringify(males)
let f =JSON.stringify(females)
let o=JSON.stringify(females2)
let obj = new sort(m, f,o);
obj.sortFn();
obj.eighteenFn();
