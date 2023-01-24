let origArray = [2,3,4];

document.addEventListener("DOMContentLoaded", function (event) {
    //this sets up original values
    document.getElementById("num1").value = origArray[0]; //starts 2
    document.getElementById("num2").value = origArray[1]; //starts 3
    document.getElementById("num3").value = origArray[2]; //starts 4

    //adds anonymous function to cube button
    document.getElementById("cube").addEventListener("click", function() {
        let x = origArray.map(tocube);
        document.getElementById("num1").value = x[0];
        document.getElementById("num2").value = x[1];
        document.getElementById("num3").value = x[2];
    });

    //provide a function name for the button
    document.getElementById("totheFourth").addEventListener("click", totheFourth)
});

function onclickSquare() {
    let x = origArray.map(tosquare);
    document.getElementById("num1").value = x[0];
    document.getElementById("num2").value = x[1];
    document.getElementById("num3").value = x[2];
}

function totheFourth() {
    let x = origArray.map(tofourth);
    document.getElementById("num1").value = x[0];
    document.getElementById("num2").value = x[1];
    document.getElementById("num3").value = x[2];
}


function tosquare(oneItem)
{
    let x = oneItem ** 2;
    return x;
}

function tocube(oneItem)
{
    let x = oneItem ** 3;
    return x;
}

function tofourth(oneItem)
{
    let x = oneItem ** 4;
    return x;
}


