class Question {
    constructor(level) {
        this.levels = { ...levels }
        this.questions = [...level.questions];
        this.wrapper = document.querySelector('#wrapper');
        this.qPane = document.querySelector('#q-pane');
        this.lives = 3;
        this.gameContainerSore = document.querySelector('#container-score');
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

        // Choices to see the number of choices
        let choices = question[Object.keys(question)[0]];
        // if the choices are more than 2, then multiple choice question
        // else, open response
        if (choices.length > 2) {
            let optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';
            qContainer.appendChild(optionsContainer);
            for (let i = 0; i < choices.length - 1; i++) {
                let option = document.createElement('button');
                option.className = 'option';
                option.innerText = choices[i];
                optionsContainer.appendChild(option);
            }
        } else {
            let openContainer = document.createElement('div');
            openContainer.className = 'open-container';
            qContainer.appendChild(openContainer);

            let input = document.createElement('input');
            input.className = 'open-response';
            input.placeholder = 'Answer';
            input.type = 'text';
            openContainer.appendChild(input);
            let submit = document.createElement('button');
            submit.className = 'submit';
            submit.innerHTML = 'Submit';
            openContainer.appendChild(submit);
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
        this.wrapper.style.display = 'block';
        this.qPane.style.display = 'block';
        // Blurring gameContainer and gameScore
        this.gameContainerSore.className = 'blur';

        if (!openResponse) {
            currentOptions.forEach((option, index) => {
                option.addEventListener('click', () => {
                    if (index === choices[choices.length - 1]) {
                        console.log('true');
                        let timeoutQ = setTimeout(() => {
                            this.wrapper.style.display = 'none';
                            this.qPane.style.display = 'none';
                        }, 100);
                        this.gameContainerSore.classList.remove('blur');
                        this.removeQuestion(cont);
                        return true;
                    }
                    console.log('false');
                    this.lives--;
                    this.updateLives();
                    let timeoutQ = setTimeout(() => {
                        this.wrapper.style.display = 'none';
                        this.qPane.style.display = 'none';
                    }, 100);
                    this.gameContainerSore.classList.remove('blur');
                    this.removeQuestion(cont);
                    return false;
                });
            });
        } else {
            submitBtn.addEventListener('click', () => {
                let userAnswer = openResponse.value;
                let correctAnswer = choices[choices.length - 1];
                if (userAnswer == correctAnswer) {
                    console.log('true');
                    let timeoutQ = setTimeout(() => {
                        this.wrapper.style.display = 'none';
                        this.qPane.style.display = 'none';
                    }, 100);
                    this.gameContainerSore.classList.remove('blur');
                    this.removeQuestion(cont);
                    return true;
                }
                console.log('false');
                this.lives--;
                this.updateLives();
                let timeoutQ = setTimeout(() => {
                    this.wrapper.style.display = 'none';
                    this.qPane.style.display = 'none';
                }, 100);
                this.gameContainerSore.classList.remove('blur');
                this.removeQuestion(cont);
                return false;
            })
        }

    }

    removeQuestion(questionContainer) {
        questionContainer.remove();
    }

    // Updating the lives in the screen
    updateLives() {
        let lives = document.getElementById('lives');
        lives.innerText = this.lives;
    }

    // checkAnswer(question) {
    //     // Getting the container that has question and answer
    //     let cont = this.popQuestion(question);
    //     let currentOptions = cont.querySelectorAll('.option');
    //     let openResponse = cont.querySelector('.open-response');
    //     let submitBtn = cont.querySelector('.submit');
    //     // Adding the choices to check for the right answer
    //     let choices = question[Object.keys(question)[0]];
    //     if (!openResponse) {
    //         currentOptions.forEach((option, index) => {
    //             option.addEventListener('click', () => {
    //                 if (index === choices[choices.length - 1]) {
    //                     console.log('true');
    //                     return true;
    //                 }
    //                 console.log('false');
    //                 return false;
    //             });
    //         });
    //     } else {
    //         submitBtn.addEventListener('click', () => {
    //             let userAnswer = openResponse.value;
    //             let correctAnswer = choices[choices.length - 1];
    //             if (userAnswer == correctAnswer) {
    //                 console.log('true');
    //                 return true;
    //             }
    //             console.log('false');
    //             return false;
    //         })
    //     }
    // }

}