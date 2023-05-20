<script setup>
import { ref } from "vue";

const REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inputText = ref("");
let inputClass = ref("");
let isEmailValid = false;

function validateEmail(email) {
  if (!!email.match(REGEXP)) {
    inputClass.value = "email-valid";
    isEmailValid = true;
  } else if (email == "") {
    inputClass.value = "";
    isEmailValid = false;
  } else {
    inputClass.value = "email-invalid";
    isEmailValid = false;
  }
}

async function sendEmail(email) {
  let response = await fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
  );
  console.log(response);
  validateEmail((inputText.value = ""));
}
</script>

<template>
  <main>
    <section class="decorations">
      <div class="decorations__left">
        <img src="../assets/img/deco-left.png" alt="decoration" />
      </div>
      <div class="decorations__right">
        <img src="../assets/img/deco-right.png" alt="decoration" />
      </div>
    </section>
    <section class="center">
      <div class="center__logo">
        <a href="/"><img src="../assets/img/logo.png" alt="Logo" /></a>
      </div>
      <div class="center__text">
        <h1>UNDER CONSTRUCTION</h1>
        <p>We're making lots of improvements and will be back soon</p>
      </div>
      <div class="center__timer">
        <Timer />
      </div>
      <div class="center__link">
        <p class="center__link-text">Check our event page when you wait:</p>

        <a
          href="https://egorovagency.by/#main"
          class="center__link-btn"
          target="_blank"
        >
          <div>Go to the event</div>
          <div class="arrow-base"></div>
        </a>
      </div>
    </section>
    <section class="lowpart">
      <div class="lowpart__plug"></div>
      <form
        :class="`lowpart__form ${inputClass}`"
        @submit.prevent="sendEmail(inputText)"
      >
        <input
          v-model="inputText"
          placeholder="Enter your Email and get notified"
          @input="validateEmail(inputText)"
        />
        <button
          class="lowpart__form-btn"
          :disabled="isEmailValid ? false : true"
        >
          <div class="arrow-base"></div>
        </button>
      </form>
      <router-link class="lowpart__link" to="/events">
        <span>Other events</span>
        <div class="arrow-class"></div>
      </router-link>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

main {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 4.5rem;
  font-weight: 600;
  color: $main-blue;
  opacity: 0.39;
}

.decorations {
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: -50;

  &__left img {
    width: 17rem;
  }
  &__right img {
    width: 12rem;
  }
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;

  &__text {
    text-align: center;
    margin-top: 6rem;

    & p {
      margin-top: 0.5rem;
      font-size: 18px;
    }
  }

  &__timer {
    margin-top: 2.5rem;
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    margin-top: 4.5rem;

    &-btn {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 3.75rem;
      width: 15rem;
      font-size: 18px;
      margin-top: 0.75rem;
      background-color: $main-blue;
      color: white;
      border-radius: 40px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.lowpart {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 1.5rem 0;
  background-color: $main-blue;

  &__plug {
    width: 4.5rem;
  }

  &__form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
    height: 3rem;
    padding: 0 0.5rem;
    background-color: white;
    border: solid $main-blue 3px;
    border-radius: 30px;

    & input {
      padding-left: 0.5rem;
      font-size: 18px;
      width: 18rem;
      outline: none;

      &:invalid {
        background-color: rgba(255, 0, 0, 0.205);
      }
    }

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      width: 2rem;
      background-color: #df2224;
      border-radius: 50%;
      transition: 0.3s;
      cursor: pointer;

      &:disabled {
        background-color: gray;
        cursor: default;
      }
    }
  }
}

.email {
  &-valid {
    background-color: rgba(125, 255, 125, 0.877);
  }
  &-invalid {
    background-color: rgb(255, 159, 159);
  }
}
</style>