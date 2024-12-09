<script setup>
import Logo from './icons/logo.vue'
</script>

<template>
  <div class="flex items-center justify-between">
    <a href="#">
      <div
        class="flex gap-x-3 items-center relative after:block after:w-[93.8%] after:h-[130%] after:inset-0 after:my-auto after:ml-[-3px] after:absolute after:bg-[#0052B3]/60 after:blur-2xl"
      >
        <Logo />
        <p
          class="z-10 text-2xl font-medium leading-7 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ACD1FD]"
        >
          Stella <br />
          Polare
        </p>
      </div>
    </a>

    <ul
      class="z-30 fixed left-[50%] -translate-x-1/2 rounded-full flex gap-x-10 bg-white/10 px-[1.875rem] backdrop-blur-3xl"
    >
      <li class="py-5">
        <a class="text-xl text-white text-opacity-80 font-normal" href="#">О компании</a>
      </li>
      <li class="py-5">
        <a class="text-xl text-white text-opacity-80 font-normal" href="#">Контакты</a>
      </li>
      <li class="py-5">
        <a class="text-xl text-white text-opacity-80 font-normal" href="#">Товары</a>
      </li>
      <li class="py-5">
        <a class="text-xl text-white text-opacity-80 font-normal" href="#">Отзывы</a>
      </li>
    </ul>

    <button
      class="px-6 py-5 border-[2px] border-solid border-white border-opacity-30 text-xl text-white font-medium rounded-full"
    >
      Связаться с нами
    </button>
  </div>
</template>
