const temp = document.getElementById("temp");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

const units = ["Celsius", "Fahrenheit", "Kelvin"];     //create an array with units
function dropdown () {     //create a function for dropdown options

  const defaultFrom = document.createElement("option");   
  defaultFrom.text = "From";
  defaultFrom.disabled = true;
  defaultFrom.selected = true;
  fromUnit.appendChild(defaultFrom);

  const defaultTo = document.createElement("option");
  defaultTo.text = "To";
  defaultTo.disabled = true;
  defaultTo.selected = true;
  toUnit.appendChild(defaultTo);

    units.forEach(unit => {
        const optionFrom = document.createElement('option');   //create an option from
        optionFrom.value = unit;
        optionFrom.textContent = unit;
        fromUnit.appendChild(optionFrom);

        const optionTo = document.createElement('option');  //create an option to
        optionTo.value = unit;
        optionTo.textContent = unit;
        toUnit.appendChild(optionTo);        

    });
}

dropdown();   //call the function

convert.addEventListener("click", convertUnits);  //when the button is clicked
  function convertUnits() {
    const theTemp = parseFloat(temp.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(theTemp)) {  // check if input is valid
        result.innerText = "Enter a valid number.";
        return;
    }

    //Formulas for conversion
    if (from ==='Celsius' && to === 'Fahrenheit') {
        let converted = (theTemp * (9/5) + 32);
        result.innerText = `The converted value is ${converted.toFixed(2)}\u00B0F`;
    }
    
    if (from ==='Fahrenheit' && to ==='Celsius') {
        let converted = (theTemp - 32) * 5 / 9;
        result.innerText = `The converted value is ${converted.toFixed(2)}\u00B0C`;
    }

    if (from === 'Celsius' && to === 'Kelvin') {
        let converted = theTemp + 273.15;
        result.innerText = `The converted value is ${converted.toFixed(2)}K`;
    }

    if (from === 'Kelvin' && to === 'Celsius') {
        let converted = theTemp - 273.15;
        result.innerText = `The converted value is ${converted.toFixed(2)}\u00B0C`;
    }

    if (from ==='Fahrenheit' && to === 'Kelvin') {
        let converted = ((theTemp - 32) * 5/9) + 273.15;
        result.innerText = `The converted value is ${converted.toFixed(2)}K`;
    }
    if (from ==='Kelvin' && to === 'Fahrenheit') {
        let converted = ( (theTemp - 273.15) * 9/5 ) + 32;
        result.innerText = `The converted value is ${converted.toFixed(2)}\u00B0F`;  //result
    }
    }

  
