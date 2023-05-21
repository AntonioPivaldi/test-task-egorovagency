<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const PUBLIC_KEY = "revPUMKz0DrbNJoeS";
const SERVICE_ID = "service_kpc73ur";
const TEMPLATE_ID = "contact_form";
const REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let inputText = ref("");
let inputClass = ref("");
let isSuccess = ref(false);
let isPopupShown = ref(false);
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
  let templateParams = {
    message: email,
  };
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
    function (response) {
      isSuccess.value = true;
      isPopupShown.value = true;
    },
    function (error) {
      isSuccess.value = false;
      isPopupShown.value = true;
    }
  );
  validateEmail((inputText.value = ""));
}
</script>

<template>
  <main class="page">
    <section :class="`popup ${isPopupShown ? '' : 'hidden'}`">
      <div class="popup__window">
        <div class="popup__window-cross" @click="isPopupShown = false">
          <div class="cross-base"></div>
        </div>
        <div class="popup__window-header">
          <h2 v-if="isSuccess">SUCCESS!</h2>
          <h2 v-else>FAILED...</h2>
        </div>
        <div class="popup__window-text">
          <p v-if="isSuccess">
            You have successfully subscribed to the email newsletter!
          </p>
          <p v-else>Something went wrong. Please, try again later.</p>
        </div>
        <button class="popup__window-btn" @click="isPopupShown = false">
          Close
        </button>
      </div>
    </section>
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
        <p class="center__link-text" @click="isPopupShown = true">
          Check our event page when you wait:
        </p>

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
        <p class="lowpart__link-text">Other events</p>
        <div class="arrow-base lowpart__link-arrow"></div>
      </router-link>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.popup {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  min-height: 100%;
  background-color: rgba(22, 44, 78, 0.6);
  transition: 0.3s;
  visibility: visible;

  &__window {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 23rem;
    width: 20rem;
    z-index: 250;
    background-color: white;
    border-radius: 2px;

    &-cross {
      display: flex;
      align-self: end;
      width: 2rem;
      height: 2rem;
      margin: 1.5rem 1rem 0 0;
      cursor: pointer;
    }

    &-header {
      font-size: 2rem;
      color: $main-blue;
      text-align: center;
      margin-top: 2rem;
    }

    &-text {
      font-size: 1.25rem;
      text-align: center;
      margin-top: 2rem;
      padding: 0 1rem;
    }

    &-btn {
      @extend .button-blue;
      align-self: center;
      margin-top: 2rem;
    }
  }
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
      @extend .button-blue;
    }
  }
}

.lowpart {
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.5rem 0;
  background-color: $main-blue;

  &__plug {
    width: 6.5rem;
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

  &__link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: white;
    font-size: 1.25rem;

    &-arrow {
      transform: rotate(90deg);
      transition: 0.4s;
    }

    &:hover {
      & .lowpart__link-arrow {
        transform: rotate(270deg);
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

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
</style>