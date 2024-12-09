<script setup>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="bg-[#090C11] py-[3.125rem]">
    <header class="mx-[3.125rem]">
      <TheHeader />
    </header>

    <main class="pt-12 pb-20">
      <section
        class="mx-[3.125rem] py-[8.125rem] text-center bg-[url('../images/performance_bg.png')] bg-no-repeat bg-contain bg-center rounded-[1.25rem] relative before:block before:absolute before:w-[100%] before:h-[100%] before:bg-gradient-to-r from-[#07101D] via-[#07101D]/20 to-[#07101D] before:left-0 before:top-0 before:rounded-[1.25rem] before:z-10 after:block after:absolute after:left-0 after:top-0 after:w-[100%] after:h-[100%] after:rounded-[1.25rem] after:bg-[url('../images/performance_bg2.png')] after:bg-no-repeat after:bg-cover after:bg-center"
      >
        <h1
          class="relative z-20 mx-auto w-[50.5%] text-[4rem] text-white font-medium text-center leading-[4rem]"
        >
          Stella Polare - твой путеводитель в мире электроники
        </h1>
        <p
          class="relative z-20 mx-auto w-[35.4%] text-2xl text-white/80 font-normal text-center mt-10 mb-[3.75rem]"
        >
          Широкий выбор качественной техники по выгодным ценам
        </p>
        <button
          class="relative z-10 px-6 py-5 bg-white rounded-full text-[#13171C] text-xl font-medium"
        >
          Приобрести у нас
        </button>
      </section>

      <section class="my-[8.75rem] mx-[3.125rem]">
        <p class="mx-auto w-[58rem] text-[2rem] text-white font-medium text-center">
          С момента создания Stella Polare клиент всегда стоял у нас на первом месте. Мы стараемся
          сделать для людей, которые приобретают у нас технику, самое лучшее и постоянно пополнять
          ассортимент в соответствии с их запросами
        </p>
        <p
          class="text-[8.75rem] font-medium text-center text-transparent bg-clip-text bg-people-count"
        >
          100+
        </p>

        <p class="mx-auto w-[23rem] text-2xl text-white/70 text-center font-medium">
          Людей стали немного счастливее с нашими товарами
        </p>
      </section>
    </main>

    <footer>
      <TheFooter />
    </footer>
  </div>
</template>
