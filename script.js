const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML = `${value}`;
};

const startBtn = document.querySelector(".start"),
  numQuestions = document.querySelector("#num-questions"),
  category = document.querySelector("#category"),
  //difficulty = document.querySelector("#difficulty"),
  //timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");

let questions = [],
  time = 30,
  score = 0,
  currentQuestion,
  timer;

let selectedCategory = ""; // 儲存類別
let userAnswers = []; // 儲存作答資料
let userName = ""; // 儲存使用者名字

  const startQuiz = () => {
    const nameInput = document.querySelector("#user-name");
    if (nameInput.value.trim() === "") {
      alert("請輸入你的名字再開始測驗！");
      return;
    }

    userName = nameInput.value.trim(); // 儲存使用者名字
    console.log(userName);

    loadingAnimation();
    // 使用自訂題庫
    const cat = category.value;

    if (cat === "HanLinB2L3L4test") {
      questions = HanLinB2L3L4;
    } else if(cat === "HanLinB4L3L4test") {
      questions = HanLinB4L3L4;
    } else if  (cat === "vocabulary") {
      questions = vocabularyQuestions;
    } else if (cat === "timeDay") {
      questions = timeAndDayGrammarQuestions;
    } else {
      questions = [...HanLinB2L3L4test, ...timeAndDayGrammarQuestions,...HanLinB4L3L4test];
    }
    console.log(cat);

      // 獲取選擇的題目數量
  const num = parseInt(numQuestions.value, 10); // 轉換為數字

  // 隨機選取指定數量的題目
  questions = questions.sort(() => Math.random() - 0.5).slice(0, num);
  console.log(questions);

    setTimeout(() => {
      startScreen.classList.add("hide");
      quiz.classList.remove("hide");
      currentQuestion = 1;
      showQuestion(questions[0]);
    }, 1000);
  };

startBtn.addEventListener("click", startQuiz);

const showQuestion = (question) => {
  const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper");
  const questionNumber = document.querySelector(".number");

  questionText.innerHTML = question.question;

  const answers = [
    ...question.incorrect_answers,
    question.correct_answer,
  ];
  answersWrapper.innerHTML = "";
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

  const labels = ["(A)", "(B)", "(C)", "(D)"];
  shuffledAnswers.forEach((answer, index) => {
    answersWrapper.innerHTML += `
      <div class="answer">
        <span class="text">${labels[index]} ${answer}</span>
        <span class="checkbox">
          <i class="fas fa-check"></i>
        </span>
      </div>
    `;
  });

  questionNumber.innerHTML = `Question <span class="current">${
    questions.indexOf(question) + 1
  }</span>
            <span class="total">/${questions.length}</span>`;

  // 添加選項點擊事件
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (!answer.classList.contains("checked")) {
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        answer.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });
};

/*const startTimer = (time) => {
  timer = setInterval(() => {
    if (time === 3) {
      playAdudio("countdown.mp3");
    }
    if (time >= 0) {
      progress(time);
      time--;
    } else {
      checkAnswer();
    }
  }, 1000);
};*/

const loadingAnimation = () => {
  startBtn.innerHTML = "Loading";
  const loadingInterval = setInterval(() => {
    if (startBtn.innerHTML.length === 10) {
      startBtn.innerHTML = "Loading";
    } else {
      startBtn.innerHTML += ".";
    }
  }, 500);
};


const submitBtn = document.querySelector(".submit"),
  nextBtn = document.querySelector(".next");
submitBtn.addEventListener("click", () => {
  checkAnswer();
});

nextBtn.addEventListener("click", () => {
  nextQuestion();
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
});

const checkAnswer = () => {
  clearInterval(timer);
  const selectedAnswer = document.querySelector(".answer.selected");
  const currentQuestionData = questions[currentQuestion - 1];

  let userAnswer = "No Answer"; // 預設值，如果使用者未選擇
  if (selectedAnswer) {
    userAnswer = selectedAnswer.querySelector(".text").innerHTML.trim();
    userAnswer = userAnswer.replace(/^\([A-D]\)\s/, ""); // 去掉 "(A) "
  }

  // 將作答資料儲存到 userAnswers
  userAnswers.push({
    question: currentQuestionData.question,
    correctAnswer: currentQuestionData.correct_answer,
    userAnswer: userAnswer,
    isCorrect: userAnswer === currentQuestionData.correct_answer, // 判斷是否正確
  });

  // 標記正確或錯誤答案
  if (userAnswer === currentQuestionData.correct_answer) {
    score++;
    if (selectedAnswer) selectedAnswer.classList.add("correct");
  } else {
    if (selectedAnswer) selectedAnswer.classList.add("wrong");
    document.querySelectorAll(".answer").forEach((answer) => {
      const answerText = answer.querySelector(".text").innerHTML.trim();
      if (answerText.replace(/^\([A-D]\)\s/, "") === currentQuestionData.correct_answer) {
        answer.classList.add("correct");
      }
    });
  }

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
};


const nextQuestion = () => {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(questions[currentQuestion - 1]);
  } else {
    showScore();
  }
};

const endScreen = document.querySelector(".end-screen"),
  finalScore = document.querySelector(".final-score"),
  totalScore = document.querySelector(".total-score");


const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = score;
  totalScore.innerHTML = `/ ${questions.length}`;
  // 顯示名字
  const userNameDisplay = document.querySelector(".user-name-display");
  userNameDisplay.innerHTML = `你好, ${userName}！`;
  console.log(userName);

  // 顯示類別
  const categoryDisplay = document.querySelector(".category-display");
  categoryDisplay.innerHTML = `來回顧一下吧～ ${selectedCategory}`;
  console.log(selectedCategory);

  // 顯示作答詳情

  const answerDetails = document.querySelector(".answer-details");
  answerDetails.innerHTML = ""; // 清空之前的內容

  userAnswers.forEach((answer, index) => {
    const isCorrectClass = answer.isCorrect ? "correct-answer" : "wrong-answer";
    answerDetails.innerHTML += `
      <div class="answer-detail ${isCorrectClass}">
        <p><strong>Q${index + 1}:</strong> ${answer.question}</p>
        <p><strong>你的回答:</strong> ${answer.userAnswer}</p>
        <p><strong>正確解答:</strong> ${answer.correctAnswer}</p>
      </div>
      <hr>
    `;

  });

};



const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  window.location.reload();
});

/*
const playAdudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};*/