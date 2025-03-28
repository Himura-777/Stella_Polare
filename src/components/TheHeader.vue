<script setup>
import '../App.css'

import Logo from './icons/logo.vue'

import { useMenu, useNavigation } from '../logic.js'

const { activeItem, menuItems, setActive } = useNavigation()

const { isMenuOpen, openMenu, scrollToAndCloseMenu } = useMenu()
</script>

<template>
  <div class="lg:flex items-center justify-between hidden">
    <a href="#">
      <div
        class="flex gap-x-3 items-center relative after:block after:w-[93.8%] after:h-[130%] after:inset-0 after:my-auto after:ml-[-3px] after:absolute after:bg-[#0052B3]/60 after:blur-2xl"
      >
        <Logo />
        <p
          class="z-10 text-2xl font-medium leading-7 text-transparent bg-clip-text bg-linear-to-r from-white to-[#ACD1FD]"
        >
          Stella <br />
          Polare
        </p>
      </div>
    </a>

    <ul
      class="z-30 fixed left-[50%] -translate-x-1/2 rounded-full flex gap-x-10 bg-white/10 px-[1.875rem] backdrop-blur-3xl"
    >
      <li
        v-for="item in menuItems"
        :key="item.id"
        class="py-5"
        :class="{
          'border-b-2 border-[#1E74F9]': activeItem === item.id,
          'border-none': activeItem !== item.id,
        }"
        @click="setActive(item.id)"
      >
        <a
          :href="item.href"
          class="text-xl font-normal h-full"
          :class="{
            'text-white': activeItem === item.id,
            'text-white/80': activeItem !== item.id,
          }"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>

    <a
      href="#contacts"
      class="px-6 py-5 border-[2px] border-solid border-white border-opacity-30 text-xl text-white font-medium rounded-full"
    >
      Связаться с нами
    </a>
  </div>

  <div class="lg:hidden relative">
    <div class="flex items-center justify-between bg-[#222429] rounded-xl px-5 py-4">
      <a href="#">
        <div class="flex gap-x-3 items-center">
          <Logo />
          <p
            class="z-10 text-base xl:text-2xl font-medium leading-5 xl:leading-7 text-transparent bg-clip-text bg-linear-to-r from-white to-[#ACD1FD]"
          >
            Stella <br />
            Polare
          </p>
        </div>
      </a>

      <button class="px-[20px] py-[10px] bg-white/10 rounded-lg" @click="openMenu">
        <svg
          class="transform transition-transform duration-300"
          :class="{ 'rotate-45': isMenuOpen }"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.83333 8.83333V14.6667C8.83333 14.8877 8.74554 15.0996 8.58926 15.2559C8.43297 15.4122 8.22101 15.5 8 15.5C7.77899 15.5 7.56702 15.4122 7.41074 15.2559C7.25446 15.0996 7.16667 14.8877 7.16667 14.6667V8.83333H1.33333C1.11232 8.83333 0.900358 8.74554 0.744078 8.58926C0.587797 8.43297 0.5 8.22101 0.5 8C0.5 7.77899 0.587797 7.56702 0.744078 7.41074C0.900358 7.25446 1.11232 7.16667 1.33333 7.16667H7.16667V1.33333C7.16667 1.11232 7.25446 0.900358 7.41074 0.744078C7.56702 0.587797 7.77899 0.5 8 0.5C8.22101 0.5 8.43297 0.587797 8.58926 0.744078C8.74554 0.900358 8.83333 1.11232 8.83333 1.33333V7.16667H14.6667C14.8877 7.16667 15.0996 7.25446 15.2559 7.41074C15.4122 7.56702 15.5 7.77899 15.5 8C15.5 8.22101 15.4122 8.43297 15.2559 8.58926C15.0996 8.74554 14.8877 8.83333 14.6667 8.83333H8.83333Z"
            fill="white"
          />
        </svg>
      </button>
    </div>

    <ul
      class="z-30 w-full px-[1.875rem] bg-[#222429] rounded-b-xl flex flex-col gap-y-[20px] items-center overflow-hidden transition-all duration-300 absolute top-[63px]"
      :class="{ 'max-h-96': isMenuOpen, 'max-h-0': !isMenuOpen }"
    >
      <li class="mt-4">
        <a
          class="text-xl text-white text-opacity-80 font-normal"
          href="#philosophy"
          @click="scrollToAndCloseMenu('#philosophy')"
          >О компании</a
        >
      </li>
      <li>
        <a
          class="text-xl text-white text-opacity-80 font-normal"
          href="#contacts"
          @click="scrollToAndCloseMenu('#contacts')"
          >Контакты</a
        >
      </li>
      <li>
        <a
          class="text-xl text-white text-opacity-80 font-normal"
          href="#products"
          @click="scrollToAndCloseMenu('#products')"
          >Товары</a
        >
      </li>
      <li>
        <a
          class="text-xl text-white text-opacity-80 font-normal"
          href="#feedbacks"
          @click="scrollToAndCloseMenu('#feedbacks')"
          >Отзывы</a
        >
      </li>
      <li
        class="px-6 py-5 border-[2px] border-solid border-white border-opacity-30 text-xl text-white font-medium rounded-full mb-[24px]"
      >
        Связаться с нами
      </li>
    </ul>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
