class Quiz {
    constructor(level) {
        this.questionArea = document.getElementsByClassName('questions')[0],
            this.answerArea = document.getElementsByClassName('answers')[0],
            this.checker = document.getElementsByClassName('checker')[0],

            this.q1 = { ...level.q1 };
        this.q2 = { ...level.q2 };
        this.q3 = { ...level.q3 };
    }

    loadQuestions(type) {
        if (type == "q1") {
            this.questionArea.innerHTML = '';
            let question = Object.keys(this.q1)[0];
            this.questionArea.innerHTML = question;
            return question;
        }
        else if (type == "q2") {
            this.questionArea.innerHTML = '';
            let question = Object.keys(this.q2)[0];
            this.questionArea.innerHTML = question;
        }
        else if (type == 'q3') {
            this.questionArea.innerHTML = '';
            let question = Object.keys(this.q3)[0];
            this.questionArea.innerHTML = question;
        }
    }

    loadAnswers(type) {
        if (type == "q1") {
            this.answerArea.innerHTML = '';
            let answer = this.q1[Object.keys(this.q1)[0]];
            this.answerArea.innerHTML = answer;
            return answer;
        }
        else if (type == "q2") {
            this.answerArea.innerHTML = '';
            let answer = this.q2[Object.keys(this.q2)[0]];
            this.answerArea.innerHTML = answer;
            return answer;
        }
        else if (type == 'q3') {
            this.answerArea.innerHTML = '';
            let answer = this.q3[Object.keys(this.q3)[0]];
            this.answerArea.innerHTML = answer;
            return answer;
        }
    }

    checkAnswer(response, arr) {
        return function () {
            let givenResponse = response;
            if (givenResponse == arr[arr.length - 1]) {

            }
        }
    }
}