document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const doctor = document.getElementById('doctor').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!doctor || !date || !time) {
      alert("Please fill in all fields.");
      return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `Appointment with Dr. ${doctor} on ${date} at ${formatTime(time)}`;

    document.getElementById('appointmentList').appendChild(listItem);

    // Clear form
    document.getElementById('appointmentForm').reset();
  });

  function formatTime(time) {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour);
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const formattedHour = hourInt % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  }
});