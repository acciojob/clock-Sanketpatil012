//your JS code here. If required.

function updateTimer() {
  // Get the p tag with id 'timer'
  const timerElement = document.getElementById("timer");

  // Get the current date and time
  const now = new Date();

  // Format the date and time
  const formattedTime = now.toLocaleString(); // Example: "3/14/2025, 2:45:30 PM"

  // Update the timer element
  timerElement.textContent = formattedTime;
}

// Call updateTimer() every second
setInterval(updateTimer, 1000);

// Initialize the timer immediately when the page loads
updateTimer();


