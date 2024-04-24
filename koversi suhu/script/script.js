document.addEventListener("DOMContentLoaded", () => {
    const resultField = document.querySelector("#result");
    const degree = document.querySelector("#degree");
    const convertBtn = document.querySelector("#convert-btn");
    const clearBtn = document.querySelector("#clear-btn");
    const fromTempType = document.querySelector("#from-temp-type");
    const toTempType = document.querySelector("#to-temp-type");
    const calculationDiv = document.getElementById("calculation");
    const calculationText = "";
  
    function toggleConvertButton() {
      if (degree.value === "") {
        convertBtn.setAttribute("disabled", "");
      } else {
        convertBtn.removeAttribute("disabled");
      }
    }
  
    degree.addEventListener("input", toggleConvertButton);
  
    convertBtn.addEventListener("click", (e) => {
      e.preventDefault();
      convertTemperature();
    });
  
    clearBtn.addEventListener("click", (e) => {
      e.preventDefault();
      clearResult();
    });
  
    function convertTemperature() {
      let inputValue = parseFloat(degree.value);
      
      if (isNaN(inputValue)) {
          resultField.innerHTML = "Invalid input";
          return;
          calculationDiv.innerHTML = "";
    }
    
      let fromType = fromTempType.value;
      let toType = toTempType.value;
      let result = calculateTemperature(fromType, toType, inputValue);
  
      resultField.innerHTML = `${result.toFixed(3)} &deg;${toType.toUpperCase()}`;
    }
  
    function clearResult() {
      resultField.innerHTML = "";
    }
    
    function calculateTemperature(fromType, toType, value) {
        switch (fromType) {
            case "celsius":
                switch (toType) {
                    case "fahrenheit":
                        return (value * 9) / 5 + 32;
                        calculationText = 
                        "(" + temperature + "°C × 9/5) + 32 = " + result.toFixed(2) + "°F";
              case "kelvin":
                  return value + 273.15;
                  case "reamur":
                      return (value * 4) / 5;
                      default:
                          return value;
                        }
        case "fahrenheit":
          switch (toType) {
            case "celsius":
              return ((value - 32) * 5) / 9;
            case "kelvin":
              return ((value - 32) * 5) / 9 + 273.15;
            case "reamur":
              return ((value - 32) * 4) / 9;
            default:
              return value;
          }
        case "kelvin":
          switch (toType) {
            case "celsius":
              return value - 273.15;
            case "fahrenheit":
              return ((value - 273.15) * 9) / 5 + 32;
            case "reamur":
              return ((value - 273.15) * 4) / 5;
            default:
              return value;
          }
        case "reamur":
          switch (toType) {
            case "celsius":
              return (value * 5) / 4;
            case "fahrenheit":
              return (value * 9) / 4 + 32;
            case "kelvin":
              return (value * 5) / 4 + 273.15;
            default:
              return value;
          }
        default:
          return value;
      }
    }
    calculationDiv.innerHTML = "Perhitungan: " + calculationText;
  });
  