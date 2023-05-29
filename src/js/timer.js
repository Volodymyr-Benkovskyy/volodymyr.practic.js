/* ===  моя робота ===== */

/* const timer = {
  deadline: new Date(2023, 4, 30), // дедлйн завтрішній день
  intervalid: null,
  rootSelector: document.querySelector('.js-timer-items'),

  start() {
    this.intervalid = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (diff <= 0) {
        this.stop();
        return;
      }

      let { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      //Оновлює відображення таймера на сторінці,
      //оновлюючи значення днів, годин, хвилин та секунд.
      //Викликається щосекунди з використанням `setInterval`.

      this.rootSelector.querySelector('.js-timer__days').innerHTML =
        this.pad(days);
      this.rootSelector.querySelector('.js-timer__hours').innerHTML =
        this.pad(hours);
      this.rootSelector.querySelector('.js-timer__minutes').innerHTML =
        this.pad(minutes);
      this.rootSelector.querySelector('.js-timer__seconds').innerHTML =
        this.pad(seconds);

      this.rootSelector.querySelector('.js-timer__days').dataset.title =
        this.declensionNum(days, ['день', 'дні', 'днів']);
      this.rootSelector.querySelector('.js-timer__hours').dataset.title =
        this.declensionNum(hours, ['година', 'години', 'годин']);
      this.rootSelector.querySelector('.js-timer__minutes').dataset.title =
        this.declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
      this.rootSelector.querySelector('.js-timer__seconds').dataset.title =
        this.declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
    }, 1000);
  },

  // Функція для отримання компонентів часу з різниці в мілісекундах

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    // Повертаємо об'єкт з компонентами часу
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  //Перетворює значення у рядок і додає ведучі нулі в початок,
  //якщо значення складає менше двох символів.
  pad(value) {
    return String(value).padStart(2, 0);
  },

  // метод який добавляє слова у відмінках
  declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },

  // метод який зупиняє дедлайн
  stop() {
    clearInterval(this.intervalid);
  },
};

timer.start();
 */

/ ======  другий метод ========  /;
/*
const timer = {
  deadline: new Date(2023, 4, 30),
  setinrevalid: null,
  rootSelector: document.querySelector('.js-timer-items'),

  start() {
    this.setinrevalid = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (diff <= 0) {
        this.stop;
        return;
      }
      const { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      this.rootSelector.querySelector('.js-timer__days').innerHTML =
        this.pad(days);
      this.rootSelector.querySelector('.js-timer__hours').innerHTML =
        this.pad(hours);
      this.rootSelector.querySelector('.js-timer__minutes').innerHTML =
        this.pad(minutes);
      this.rootSelector.querySelector('.js-timer__seconds').innerHTML =
        this.pad(seconds);
    }, 1000);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    // Повертаємо об'єкт з компонентами часу...
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  //Перетворює значення у рядок і додає ведучі нулі в початок,
  //якщо значення складає менше двох символів.
  pad(value) {
    return String(value).padStart(2, 0);
  },

  stop() {
    clearInterval(this.setinrevalid);
  },
};

timer.start();
*/
/ ======  другий метод  ========  /;
