let welcomeScreen = document.getElementById('welcome')
let resultsScreen = document.getElementById('results')
let questions = document.querySelector('.quiz__questions')

let input = document.querySelector('.welcome__input')
let button = document.querySelector('.welcome__button')

let questionAnswers = document.querySelector('.question__answers')

let results = document.querySelector('#quiz__final')

function Quiz() {
  this.questions = []
  this.counter = 0
  this.indexCurrentQuestion = 0 
  this.addQuestion = function(question) {
    this.questions.push(question)
  }
  this.showCurrentQuestion = function() {
    if (this.indexCurrentQuestion < this.questions.length) {
      this.questions[this.indexCurrentQuestion].getElement()
    } else {
      questions.style.display = 'none'
      resultsScreen.style.display = 'block'
    }
  }
}

function Question(title, answers) {
  this.title = title
  this.answers = answers
  this.addAnswer = function(answer) {
    this.answers.push(answer)
  }
  this.getQuestion = function() {
    let question = this.title.toUpperCase() + '\n'
    for (let i=0; i<this.answers.length; i++) {
      question += '. ' + this.answers[i] + '\n'
    }
    return question
  }
  this.getElement = function() {
    let name = document.createElement('h1')
    name.textContent = `Welcome @${input.value.toLowerCase()}`
    questions.append(name)

    let questionTitle = document.createElement('h3')
    questionTitle.textContent = this.title
    questions.append(questionTitle)

    let questionAnswers = document.createElement("ul")
    questionAnswers.className = "question__awswers"

    this.answers.forEach((answer, index) => {
      let theanswer = document.createElement('li')
      theanswer.textContent = answer
      theanswer.id = index+1
      theanswer.addEventListener("click", this.saveAnswer)
      questionAnswers.append(theanswer)
    })

    questions.append(questionAnswers)
  }
  this.saveAnswer = (event) => {
    let allAnswers = []
    let selectAnswer = event.target
    allAnswers.push(selectAnswer.id)
    quiz.counter++

    setTimeout(function(){
      questions.textContent = ''
      quiz.indexCurrentQuestion++
      quiz.showCurrentQuestion()
    }, 1000)

    // console.log(allAnswers)
  }
}

function startQuiz() {
  let welcome = document.getElementById('welcome')
  welcome.style.display = 'none'
  questions.style.display = 'block'
  quiz.showCurrentQuestion()
}


let question1 = new Question('Did you make the last purchase online on our website Migros?', ['Yes', 'No'])
let question2 = new Question('Lorem ipsum dolor sit amet consectetur, adipiscing elit sapien lobortis', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])
let question3 = new Question('Dolor sit amet consectetur adipiscing elit quam', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])
let question4 = new Question('Integer quis natoque nunc dignissim nisl dui accumsan platea', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])
let question5 = new Question('Hendrerit dis potenti inceptos turpis egestas dictum', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])
let question6 = new Question('Pretium laoreet imperdiet porttitor odio elementum donec sollicitudin', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])
let question7 = new Question('Dui fermentum cursus consequat pharetra class tempor', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])
let question8 = new Question('Pulvinar ut sociis diam enim class litora', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])
let question9 = new Question('Eget porta sodales ligula venenatis fermentum nunc', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])
let question10 = new Question('Auctor accumsan hac turpis tempus', ['Luctus nullam', 'Convallis auctor penatibus', 'Orci a lobortis vivamus porttitor dapibus'])

let quiz = new Quiz()
quiz.addQuestion(question1)
quiz.addQuestion(question2)
quiz.addQuestion(question3)
quiz.addQuestion(question4)
quiz.addQuestion(question5)
quiz.addQuestion(question6)
quiz.addQuestion(question7)
quiz.addQuestion(question8)
quiz.addQuestion(question9)
quiz.addQuestion(question10)