const questions = [ 
    {   'id' : 1,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 2,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 3,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 4,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 5,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 6,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 7,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 8,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 9,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 10,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 11,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 12,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 13,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 14,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 15,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 16,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 17,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 18,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 19,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
    {
        'id' : 20,
        'que' : 'Which of the following is not a Data Structure ?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Integer',
        'd' : 'Linked List',
        'ans' : 'c'
    },
];

const container = document.querySelector('.container');
const myQuizApp = document.querySelector('.MyQuizApp');
const firstPageButton = document.querySelector('.firstPageButton button');
const backButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const bodyContainer = document.querySelector('.body-container');
const formContainer = document.querySelector('.form-container');
const imgContainer = document.querySelector('.img-container');
const quizContainer = document.querySelector('.quiz-container');
const resultContainer = document.querySelector('.result-container');
var userName = document.getElementById('user-name').value;
var userDOB = document.getElementById('user-dob').value;
var userEmail = document.getElementById('user-email').value;
var userAddress = document.getElementById('user-address').value;
const welcomeUser = document.getElementById('welcome-user');
const winnerImg = document.getElementById('winner-img');
const questionImg = document.getElementById('question-img');
const timeCount = document.querySelector('.TimeCount .Seconds'); 
const timeLine = document.querySelector('.QuestionsHeader .time_lines'); 
const timeOff = document.querySelector('.QuestionsHeader .TimeLeft'); 

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formContainer.style.display = 'none';
quizContainer.style.display = 'none';
winnerImg.style.display = 'none';
resultContainer.style.display = 'none';
firstPageButton.disabled = true;

function validateName() {
    fetchName(); 
    if (userName.length>=3) {
        firstPageButton.disabled = false;
    } else {
        firstPageButton.disabled = true;
    }
}

function fetchName() {
    userName = document.getElementById('user-name').value;
}

function fetchData() {
    userDOB = new Date(document.getElementById('user-dob').value);
    userEmail = document.getElementById('user-email').value;
    userAddress = document.getElementById('user-address').value;
}

function getAgefromDOB(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

firstPageButton.onclick = () => {
    fetchName();
    bodyContainer.style.display = 'none';
    formContainer.style.display = 'flex';
    welcomeUser.innerHTML = `${userName}`;
    welcomeUser.style.fontFamily = 'cursive';
    welcomeUser.style.fontSize = '2.25rem'; 
}

backButton.onclick = () => {
    formContainer.style.display = 'none';
    bodyContainer.style.display = 'flex';
    firstPageButton.disabled = false;
}

nextButton.onclick = () => {
    fetchData();
    if (userEmail.match(emailRegex)) {
        if (userAddress.length>=1) {
            var userAge = getAgefromDOB(new Date(userDOB.getFullYear(), userDOB.getMonth(), userDOB.getDay()));
            if (userAge>=18) {
                startQuiz();
            } else {
                window.alert(`You are ${userAge}! You should be atleast 18 years old to play this quiz!`);
            }
        } else {
            window.alert("Please Enter Address");
        }
    } else {
        window.alert("Please Enter valid Email");
    }
}

let indexOfQuestionSet = 0;
let totalQuestions = questions.length;
let rightAnswers = 0;
let wrongAnswers = 0;

const que1 = document.getElementById('que1');
const que2 = document.getElementById('que2');
const que3 = document.getElementById('que3');
const que4 = document.getElementById('que4');

const optionsInputA = document.querySelectorAll('.opt-1');
const optionsInputB = document.querySelectorAll('.opt-2');
const optionsInputC = document.querySelectorAll('.opt-3');
const optionsInputD = document.querySelectorAll('.opt-4');

function startQuiz() {
    formContainer.style.display = 'none';
    quizContainer.style.display = '';
    loadQuestion();
    startTimer(300);
}

const loadQuestion = () => {
    if (indexOfQuestionSet >= totalQuestions) {
        return showResult();
    }
    resetOptions();
    const data1 = questions[indexOfQuestionSet];
    que1.innerText = `${indexOfQuestionSet+1}. ${data1.que}`;
    optionsInputA[0].nextElementSibling.innerText = data1.a;
    optionsInputA[1].nextElementSibling.innerText = data1.b;
    optionsInputA[2].nextElementSibling.innerText = data1.c;
    optionsInputA[3].nextElementSibling.innerText = data1.d;
    
    const data2 = questions[++indexOfQuestionSet];
    que2.innerText = `${indexOfQuestionSet+1}. ${data2.que}`;
    optionsInputB[0].nextElementSibling.innerText = data2.a;
    optionsInputB[1].nextElementSibling.innerText = data2.b;
    optionsInputB[2].nextElementSibling.innerText = data2.c;
    optionsInputB[3].nextElementSibling.innerText = data2.d;

    const data3 = questions[++indexOfQuestionSet];
    que3.innerText = `${indexOfQuestionSet+1}. ${data3.que}`;
    optionsInputC[0].nextElementSibling.innerText = data3.a;
    optionsInputC[1].nextElementSibling.innerText = data3.b;
    optionsInputC[2].nextElementSibling.innerText = data3.c;
    optionsInputC[3].nextElementSibling.innerText = data3.d;

    const data4 = questions[++indexOfQuestionSet];
    que4.innerText = `${indexOfQuestionSet+1}. ${data4.que}`;
    optionsInputD[0].nextElementSibling.innerText = data4.a;
    optionsInputD[1].nextElementSibling.innerText = data4.b;
    optionsInputD[2].nextElementSibling.innerText = data4.c;
    optionsInputD[3].nextElementSibling.innerText = data4.d;
}

var flag = 1;
var data = []; 
for (i=0; i<questions.length; i++) {
    data[i] = questions[i].ans;   
}
var ans = [];
var answer = [];
var timeFlag = -1;

const submitQuiz = () => {
    ans = getAnswer();
    if (timeFlag==1) {
        showResult();
        return;
    }
    indexOfQuestionSet++;
    loadQuestion();  
}

const previousPage = () => {
    if (indexOfQuestionSet>0) {
        indexOfQuestionSet -= 7;
    }
    if (indexOfQuestionSet<0) {
        quizContainer.style.display = 'none';
        bodyContainer.style.display = 'none';
        formContainer.style.display = 'flex';
        welcomeUser.innerHTML = `${userName}`;
        welcomeUser.style.fontFamily = 'cursive';
        welcomeUser.style.fontSize = '2.25rem'; 
        indexOfQuestionSet = 0;
    } else {
        const data1 = questions[indexOfQuestionSet];
        que1.innerText = `${indexOfQuestionSet+1}. ${data1.que}`;
        optionsInputA[0].nextElementSibling.innerText = data1.a;
        optionsInputA[1].nextElementSibling.innerText = data1.b;
        optionsInputA[2].nextElementSibling.innerText = data1.c;
        optionsInputA[3].nextElementSibling.innerText = data1.d;
        
        const data2 = questions[++indexOfQuestionSet];
        que2.innerText = `${indexOfQuestionSet+1}. ${data2.que}`;
        optionsInputB[0].nextElementSibling.innerText = data2.a;
        optionsInputB[1].nextElementSibling.innerText = data2.b;
        optionsInputB[2].nextElementSibling.innerText = data2.c;
        optionsInputB[3].nextElementSibling.innerText = data2.d;

        const data3 = questions[++indexOfQuestionSet];
        que3.innerText = `${indexOfQuestionSet+1}. ${data3.que}`;
        optionsInputC[0].nextElementSibling.innerText = data3.a;
        optionsInputC[1].nextElementSibling.innerText = data3.b;
        optionsInputC[2].nextElementSibling.innerText = data3.c;
        optionsInputC[3].nextElementSibling.innerText = data3.d;

        const data4 = questions[++indexOfQuestionSet];
        que4.innerText = `${indexOfQuestionSet+1}. ${data4.que}`;
        optionsInputD[0].nextElementSibling.innerText = data4.a;
        optionsInputD[1].nextElementSibling.innerText = data4.b;
        optionsInputD[2].nextElementSibling.innerText = data4.c;
        optionsInputD[3].nextElementSibling.innerText = data4.d;
    }
}

var flag = 0;
const getAnswer = () => {
    optionsInputA.forEach (
        (input) => {
            if (input.checked) {
                answer[flag] = input.value;
            }
        }
    )
    flag += 1;
    optionsInputB.forEach(
        (input) => {
            if (input.checked) {
                answer[flag] = input.value;
            }
        }
    )
    flag += 1;
    optionsInputC.forEach(
        (input) => {
            if (input.checked) {
                answer[flag] = input.value;
            }
        }
    )
    flag += 1;
    optionsInputD.forEach(
        (input) => {
            if (input.checked) {
                answer[flag] = input.value;
            } 
        }
    )
    flag += 1;
    return answer;
}

const resetOptions = () => {
    optionsInputA.forEach(
        (input) => {
            input.checked = false;
        }
    )
    optionsInputB.forEach(
        (input) => {
            input.checked = false;
        }
    )
    optionsInputC.forEach(
        (input) => {
            input.checked = false;
        }
    )
    optionsInputD.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

function showResult() {

    quizContainer.style.display = 'none';
    questionImg.style.display = 'none';
    winnerImg.style.display = 'block';
    resultContainer.style.display = 'flex';
    
    for (i=0; i<data.length; i++) {
        if (ans[i] == data[i]) {
            rightAnswers++;
        } else {
            wrongAnswers++;
        }
    }
    
    const resultCaption = document.getElementById('result-caption');
    resultCaption.style.fontFamily = 'cursive';
    const resultScore = document.getElementById('result-score');
    
    if (rightAnswers>=19) {
        resultCaption.innerText = `Congratulations ! You are Exceptional! Grade A `; 
    } else if (rightAnswers<19 && rightAnswers >= 16 ) {
        resultCaption.innerText = `Congratulations ! Grade A `;  
    } else if (rightAnswers<16 && rightAnswers>=12) {
        resultCaption.innerText = `Congratulations ! Grade B`;
    } else if (rightAnswers<12 && rightAnswers>=8) {
        resultCaption.innerText = `Keep it up ! Grade C`;
    } else {
        resultCaption.innerText = `Better Luck Next Time ! Grade D`;
    }
    resultScore.innerText = `You scored ${rightAnswers} out of ${totalQuestions}`;
    
    if (timeFlag==1) {
        exitQuiz();
    }
}

function startTimer(time) { 
    counter = setInterval(timer, 1000); 
    function timer() {
        timeCount.textContent = time;
        time--;

        if (time<9) {
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if (time<0) {
            timeFlag = 1;
            submitQuiz();
            return;
        }
    }
}

function exitQuiz() {
    window.location.reload();
    firstPageButton.disabled = false;
}
