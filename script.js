// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
  )

  var userName = prompt("Please enter your name:");
if (userName !== null) {
    alert("Hello " + userName + "! Welcome");
} else {
    alert("You canceled the prompt.");
}

  // Step 2 - Food choice
  var choice = prompt("What type of food would you like today? Enter a number: \n1. Pizza\n2. Pasta\n3. Salad");

  if (choice === "1") {
    alert("You ordered a pizza!");
} else if (choice === "2") {
    alert("You ordered a pasta!");
} else if (choice === "3") {
    alert("You ordered a salad!");
}

  

// Step 3 - Subtype choice

// Check the user's food type choice and present subtype options accordingly
switch (choice) {
    case "1":
        var pizzaSubtype = prompt("What kind of pizza do you want? \n1. Kebab\n2. veggie\n3. hawaii");
        switch (pizzaSubtype) {
            case "1":
                alert("You ordered a kebab pizza!");
                break;
            case "2":
                alert("You ordered a veggie pizza!");
                break;
            case "3":
                alert("You ordered a hawaii pizza!");
                break;
            default:
                alert("Invalid pizza  choice.");
                break;
        }
        break;
    case "2":
    
        var pastaSubtype = prompt("What kind of pasta do you want? \n1.Alfredo\n2. Tortellini\n3. carbonara");
        switch (pastaSubtype) {
            case "1":
                alert("You ordered a alfreo pasta!");
                break;
            case "2":
                alert("You ordered a tortellini pasta!");
                break;
            case "3":
                alert("You ordered a carbonara pasta!");
                break;
            default:
                alert("Invalid pasta choice.");
                break;
        }
        break;
    case "3":
   
        var saladSubtype = prompt("What kind of salad do you want?\n1. Caesar salad\n2. greek salad\n3. caprese Salad");
        switch (saladSubtype) {
            case "1":
                alert("You ordered a Ceasar salad!");
                break;
            case "2":
                alert("You ordered a greek salad!");
                break;
            case "3":
                alert("You ordered a caprese salad!");
                break;
            default:
                alert("Invalid salad choice.");
                break;
        }
        break;
    default:
        alert("Invalid food choice.");
        break;
}


// Step 4 - Age
var userInput = prompt("Is this a kids meal or for an adult? Type your age:");


var age = parseInt(userInput);


if (!isNaN(age)) {
    if (age >= 16) {
        alert("Thank you for your order! One adult meal.");
    } else {
        alert("Thank your order! One kids meal.");
    }
} else {
    alert("Invalid input. Please enter a valid age.");
}



