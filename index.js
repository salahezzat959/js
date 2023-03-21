//  task 1
alert("Welcoe to My site");
console.log(alert);
var promp = prompt("Please Enter your name");
console.log(prompt);
var wel = "welcome " + " " + promp;
document.write("<h1>", wel)

// //  task 2
function temp(t) {
    t >= 30 ? console.log("Hot") : console.log("Cold")
    // if (t >= 30) {
    //     console.log("Hot")
    // }
    // else {
    //     console.log("Cold")
    // }

}

temp(40);

//  task 3
var mm =/^[A-Za-z]+$/;
do {
    var Nam = prompt("Please Enter your Name")

} while (! Nam.match(mm));


var nn =/^[0-9]+$/
do {
    var birth_year = prompt("Please Enter your brith year");
} while (! birth_year.match(nn))
var age = 2023 - birth_year;
document.write("<h2>","Name: ", Nam);
document.write("<br>", "<h2>", "Brith year: ", birth_year);
document.write("<br>", "<h2>", "Age: ", age);

//  Task 4

function header() {
    for (var i = 1; i <= 6; i++) {
        document.write("<h", i, ">", "this is header number ", i);
    }
}
header()


