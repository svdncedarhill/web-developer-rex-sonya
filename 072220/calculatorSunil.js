//function to perform the operations
function operation(id)
{ 
 //console.log(id);   
 let operator = id.innerText; //to get the label of button (operator)
 document.getElementById('operator').innerText = operator;

 // get the text field references   
 let input_1 = document.getElementById('number_1');
 let input_2 = document.getElementById('number_2');

 //get the values of text fields
 let num1 = input_1.value;
 let num2 = input_2.value;

 //convert the values to integer type
 num1 = parseInt(num1);
 num2 = parseInt(num2);

 let res = 0;

 if(operator == '+')
  res = num1 + num2;
 else if(operator == '-')
  res = num1 - num2;
 else if(operator == 'x')
  res = num1 * num2;
 else if(operator == '/')
  res = num1 / num2;  

 //place the sum in the result region
 document.getElementById('result_region').innerHTML = res
}

//function to clear fields
function clearFields(){
    document.getElementById('number_1').value = '';
    document.getElementById('number_2').value = '';

    document.getElementById('operator').innerText = '';
    document.getElementById('result_region').innerText='RESULT';
}