// var price = prompt ("nivTis fasi");

// if (price > 50) {
//     alert ("dzviria")
// }
// else if (price >= 20 && price <= 50) {
//     alert ("sashualo")
// }
// else if (price < 20) {
//     alert ("iafi")
// }
// console.log(price)

// var arr = [15,53,22,198,10,28,16,70,33,87];
// for (var i = 0; i < arr.length; i++)
// if (arr[i] % 2 ==1) {
//     console.log(arr[i] + " " + "kenti")
// }

// var arr = [15,53,22,198,10,28,16,70,33,87];
// for (var i = 0; i < arr.length; i++)
// if (arr[i] % 2 ==0) {
//     console.log(arr[i] + " " + "lutsi")
// }

// function display(){
//     var x = 1;
//     for (var i=0; i< arguments.length; i++)
//     x *= arguments[i];
//     document.write(x);
// }

// display()

// var user = {}
// user.name = "tom";
// user.age = 25;

// user.display = function(){
//     console.log(this.name);
//     console.log(this.age)
// }
// var hasNameProps = "name" in user;
// document.write(hasNameProps)



// function createUser(pName,pAge) {
//     return{
//         name: pName,
//         age: pAge,
//         displayInfo: function(){
//         document.write("Name" + this.name + "Age" + this.age)
//         }
//     };
// };

// var tom = createUser("Giorgi", 26);
// tom.displayInfo()

//Constructors ობიექტის კონსტრუქტორი
// var Giorgi = new Object();

// function User (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// var tom = new User ("Giorgi", 26)

// document.write(tom.name, tom.age)



//Car type constructor
// function Car(mName, mYear){
//     this.name = mName;
//     this.year = mYear;
//     this.getCarInfo = function() {
//         document.write("model" + this.name + "date of issue" + this.year)
//     }
// }

// // //User type
// function User (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.driveCar = function(car) {
//         document.write(this.name + "Drive" + car.name + car.year)
//     };
//     this.displayInfo = function (){
//         document.write("Name" + this.name + "Year" +this.age)
//     }
// }

// var tom = new User ("Irma", 26);
// tom.displayInfo();

// var Mitsubishi = new Car ("Mitsubishi",2022);
// tom.driveCar(Mitsubishi)


//Prototype

// function User (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function (){
//         document.write("saxeli" + this.name + "asaki" +this.age)
    
//     }
// }

// User.prototypw.hello = function() {
//     document.write(this.name + "say Hello")
// }

// User.prototype.maxAge = 110;

// var tom  = new User ("tom", 26);
// tom.hello()
// document.write(tom.maxAge)

//inkafsulacia

// function User (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function (){
//         document.write("saxeli" + this.name + "asaki" +this.age)
    
//     }
// }

// var tom = new User ("tom, 25")
// tom.name = 34;
// document.write(tom.name)


// function User (name, age) {
//     this.name = name;
//     var _age = age;
//     this.displayInfo = function () {
//         document.write("saxeli" + this.name + "asaki" + _age)
//     };
//     this.getAge = function () {
//         return _age;
//     }
//     this.setAge = function(age) {
//         if (typeof age === "number" && age > 0 && age < 110){
//         return _age = age;
//     }
//     else{
//         alert("invalid")
//     }
//     }
// }

// var tom = new User ("tom", 26);
// document.write(tom, _age)

// document.write(tom.getAge())

// tom.setAge(32);

// document.write(tom.getAge());

// tom.setAge("53")


//momxmarebeli

// function User (name, age) {
//     this.name = name;
//     this.age = age;
//     this.go - function (){
//         document.write(this.name + "goes")
//     };
//     this.displayInfo = function(){
//         document.write("saxeli" + this.name + "asaki" + this.age);
//     }
// }

// User.prototype.maxage = 110;

function Employee (name, age, company) {
    User.call(this.name,age);
    this.company = company;
    this.displayInfo = function() {
      document.write("saxeli" + this.name + "asaki" + this.age + "company" + this.company)
    }
}

Employee.prototype = Object.create(User.prototype);

var tom = new User("tom", 28)
var bill = new Employee ("bill", 25, "Google");

tom.displayInfo()
bill.displayInfo()


// function add (x,y) {
//     return x + y;
// }

// var result = add.call(this, 3,8)
// document.write(result)



// function add (x,y) {
//     return x + y;
// }

// var result = add.apply(null, [3,8];
// document.write(result)

// this.alert("Global alert")


// "user strict";
// function foo() {
//     var bar = "bar2"
//     console.log(this.bar)
// }

// var bar = "bar1"
// foo ()




