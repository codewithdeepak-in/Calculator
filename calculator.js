// Define a Result that add character to the result section 
function addToResult(char){
    document.getElementById("result").value += char;
}
function calculateResult(){
  const result = eval(document.getElementById("result").value);
  document.getElementById("result").value = result;
}