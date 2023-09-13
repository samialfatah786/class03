// Prompt the user for input
var cityName = prompt("Enter a city name:");

if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Welcome to " + karachi);
}




var gender = prompt("Enter your gender (male/female):");

gender = gender.toLowerCase();

if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Good Morning!");
}



var color = prompt("Enter the color of the traffic signal (red, yellow, or green):");


color = color.toLowerCase();


switch (color) {
    case "red":
        alert("STOP! The traffic signal is red.");
        break;
    case "yellow":
        alert("Prepare to STOP! The traffic signal is about to turn red.");
        break;
    case "green":
        alert("GO! The traffic signal is green.");
        break;
    default:
        alert("Invalid color input. Please enter red, yellow, or green.");
}


var firstsubject = +prompt("Enter your first subject marks");
var secondsubject = +prompt("Enter your second subject marks");
var thirdsubject = +prompt("Enter your third subject marks");
var totalemarks = +prompt("Enter your totale marks");
var obtmarks = firstsubject + secondsubject + thirdsubject;
var percentage = (obtmarks / totalemarks) * 100;

if (percentage >=80 && percentage <=100){
document.write("percentage"+ percentage + "<br>" + "grade" + "A+")
}else if ( percentage >=70 &&  percentage <=80){
    document.write("percentage" +  percentage +"<br>" + "grade" + "A")
}else if(percentage >=60 && percentage <=70){
    document.write("percantage" + percentage +"<br>" + "grade" + "B")
}