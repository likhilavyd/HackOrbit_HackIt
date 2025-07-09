document.addEventListener("DOMContentLoaded", function () {
  const chats = [
    {
      doctor: "Dr. Ayesha Sharma (Dermatologist)",
      message: "Please apply the ointment daily and avoid direct sunlight..."
    },
    {
      doctor: "Dr. Rohan Verma (Cardiologist)",
      message: "Your BP readings look good. Let’s reduce the dose next week..."
    },
    {
      doctor: "Dr. Neha Iyer (Endocrinologist)",
      message: "Thyroid levels are stable. Continue same meds and retest in 2 months."
    }
  ];

  const chatContainer = document.getElementById("chatContainer");

  chats.forEach(chat => {
    const entry = document.createElement("div");
    entry.className = "chat-entry";
    entry.innerHTML = `
      <div class="doctor-name">${chat.doctor}</div>
      <div class="chat-preview">"${chat.message}"</div>
    `;
    chatContainer.appendChild(entry);
  });
});