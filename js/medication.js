document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('medicationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const medName = document.getElementById('medName').value.trim();
    const medTime = document.getElementById('medTime').value;

    if (!medName || !medTime) {
      alert("Please enter both medicine name and time.");
      return;
    }

    const newReminder = document.createElement('li');
    newReminder.className = 'list-group-item';
    newReminder.textContent = `${medName} at ${formatTime(medTime)}`;

    document.getElementById('reminderList').appendChild(newReminder);

    document.getElementById('medicationForm').reset();
  });

  function formatTime(time) {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour);
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const formattedHour = hourInt % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  }
});