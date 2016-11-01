function Movie(title, rating, run){
  this.title = title;
  // this.time = time;
  this.rating = rating;
  this.run = run;
}
var blaze = new Movie("Blaze of Glory","R","1st");
var santa = new Movie("Santa's Grand Adventure","G","1st");
var airBud = new Movie("Air Bud 2","G","2nd");



//Constructors
 function Ticket(title, time, run, rating, name, age){
   this.title = title;
   this.time = time;
   this.run = run;
   this.rating = rating;
   this.name = name;
   this.age = age;
 }

 function Customer(name, age){
   this.name = name;
   this.age = age;
 }

//Prototypes
 Customer.prototype.ofAge = function(){
   if (this.age < 18) {
      return false;
   }
  else {
    return true;
  }
 }
