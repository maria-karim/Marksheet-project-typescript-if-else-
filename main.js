var Grade = "C";
var Percentage = 53;
if (Grade == "A+" || Percentage == 80) {
    console.log("A+ congratulations");
}
else if (Grade == "A" && Percentage >= 70) {
    console.log("A-grade");
}
else if (Grade == "B" && Percentage >= 60) {
    console.log("B-grade");
}
else if (Grade == "C" && Percentage >= 50) {
    console.log("C-grade");
}
else if (Grade == "D" && Percentage >= 45) {
    console.log("D-grade");
}
else {
    console.log("Failed");
}
