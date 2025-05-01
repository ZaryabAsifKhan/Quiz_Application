let startingMin = 8;
let totalTime = startingMin * 60;
let countdown = document.getElementById("countdown");
let interval;

 interval = setInterval(function updateCountdown(){
    let min = Math.floor(totalTime / 60);
    let sec = totalTime % 60;
    sec = sec < 10 ? '0' + sec : sec;
    countdown.innerHTML = `${min} : ${sec}`;

    if(totalTime <= 0){
        endQuiz();
    }
    else{
        totalTime-- ;
    }
},100)

function endQuiz(){
    clearInterval(interval);
    Swal.fire({
        title: "Time's Up!",
        text: `Your Score is ${score}`,
        icon: "info"
    })
}
function reset(){
    location.reload()
    clearInterval(interval)
}

let questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
];

let htmlques = document.getElementById("ques");
let htmlopt1 = document.getElementById("opt1");
let htmlopt2 = document.getElementById("opt2");
let htmlopt3 = document.getElementById("opt3");
let index = 0;
let getBtn = document.getElementById("btn");
let score = 0;

function nextQuestion(){
    let getInputs = document.getElementsByTagName('input');
    for(let i=0; i<getInputs.length; i++){
        getInputs.checked = false;
    }
    if(index > questions.length -1){
        clearInterval(interval)
        Swal.fire({
            title: "Quiz End!",
            text: `Your Score is ${score}`,
            icon: "success"
        });
    }
    else{
        htmlques.innerText = questions[index].question
        htmlopt1.innerText = questions[index].option1
        htmlopt2.innerText = questions[index].option2
        htmlopt3.innerText = questions[index].option3
        index++
    }
    getBtn.disabled = true;
}   
nextQuestion();
/*function btnWork(){
    getBtn.disabled = false;
    
    let selectedOption;
    
    if(document.getElementById("opt1").checked){
        selectedOption = document.getElementById("opt1").innerText;
    }
    else if(document.getElementById("opt2")){
        selectedOption = document.getElementById("opt2").innerText;
    }
    else if(document.getElementById("opt3")){
        selectedOption = document.getElementById("opt3").innerText;
    }
    if(selectedOption === questions[index-1].correctOption){
        score++;
    }
}*/
function btnWork() {
    getBtn.disabled = false;

    let options = document.getElementsByName("quiz");
    let selectedText = "";

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (i === 0) selectedText = document.getElementById("opt1").innerText;
            else if (i === 1) selectedText = document.getElementById("opt2").innerText;
            else if (i === 2) selectedText = document.getElementById("opt3").innerText;
            break;
        }
    }

    if (selectedText === questions[index-1].correctOption) {
        score++;
    }
}
