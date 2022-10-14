const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

//get all the elements whichever is needed

//quizcontainer
let quiz=document.getElementById('quiz')

//questionheading

let questionHeading=document.getElementById('questionHeading')


//optionlist

let optionList=document.querySelectorAll('.optionList')
console.log(optionList)


//EachoptionLabel

let aOption=document.getElementById('aOption')
let bOption=document.getElementById('bOption')
let cOption=document.getElementById('cOption')
let dOption=document.getElementById('dOption')

//submit

var submitBtn=document.getElementById('submit')

let score=0
let currentQuizCount=0
//console.log(quizData[0])
//1st question should load when the app is loaded
loadQuiz()
function loadQuiz(){
    deSelectOption()
    let currentQuizData=quizData[currentQuizCount]
    questionHeading.innerText=currentQuizData.question
    aOption.innerText=currentQuizData.a
    bOption.innerText=currentQuizData.b
    cOption.innerText=currentQuizData.c
    dOption.innerText=currentQuizData.d
}

// deSelect option

function deSelectOption(){
    optionList.forEach((element)=>{element.checked=false})
}

//Selection of option

function getSelected(){
    let selectedAnswer
    optionList.forEach((element)=>{
        if(element.checked){
            selectedAnswer=element.id
            
        }
    })
    return selectedAnswer
}
// functions of submit button

submitBtn.addEventListener('click',()=>{

    let answer=getSelected()

    if(answer){
        if(answer===quizData[currentQuizCount].correct){
            score++

        }
        currentQuizCount++
        if(currentQuizCount<quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=(
                `
                <h2>you scored ${score}/${quizData.length}</h2>
                <button id="submit" onClick=location.reload()>Relaod</button>`
            )
            document.body.style.backgroundImage="url('https://i.ibb.co/frqqx3S/glitterimg.jpg')"
            quiz.style.backgroundColor="transparent"
            quiz.style.border="none"

        }
    }

})
