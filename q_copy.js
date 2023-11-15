class Question {
    constructor(level) {
        this.levels = { ...levels }

        this.qPane = document.querySelector('#q-pane');
        this.questions = [...level.questions];
        this.lives = 3;
    }

    popQuestion(question) {
        // Creating a div to keep each question
        let qContainer = document.createElement('div');
        qContainer.className = 'question-container';
        this.qPane.appendChild(qContainer);

        // Create a p element and place the question inside
        let qs = document.createElement('p');
        qs.className = 'question';
        qs.innerText = Object.keys(question)[0];
        qContainer.appendChild(qs);
        this.count++;
        // Choices to see the number of choices
        let choices = question[Object.keys(question)[0]];
        // if the choices are more than 1, then multiple choice question
        // else, open response
        if (choices.length > 2) {
            for (let i = 0; i < choices.length - 1; i++) {
                let option = document.createElement('button');
                option.className = 'option';
                option.innerText = choices[i];
                qContainer.appendChild(option);
            }
        } else {
            let input = document.createElement('input');
            input.className = 'open-response';
            input.placeholder = 'Answer';
            input.type = 'text';
            qContainer.appendChild(input);
            let submit = document.createElement('button');
            submit.className = 'submit';
            submit.innerHTML = 'Submit';
            qContainer.appendChild(submit);
        }
        return qContainer;
    }

    checkAnswer(question) {
        // Getting the container that has question and answer
        let cont = this.popQuestion(question);
        let currentOptions = cont.querySelectorAll('.option');
        let openResponse = cont.querySelector('.open-response');
        let submitBtn = cont.querySelector('.submit');
        // Adding the choices to check for the right answer
        let choices = question[Object.keys(question)[0]];
        if (!openResponse) {
            currentOptions.forEach((option, index) => {
                this.qPane.style.display = 'block';
                option.addEventListener('click', () => {
                    if (index === choices[choices.length - 1]) {
                        console.log('true');
                        let timeoutQ = setTimeout(() => {
                            this.qPane.style.display = 'none';
                        }, 100);
                        return true;
                    }
                    console.log('false');
                    let timeoutQ = setTimeout(() => {
                        this.qPane.style.display = 'none';
                    }, 500);
                    return false;
                });
            });
        } else {
            this.qPane.style.display = 'block';
            submitBtn.addEventListener('click', () => {
                let userAnswer = openResponse.value;
                let correctAnswer = choices[choices.length - 1];
                if (userAnswer == correctAnswer) {
                    console.log('true');
                    return true;
                }
                console.log('false');
                let timeoutQ = setTimeout(() => {
                    this.qPane.style.display = 'none';
                }, 500);
                return false;
            })
        }

    }

    updateLives(question) {
        let check = this.checkAnswer(question);
        if (!check) {
            this.lives--;;
        }
    }
}