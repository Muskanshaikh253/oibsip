const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById
        ('temp_diff');
    const valueTemp = temo_diff.options[tempSelected.selectedIndex].value;
    //Celsius to Fahrenheit 
    const celtofah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;

    }
    //Fahrenheit to Celsius
    const fahTocel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    if (valueTemp == 'cel') {
        document.getElementById(result).innerHTML = celtofah
            (inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fehtocel
            (inputTemp) + "&#176; Celsius";

    }
}