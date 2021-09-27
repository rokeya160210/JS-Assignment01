function ConvertfToc(){
    var  F = document.getElementById("Farenheit").value;
    document.getElementById("result2").innerHTML = "Result = " + parseFloat(5/9) * (F-32);
}

function covertCtoF(){
    var cel = document.getElementById("celcius").value;
    document.getElementById("result").innerHTML = "Result = "+ parseFloat(cel)* (5/9) + 32;
  }