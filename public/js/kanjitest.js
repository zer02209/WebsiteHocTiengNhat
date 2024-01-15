// Lấy câu hỏi từ server và hiển thị trên trang web
  async function loadQuestions() {
      const response = await fetch('/quiz1');
      const questions = await response.json();
      
      const quizContainer = document.getElementById('quiz-container');
      
      questions.forEach((question, index) => {
        const questionNumber = index + 1; // Add 1 to start numbering from 1
        
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
          <p>Câu ${questionNumber}: ${question.question_text}</p>
          <label><input type="radio" name="question${question.id}" value="A">${question.option_a}</label>
          <label><input type="radio" name="question${question.id}" value="B">${question.option_b}</label>
          <label><input type="radio" name="question${question.id}" value="C">${question.option_c}</label>
          <label><input type="radio" name="question${question.id}" value="D">${question.option_d}</label>
        `;
        quizContainer.appendChild(questionDiv);
      });
    }
    
    
    // Gửi câu trả lời lên server và hiển thị kết quả
    async function submitAnswers() {
      const answers = [];
      const quizContainer = document.getElementById('quiz-container');
      const inputs = quizContainer.querySelectorAll('input[type=radio]:checked');
      
      inputs.forEach(input => {
        answers.push(input.value);
      });
    
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answers })
      });
    
      const resultContainer = document.getElementById('result-container');
      const result = await response.json();
      resultContainer.innerHTML = `<p><b>ĐIỂM SỐ: ${result.correctAnswers}/10</b></p>`;
    }
    
    // Load câu hỏi khi trang web được tải
    window.onload = loadQuestions;
    