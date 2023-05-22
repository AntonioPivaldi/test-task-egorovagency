<script setup>
import { reactive } from "vue";

const MEASUREMENTS = ["Days", "Hours", "Minutes", "Seconds"];
const DEADLINE = new Date("2023-05-22T17:10:00");
const remainTime = reactive({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

function getRemainTime() {
  let now = new Date();
  let difference = DEADLINE.getTime() - now.getTime();
  if (difference <= 0) {
    clearInterval(timer);
  } else {
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    remainTime.days = Math.floor(hours / 24);

    remainTime.hours = hours % 24;
    remainTime.minutes = minutes % 60;
    remainTime.seconds = seconds % 60;
  }
}

getRemainTime();

let timer = setInterval(() => {
  getRemainTime();
}, 1000);
</script>

<template>
  <div class="timer__counter">
    <div class="timer__numbers" v-for="(val, index) of MEASUREMENTS" :key="val">
      <div>
        <div class="timer__count">
          <span v-if="remainTime[val.toLowerCase()] < 10">0</span
          >{{ remainTime[val.toLowerCase()] }}
        </div>

        <div class="timer__measure">
          {{ MEASUREMENTS[index] }}
        </div>
      </div>
      <span v-if="index < 3" class="timer__count">:</span>
    </div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.timer {
  &__counter {
    display: flex;
  }

  &__count {
    text-align: center;
    font-weight: 600;
    color: $main-blue;
  }

  &__numbers {
    display: flex;
    font-size: 4.5rem;
  }

  &__measure {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: white;
    height: 3.5rem;
    width: 8rem;
    background: url("../assets/img/timer-back.png");
    background-repeat: round;
    user-select: none;
  }
}
</style>