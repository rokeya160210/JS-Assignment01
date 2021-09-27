function ConvertfToc(val1,val2,v3,v4,v5,v6,v7,v8){
 
    document.getElementById("H1").innerHTML = "High " + (parseFloat(5/9) * (val1-32)).toFixed(2) +"'(C)";
    document.getElementById("L1").innerHTML = "Low " + (parseFloat(5/9) * (val2-32)).toFixed(2) +"'(C)";

    document.getElementById("H2").innerHTML = "High " + (parseFloat(5/9) * (v3-32)).toFixed(2) +"'(C)";
    document.getElementById("L2").innerHTML = "Low " + (parseFloat(5/9) * (v4-32)).toFixed(2) +"'(C)";

    document.getElementById("H3").innerHTML = "High " + (parseFloat(5/9) * (v5-32)).toFixed(2) +"'(C)";
    document.getElementById("L3").innerHTML = "Low " + (parseFloat(5/9) * (v6-32)).toFixed(2) +"'(C)";

    document.getElementById("H4").innerHTML = "High " + (parseFloat(5/9) * (v7-32)).toFixed(2) +"'(C)";
    document.getElementById("L4").innerHTML = "Low " + (parseFloat(5/9) * (v8-32)).toFixed(2) +"'(C)";
}
function covertCtoF(val1,val2,v3,v4,v5,v6,v7,v8){
    //var cel = document.getElementById("celcius").value;

    document.getElementById("H1").innerHTML = "High " + (parseFloat(val1)* (5/9) + 32).toFixed(2) +"'(f)";
    document.getElementById("L1").innerHTML = "Low " + (parseFloat(val2)* (5/9) + 32).toFixed(2) +"'(f)";

    document.getElementById("H2").innerHTML = "High " + (parseFloat(v3)* (5/9) + 32).toFixed(2) +"'(f)";
    document.getElementById("L2").innerHTML = "Low " + (parseFloat(v4)* (5/9) + 32).toFixed(2) +"'(f)";

    document.getElementById("H3").innerHTML = "High " + (parseFloat(v5)* (5/9) + 32).toFixed(2) +"'(f)";
    document.getElementById("L3").innerHTML = "Low " + (parseFloat(v6)* (5/9) + 32).toFixed(2) +"'(f)";

    document.getElementById("H4").innerHTML = "High " + (parseFloat(v7)* (5/9) + 32).toFixed(2) +"'(f)";
    document.getElementById("L4").innerHTML = "Low " + (parseFloat(v8)* (5/9) + 32).toFixed(2) +"'(f)";
    
  }

  function getRandomNoBetween (start, end){
    min = Math.floor(start);
    max = Math.ceil(end);
    return Math.floor(Math.random()*(max-min+1)) + min;
}

const d = new Date();
      let x= d.getFullYear();
      var r = x+1;
      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   
  
  function displayDate() {
    let randomNo = getRandomNoBetween(11,13);
    //console.log(randomNo);
    let year = randomNo % 12 <11? r:x
    // console.log(randomNo % 12 <11? r:x);
    


      document.getElementById("demo").innerHTML = d.getDate()+ " " + months[randomNo%12] + " "+ year;
  }
  function displayDate2() {
      document.getElementById("demo").innerHTML = d.getDate()+ " " + months[getRandomNoBetween(14, 16)%12] + " "+ r;
  }
  function displayDate3() {
      document.getElementById("demo").innerHTML = d.getDate()+ " " + months[getRandomNoBetween(17, 19)%12] + " "+ r;
  }

  function displayDate4() {
      document.getElementById("demo").innerHTML =d.getDate()+ " " + months[getRandomNoBetween(20, 22)%12] + " "+x;
  }