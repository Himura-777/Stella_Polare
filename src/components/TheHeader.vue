<script setup>
import Logo from './icons/logo.vue'
</script>

<template>
  <div class="flex items-center justify-between">
    <a href="#">
      <div class="flex gap-x-3">
        <Logo />
        <p
          class="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ACD1FD]"
        >
          Stella <br />
          Polare
        </p>
      </div>
    </a>

    <div class="w-[92.212%] fixed text-center">
      <ul class="px-8 rounded-full inline-flex gap-x-10 bg-white bg-opacity-10">
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
    </div>

    <button
      class="px-6 py-5 border-[2px] border-solid border-white border-opacity-30 text-xl text-white font-medium rounded-full"
    >
      Связаться с нами
    </button>
  </div>
</template>
