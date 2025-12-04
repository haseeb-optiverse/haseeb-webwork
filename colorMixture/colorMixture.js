let mixCount = 0; 

function mixcolor() {
    let c1 = document.getElementById("color1").value;
    let c2 = document.getElementById("color2").value;

   
    document.getElementById("box1").style.background = c1;
    document.getElementById("box2").style.background = c2;

    let result = "";

   
    if ((c1 === "red" && c2 === "yellow") || (c1 === "yellow" && c2 === "red")) {
        result = "orange";
    }
    else if ((c1 === "blue" && c2 === "yellow") || (c1 === "yellow" && c2 === "blue")) {
        result = "green";
    }
    else if ((c1 === "red" && c2 === "blue") || (c1 === "blue" && c2 === "red")) {
        result = "purple";
    }
    else if ((c1 === "pink" && c2 === "blue") || (c1 === "blue" && c2 === "pink")) {
        result = "violet";
    }
    else if (c1 === c2) {
        result = c1; 
    }
    else {
        result = "brown";
    }

    
    document.getElementById("resultbox").style.background = result;

    document.getElementById("message").innerHTML = 
     ` You mixed <b>${c1}</b> and <b>${c2}</b> <br> Result: <b>${result}</b>;`

     mixCount++;
     document.getElementById("count").innerHTML = "Mix Count: " + mixCount;
}
 function resetAll() {
  

    document.getElementById("box1").style.background = "white";
    document.getElementById("box2").style.background = "white";
    document.getElementById("resultbox").style.background = "white";

    document.getElementById("message").innerHTML = "";
}