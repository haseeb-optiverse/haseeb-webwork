function analyzeUser() {
    let name = document.getElementById("username").value;
    let age = Number(document.getElementById("age").value);
    let country = document.getElementById("country").value.toLowerCase(); 

   
    let count = 0;
    let characters = "";
    for (let i = 0; name.charAt(i) !== ""; i++){
        characters += `${name.charAt(i)}\n`;
        count++;
    }

  
    let ageGroup = age < 18 ? "Minor" : "Adult";

  
    let message;
    switch(country) {
        case "india":
            message = "Namaste! You are from India.";
            break;
        case "usa":
            message = "Hello! You are from USA.";
            break;
        case "japan":
            message = "Konnichiwa! You are from Japan.";
            break;
        default:
            message = "Welcome!";
    }

   
    document.getElementById("output").textContent = `
Characters in Name:
${characters}Total Characters: ${count}

${message}

Name: ${name}
Age: ${age}
Category: ${ageGroup}
`;
}
