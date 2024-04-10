document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.quiz-form').forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let score = 0;
      form.querySelectorAll('.question').forEach(question => {
        const answer = question.querySelector("input[type='checkbox']:checked");
        if (answer && answer.classList.contains('correct')) {
          score++;
        }
      });
      alert(`Votre score est de ${score}/${form.querySelectorAll('.question').length}.`);
    });
  });
});
