document.addEventListener("DOMContentLoaded", function () {
  const files = [
    {
      name: "Prescription_May.pdf",
      date: "28 May 2025",
      icon: "https://cdn-icons-png.flaticon.com/512/337/337946.png"
    },
    {
      name: "BloodReport_June.png",
      date: "12 June 2025",
      icon: "https://cdn-icons-png.flaticon.com/512/337/337947.png"
    },
    {
      name: "MRI_Spine_Report.pdf",
      date: "30 June 2025",
      icon: "https://cdn-icons-png.flaticon.com/512/337/337942.png"
    }
  ];

  const container = document.getElementById("vaultFiles");

  files.forEach(file => {
    const card = document.createElement("div");
    card.className = "col-md-3 file-card";
    card.innerHTML = `
      <img src="${file.icon}" alt="File Icon">
      <p class="fw-semibold mb-1">${file.name}</p>
      <small class="text-muted">Updated: ${file.date}</small>
    `;
    container.appendChild(card);
  });
});