//Constructors
 function Ticket(title, time, run, rating, name, age){
   this.title = title;
   this.time = time;
   this.run = run;
   this.rating = rating;
   this.name = name;
   this.age = age;
   this.price = ticketPrice(age, run, time);
 }

 function Movie(title, rating, run){
   this.title = title;
   this.rating = rating;
   this.run = run;
 }

 function Customer(name, age){
   this.name = name;
   this.age = age;
 }

var ticketPrice = function(age, run, time){
  if (age > 64  || age < 8){
    return 5;
  } else if ((run == 0 && time == 12) || (run == 1 && time != 12)){
    return 9;
  } else if(run == 1 && time == 12){
    return 6;
  } else {
    return 12
  }
};

var movieSelect = function(selection) {
  return nowPlaying[selection];
};

var clearForm = function(){
  $("#title").val("null");
  $("#time").val("null");
  $("#name").val("");
  $("#age").val("");
}

//Movies
var roboMov = new Movie("RoboCop","R", 0);
var santaMov = new Movie("Santa's Grand Adventure","G",0);
var budMov = new Movie("Air Bud: Seventh Inning Fetch","G",1);
var nowPlaying = [roboMov, santaMov, budMov];

//Prototypes
 Customer.prototype.ofAge = function(){
   var custAge = true;
   if (this.age < 18) {
      custAge = false;
   }
  return custAge;
 }

//User Interface
$(document).ready(function(){
  $(".warning").hide();
  $("#movieToCustomer").click(function() {
    $("#customer-info").show();
  });

  $("form").submit(function(event){
    event.preventDefault();


    var titleInput = $("#title").val();
    var timeInput = $("#time").val();
    var nameInput = $("#name").val();
    var ageInput  = parseInt($("#age").val());

    var movieSelection = movieSelect(titleInput);
    var newCustomer = new Customer(nameInput, ageInput);

    if (movieSelection.rating === "R" && newCustomer.ofAge() === false){
      $(".warning").show();
    }else{
      var newTicket = new Ticket(movieSelection.title, timeInput, movieSelection.run, movieSelection.rating, newCustomer.name, newCustomer.age);


      $("#ticket #ticket-title").append(newTicket.title);
      $("#ticket #ticket-rating").append(newTicket.rating);
      $("#ticket #ticket-time").append(newTicket.time);
      $("#ticket #ticket-price").append(newTicket.price);
      $("#ticket #ticket-name").append(newTicket.name);
      $("#ticket").show();

      $("#confirmation .btn").click(function(){
        $(".confirmation, #movie-info, #customer-info, img").hide();

      });
    };//end else

      clearForm();
      console.log(newCustomer);



  });//end form submit

});//end document.ready
