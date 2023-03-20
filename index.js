//  task 1
alert("Welcoe to My site");
console.log(alert);
var promp = prompt("Please Enter your name");
console.log(prompt);
var wel = "welcome " + " " + promp;
document.write("<h1>", wel)

//  task 2
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
for (var i = 1; i !== 0; i++) {
    var Nam = String(prompt("Please Enter your Name"));
    if (Nam !== 'null') {
        i = 0;
    }
    else {
        i = 1;
    }
}

for (var x = 1; x !== 0; x++) {
    var birth_year = prompt("Please Enter your brith year");
    if (isNaN(birth_year) || birth_year > 2010) {
        x = 1;
    }
    else {
        x = 0;

    }
}
var age = 2023 - birth_year;
document.write("<h2>", "Name:", Nam)
document.write("<br>", "<h2>", "Brith year:", birth_year)
document.write("<br>", "<h2>", "Age:", age)

//  Task 4

function header() {
    for (var i = 1; i <= 6; i++) {
        document.write("<h", i, ">", "this is header number ", i);
    }
}
header()


