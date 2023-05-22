<script setup>
import { ref } from "vue";

const RED = "red";
const EVENTS = [
  {
    name: "Hawaiian party",
    date: "13.02.2023",
    link: "https://egorovagency.by/#main",
    img: "hawaiian-party.png",
  },
  {
    name: "Mafia party",
    date: "15.02.2023",
    link: "https://egorovagency.by/#main",
    img: "mafia-party.png",
  },
  {
    name: "Party",
    date: "23.02.2023",
    link: "https://egorovagency.by/#main",
    img: "party.jpg",
  },
  {
    name: "Party on the beach",
    date: "07.06.2023",
    link: "https://egorovagency.by/#main",
    img: "beach-party.jpg",
  },
  {
    name: "Home security",
    date: "10.06.2023",
    link: "https://egorovagency.by/#main",
    img: "home-security.jpg",
  },
  {
    name: "Network Design & Implementation",
    date: "19.06.2023",
    link: "https://egorovagency.by/#main",
    img: "network.jpg",
  },
  {
    name: "System Design & Engineering",
    date: "25.06.2023",
    link: "https://egorovagency.by/#main",
    img: "system-design.jpg",
  },
  {
    name: "Client Care Plans",
    date: "05.07.2023",
    link: "https://egorovagency.by/#main",
    img: "clients.png",
  },
];
const collapseChoserWidth = `${120 / EVENTS.length - 5}rem`;

let activeElement = ref(0);
</script>

<template>
  <main class="page">
    <div class="wrapper">
      <section class="header">
        <div class="header__plug"></div>
        <div class="header__text fade-in-down"><h1>ALL EVENTS</h1></div>
        <div class="header__home-link">
          <router-link class="header__link" to="/">
            <button class="header__button">
              <p class="header__link-text">Home</p>
              <div class="arrow-base header__link-arrow"></div>
            </button>
          </router-link>
        </div>
      </section>
      <section class="collapse">
        <div
          :class="`collapse__item ${index == activeElement ? 'active' : ''}`"
          v-for="(event, index) of EVENTS"
          :key="event.name"
          :style="`background-image: url('src/assets/img/${event.img}')`"
          @click="activeElement = index"
        >
          <div class="collapse__item_wrapper">
            <div
              :class="`collapse__item_title${
                index == activeElement ? '-active' : ''
              }`"
            >
              <p class="collapse__item_name">{{ event.name }}</p>
              <p class="collapse__item_number">
                {{ `${index < 9 ? `0${index + 1}` : index + 1}` }}
              </p>
            </div>
            <div class="collapse__item_info">
              <div class="collapse__item_up">
                <div class="collapse__item_up_number">
                  {{ `${index < 9 ? `0${index + 1}` : index + 1}` }}
                </div>
              </div>
              <div class="collapse__item_low">
                <div class="collapse__item_text">
                  <h3>{{ event.name }}</h3>
                  <p>{{ event.date }}</p>
                </div>
                <div class="collapse__item_btn">
                  <a
                    class="collapse__item_link"
                    :href="event.link"
                    target="_blank"
                  >
                    More information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

main {
  height: 100vh;
}

.wrapper {
  margin: 5rem 2rem 0;

  @include breakpoint(m) {
    margin: 2rem 2rem 0;
  }

  @include breakpoint(xs) {
    margin: 2rem 1rem 0;
  }
}

.header {
  display: flex;
  justify-content: space-around;
  width: 100%;

  @include breakpoint(m) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
  }

  &__plug {
    width: 6.5rem;

    @include breakpoint(l) {
      width: 8rem;
    }

    @include breakpoint(m) {
      display: none;
    }
  }

  &__text {
    opacity: 0;
  }

  & h1 {
    display: flex;
    justify-content: end;
  }

  &__home-link {
    display: flex;
    align-items: center;
  }

  &__button {
    @extend .button-blue;
    justify-content: center;
    gap: 1.5rem;
    width: 10rem;
    margin: 0 0 0 2rem;
    height: 3rem;

    @include breakpoint(m) {
      width: 7rem;
      height: 2.5rem;
      gap: 0.5rem;
      margin: 0;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    color: white;
    font-size: 1.25rem;

    &-arrow {
      transform: rotate(270deg);
      transition: 0.4s;
    }

    &:hover {
      & .header__link-arrow {
        transform: rotate(90deg);
      }
    }
  }
}

.collapse {
  display: flex;
  width: 100%;
  height: 43rem;
  gap: 2px;
  margin-top: 1.5rem;

  @include breakpoint(xl) {
    flex-direction: column;
    height: 100%;
    margin-top: 1.25rem;
  }

  &__item {
    min-width: 5.25rem;
    width: 5.25rem;
    height: 100%;
    flex-grow: 1;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    transition: 1s linear;
    overflow: hidden;

    @include breakpoint(xxl) {
      min-width: 4rem;
      width: 4rem;
    }

    @include breakpoint(xl) {
      width: 100%;
    }

    &_wrapper {
      display: flex;
      overflow: hidden;

      @include breakpoint(xl) {
        display: flex;
        flex-direction: column-reverse;
        max-height: 5.25rem;
        flex-grow: 1;
        transition: 1s linear;
      }
    }

    &_title {
      min-width: 5.25rem;
      height: 43rem;
      background: linear-gradient(#162c4e9f, $main-blue 80%);
      transition: 1s;

      @include breakpoint(xxl) {
        min-width: 4rem;
      }

      @include breakpoint(xl) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
        min-height: 5.25rem;
        height: 5.25rem;
        min-width: 100%;
        background: linear-gradient(270deg, #0b1627b2, $main-blue 95%);
      }

      &-active {
        @extend .collapse__item_title;
        background-color: $main-blue;
        border-right: 2px solid white;

        @include breakpoint(xl) {
          border-top: 2.5px solid white;
        }
      }
    }

    &_name {
      position: absolute;
      font-size: 2rem;
      height: 38rem;
      margin-left: 0.5rem;
      color: white;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      z-index: 100;
      font-weight: 600;
      user-select: none;

      @include breakpoint(xl) {
        position: relative;
        writing-mode: unset;
        transform: none;
        height: unset;
        font-size: 1.5rem;
      }

      @include breakpoint(xs) {
        font-size: 18px;
      }
    }

    &_number {
      @extend .collapse__item_name;
      display: flex;
      align-items: end;
      height: 41.5rem;
      margin-left: 0.75rem;
      writing-mode: unset;
      transform: rotate(0);

      @include breakpoint(xl) {
        height: unset;
        font-size: 2rem;
        font-weight: 500;
        margin-left: 2.5rem;
      }

      @include breakpoint(xs) {
        font-size: 1.5rem;
      }
    }

    &_info {
      background-color: rgba(0, 0, 0, 0.678);
      backdrop-filter: blur(15px);

      @include breakpoint(xxl) {
        width: 15rem;
      }

      @include breakpoint(xl) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
        height: 12rem;
        margin-top: 28rem;
      }
    }

    &_up {
      color: rgba(255, 255, 255, 0.192);
      height: 29rem;
      overflow: hidden;

      @include breakpoint(xl) {
        color: rgba(255, 255, 255, 0.1);
      }

      &_number {
        position: relative;
        top: -4.5rem;
        left: -6.5rem;
        font-size: 23.75rem;
        font-weight: 600;
        user-select: none;

        @include breakpoint(xxl) {
          top: -4rem;
          left: -5.5rem;
          font-size: 20rem;
        }

        @include breakpoint(xl) {
          top: -1.5rem;
          left: 2rem;
          font-size: 9.5rem;
        }
      }
    }

    &_low {
      color: white;
      margin-left: 2rem;

      @include breakpoint(xl) {
        margin: 1.5rem 0 0 2.5rem;
      }
    }

    &_text {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      & h3 {
        font-size: 1.5rem;
        font-weight: 600;
        cursor: text;

        @include breakpoint(xs) {
          font-size: 1rem;
        }
      }

      & p {
        font-size: 18px;
        cursor: text;

        @include breakpoint(xs) {
          font-size: 14px;
        }
      }
    }

    &_btn {
      margin-top: 1.5rem;
      width: 100%;
      user-select: none;
    }

    &_link {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 20;
      width: 16rem;
      height: 4rem;
      border: 1px solid white;
      cursor: pointer;
      color: white;
      font-size: 18px;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(1, 0, 0, 1);

      @include breakpoint(xxl) {
        width: 10rem;
        height: 3rem;
      }

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        width: 6px;
        height: 100%;
        top: 0;
        left: 0;
        background-color: white;
        transition: all 0.4s cubic-bezier(1, 0, 0, 1);
      }

      &:hover {
        color: black;

        &::after {
          width: 100%;
        }
      }
    }
  }
}

.active {
  width: 100%;
  flex-grow: 10;
  cursor: default;

  @include breakpoint(xl) {
    height: 100%;

    & .collapse__item_wrapper {
      max-height: 60rem;
    }
  }
}
</style>