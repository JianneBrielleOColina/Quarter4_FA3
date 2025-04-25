let num;
while (true) 
{
    num = prompt("Enter a number:");
    if (!isNaN(num) && num.trim() !== "") 
    {
        num = parseInt(num);
        break;
    }
}

const outputDiv = document.getElementById("output");
let shape = `<h2>Number inputted: ${num}</h2>`;

if (num % 2 !== 0) 
{
    for (let i = num; i >= 1; i--) 
    {
        for (let j = 1; j <= num; j++) 
        {
            shape += i + " ";
        }
        shape += "<br>";
    }
} 
else 
{
    for (let i = num; i >= 1; i--) 
    {
        for (let j = 1; j <= i; j++) 
        {
            shape += i + " ";
        }
        shape += "<br>";
    }
}

outputDiv.innerHTML = shape;

let contacts = [];

function updateDisplay() 
{
    document.getElementById("contactsDisplay").innerHTML = contacts.join(" ");
}

function add() 
{
    const input = document.getElementById("name");
    const name = input.value.trim();
    if (name === "") 
    {
        return;
    }
    else if (contacts.length === 7) 
    {
        contacts.shift();
    }

    contacts.push(name);
    input.value = "";
    updateDisplay();
}

function remove() 
{
    contacts.pop();
    updateDisplay();
}

updateDisplay();