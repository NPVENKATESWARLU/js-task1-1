function demo1() {
    document.getElementById("heading1").innerHTML = "hai sai";
    document.getElementById("heading2").innerHTML = "hai venkatesh";
};
//------------------------------------------------------------------//
var data = {
    "employee": {
        "name": "sonoo",
        "salary": 56000,
        "married": true
    }
}
console.log("This is sonoo salary of", data.employee.salary);
//---------------------------------------------------------------------//
if (data.employee.married == true) {
    console.log("sonoo married");
} else {
    console.log("waiting for marriage");
}
//---------------------------------------------------------------------//
var numberList = [28, 14, 38, 16, 9, 99, 34, 100];
numberList.sort(function (a, b) { return a - b });
console.log("accending order--->", numberList);
var numberList1 = [28, 14, 38, 16, 9, 99, 34, 100];
numberList1.sort(function (a, b) { return b - a });
console.log("decending order--->", numberList1);
document.getElementById("para1").innerHTML = numberList;
document.getElementById("para2").innerHTML = numberList1;
//--------------------------------------------------------------------------//
for (var i = 0; i < numberList.length; i++) {
    if ((numberList[i] % 2) === 0) {
        console.log("only even number from array list ", numberList[i]);
    } else {
        console.log("only odd number from array list ", numberList[i]);
    }
}
//-----------------------------------------------------------------------------//
var numberListRemove1 = [28, 14, 38, 16, 9, 99, 34, 100];
numberListRemove1.splice(2, 3);
console.log(numberListRemove1);
var numberListRemove2 = [28, 14, 38, 16, 9, 99, 34, 100];
numberListRemove2.splice(6, 0, "2", "3", "4", "5");
console.log(numberListRemove2);
//---------------------------------------------------------------------------------//
function demo2() {
    document.getElementById("para").setAttribute("class", "democlass");
};
demo2();
//------------------------------------------------------------------------------------//
var getDiv = document.createElement("div");
getDiv.id = "container";
document.body.appendChild(getDiv);
var profileImg = document.createElement("img");
profileImg.src = "images/bird-image.jpg";
getDiv.append(profileImg);
//------------------------------------------------------------------------------------//
// var myDiv = document.getElementById("myDiv");
// var strong = document.createElement("strong");
// var em = document.createElement("em");
// strong.textContent = "strong";
// em.textContent = "emphasized";
// myDiv.append(strong,em);
//--------------------------------------------------------------------------------//
// var getDiv = document.createElement("div");
// getDiv.id = "yourDiv";
// document.body.appendChild(getDiv);
// var strong = document.createElement("strong");
// var em = document.createElement("em");
// strong.textContent = "strong";
// em.textContent = "emphasized";
// getDiv.append(strong,em)
//------------------------------------------------------------------------------------//