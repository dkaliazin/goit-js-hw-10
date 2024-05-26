import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
startButton.disabled = true;
const timerDisplay = document.querySelector('timer');
let userSelectedDate;
let countdownInterval;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
   onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
        iziToast.error({
                title: "Error",
                message: "Please choose a date in the future",
            });
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
      startButton.disabled = true;
    }
  });

  function startCountdown(endDate) {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      const now = new Date();
      const timeLeft = endDate - now;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        updateTimerDisplay(0, 0, 0, 0);
        datetimePicker.disabled = false;
        startButton.disabled = true;
        iziToast.success({
          title: 'Finished',
          message: 'Countdown has ended!',
        });
        return;
      }

      const time = convertMs(timeLeft);
      updateTimerDisplay(time.days, time.hours, time.minutes, time.seconds);
    }, 1000);
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor((ms % hour) / minute);
    const seconds = Math.floor((ms % minute) / second);
    return { days, hours, minutes, seconds };
  }
const timeToUpdate = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}
function addZero(number) {
    return number.padStart(2, '0');
}
function updateTimerDisplay(days, hours, minutes, seconds) {
    timeToUpdate.days.textContent = addZero(days.toString());
    timeToUpdate.hours.textContent = addZero(hours.toString());
    timeToUpdate.minutes.textContent = addZero(minutes.toString());
    timeToUpdate.seconds.textContent = addZero(seconds.toString());
};