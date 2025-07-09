document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("summaryForm");
  const input = document.getElementById("summaryInput");
  const output = document.getElementById("summaryOutput");
  const outputSection = document.getElementById("outputSection");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) {
      alert("Please enter your consultation notes.");
      return;
    }

    // Simulate summarizing by shortening the text (basic logic for now)
    const summary = generateSimpleSummary(text);
    output.textContent = summary;
    outputSection.style.display = "block";

    input.value = '';
  });

  function generateSimpleSummary(text) {
    const sentences = text.split('.').filter(s => s.trim().length > 0);
    return sentences.slice(0, 2).map(s => s.trim() + '.').join(' ');
  }
});