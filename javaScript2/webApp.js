 

        function checkWord() {
             let secretWord = "banana"; 
            let input = document.getElementById('wordInput').value.toLowerCase();
            let lettersDiv = document.getElementById('letters');
            let resultDiv = document.getElementById('result');

            lettersDiv.innerHTML = ""; 
            resultDiv.innerHTML = ""; 

            if(input === secretWord) {
               alert( " Correct! You guessed the secret word!");
            }
             else {
                alert( " Wrong word. Try again!");
            }

            for(let i = 0; i < input.length; i++) {
                let span = document.createElement('span');
                let letter = input[i];

                if("aeiou".includes(letter)) {
                    span.className = "letter vowel";
                } else {
                    span.className = "letter consonant";
                }
                span.textContent = letter;
                lettersDiv.appendChild(span);
            } 
          
        }