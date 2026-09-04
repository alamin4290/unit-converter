const userInput=document.getElementById("input-value");
const convertBtnv=document.getElementById("convert-btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");
const resetBtn = document.getElementById("reset-btn");

convertBtnv.addEventListener('click', function() { 
    function result(length, volume, mass) {
        const lengthValue = userInput.value;
        const lengthInMeters = (lengthValue * 0.3048).toFixed(3);
        const lengthInFeet = (lengthValue * 3.28084).toFixed(3);
        const lengthResultText = `${lengthValue} meters = ${lengthInFeet} feet | ${lengthValue} feet = ${lengthInMeters} meters`;
            lengthResult.textContent = lengthResultText;
        const volumeInLiters = (lengthValue * 3.78541).toFixed(3);
        const volumeInGallons = (lengthValue * 0.264172).toFixed(3);
        const volumeResultText = `${lengthValue} liters = ${volumeInGallons} gallons | ${lengthValue} gallons = ${volumeInLiters} liters`;
             volumeResult.textContent = volumeResultText;
        const massInKilograms = (lengthValue * 0.453592).toFixed(3);
        const massInPounds = (lengthValue * 2.20462).toFixed(3);
        const massResultText = `${lengthValue} kilograms = ${massInPounds} pounds | ${lengthValue} pounds = ${massInKilograms} kilograms`;
             massResult.textContent = massResultText;
     
    }
   result(lengthResult, volumeResult, massResult);
})

resetBtn.addEventListener('dblclick', function() {
    userInput.value = '';
    lengthResult.textContent = '';
    volumeResult.textContent = '';
    massResult.textContent = '';
})
