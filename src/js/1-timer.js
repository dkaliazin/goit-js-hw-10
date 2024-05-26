import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.getElementById('datetime-button');
const timerDisplay = document.getElementById('timer');

let userSelectedDate = null;
let countdownInterval = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
   onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
        userSelectedDate = selectedDate;
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);
startButton.addEventListener('click', () => {
  if (userSelectedDate) {
    startCountdown(userSelectedDate);
  }
});

function startCountdown(endDate) {
  const countdown = setInterval(() => {
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
      return;
    }

    // Optional: Update your UI with the time left
    console.log(formatTimeLeft(timeLeft));
  }, 1000);
}

function formatTimeLeft(timeLeft) {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}