function input1() {
    var first_value = prompt("Enter the first value");
    return parseInt(first_value);
  }
  
  function input2() {
    var last_value = prompt("Enter the second value");
    return parseInt(last_value);
  }
  
  function finalResult() {
    var first_value = input1();
    var last_value = input2();
    var result = (first_value * 2) + last_value;
    alert("The final result is: " + result);
  }
  
  finalResult();
  