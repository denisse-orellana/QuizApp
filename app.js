let input = document.querySelector('.initial__input')

let questionAnswers = document.querySelector('.question__answers')

let questions = document.querySelector('.quiz__questions')
let end = document.querySelector('#quiz__final')

function Quiz() {
  this.questions = []
  this.counter = 0
  this.addQuestion = function(question) {
    this.questions.push(question)
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
    let name = document.createElement('h2')
    name.textContent = input.value
    questions.append(name)

    let questionTitle = document.createElement('h3')
    questionTitle.textContent = this.title
    questions.append(questionTitle)

    this.answers.forEach((answer, index) => {
      let answers = document.createElement('li')
      answers.textContent = answer
      answers.id = index+1
      questionAnswers.append(answers)
    })

    questions.append(questionAnswers)
  }
}

let q1 = new Question('Question 1', ['Answer 1', 'Answer 2', 'Answer 3'])

let quiz = new Quiz()
quiz.addQuestion(q1)

function startQuiz() {
  let start = document.getElementById('start')
  start.style.display = 'none'

  // questions.style.display = 'block'
}