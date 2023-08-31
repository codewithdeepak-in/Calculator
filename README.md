# Calculator
Simple example of javascript of calculating things.

<pre>
   const result = eval(document.getElementById("result").innerText); 
  // for evaluting the maths expression.
</pre>


Accessing key inputs from the keyboard

<pre>
   document.addEventListener('keydown', function(event) {
        const key = event.key;
        switch (key) {
          case '1':
            addToResult('1');
            break;
          case '2':
            addToResult('2');
            break;
          case '3':
            addToResult('3');
            break;
          case '4':
            addToResult('4');
            break;
          case '5':
            addToResult('5');
            break;
          case '6':
            addToResult('6');
            break;
          case '7':
            addToResult('7');
            break;
          case '8':
            addToResult('8');
            break;
          case '9':
            addToResult('9');
            break;
          case '0':
            addToResult('0');
            break;
          // Add cases for other numeric keys, operators, etc.
          case '+':
            addToResult('+');
            break;
          case '-':
            addToResult('-');
            break;
          case '*':
            addToResult('*');
            break;
          case '/':
            addToResult('/');
            break;
          case '.':
            addToResult('.');
            break;
          case 'Enter':
            calculateResult();
            break;
          case 'Backspace':
            backResult();
            break;
          case 'Delete':
            clearResult();
            break;
        }
      });
</pre>
