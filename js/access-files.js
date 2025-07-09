document.addEventListener("DOMContentLoaded", function () {
  const files = [
    {
      title: "Diet Plan - Post Surgery.pdf",
      date: "Updated: 03 July 2025"
    },
    {
      title: "LabReport_Bloodwork.png",
      date: "Updated: 28 June 2025"
    },
    {
      title: "Followup_Notes_Consultation.pdf",
      date: "Updated: 25 June 2025"
    }
  ];

  const container = document.getElementById("sharedFiles");

  files.forEach(file => {
    const entry = document.createElement("div");
    entry.className = "file-entry";
    entry.innerHTML = `
      <h5>${file.title}</h5>
      <small>${file.date}</small>
    `;
    container.appendChild(entry);
  });
});