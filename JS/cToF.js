  function covertCtoF(){
    var cel = document.getElementById("celcius").value;
    document.getElementById("result").innerHTML = "Result = "+ parseFloat(cel)* (5/9) + 32;
  }