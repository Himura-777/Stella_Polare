<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

import './App.css'

import { useCarousel, useGap, useQuestions, userFeedbacks } from './logic.js'

const { items, showPrev, showNext, transformStyle } = useCarousel()

const { feedbackItems, getItemClass } = userFeedbacks()

const { gap } = useGap()

const { activeIndex, questions, toggleQuestion } = useQuestions()
</script>

<template>
  <div
    class="bg-[#090C11] py-[3.125rem] bg-[url(../images/bg.png)] bg-no-repeat bg-contain bg-bottom"
  >
    <div class="max-w-[1280px] mx-auto">
      <header class="mx-5">
        <TheHeader />
      </header>

      <main class="pt-12 pb-20">
        <!-- performance -->
        <section
          class="mx-5 md:mx-6 xl:mx-7 py-20 md:py-25 xl:py-30 rounded-xl md:rounded-3xl xl:rounded-4xl text-center bg-[url('../images/performance_bg.png')] bg-no-repeat bg-contain bg-center relative before:block before:absolute before:w-[100%] before:h-[100%] before:bg-linear-to-r from-[#07101D] via-[#07101D]/20 to-[#07101D] before:left-0 before:top-0 before:rounded-[1.25rem] before:z-10 after:block after:absolute after:left-0 after:top-0 after:w-[100%] after:h-[100%] after:rounded-[1.25rem] after:bg-[url('../images/performance_bg2.png')] after:bg-no-repeat after:bg-cover after:bg-center"
        >
          <h1
            class="relative z-20 mx-auto w-4/5 text-3xl md:text-4xl xl:text-6xl text-white font-medium text-center"
          >
            Stella Polare - твой <br />
            путеводитель <br />в мире электроники
          </h1>
          <p
            class="relative z-20 mx-auto w-4/5 text-base md:text-xl xl:text-2xl text-white/80 font-normal text-center mt-6 md:mt-8 xl:mt-10 mb-9 xl:mb-15"
          >
            Широкий выбор качественной техники по выгодным ценам
          </p>
          <button
            class="relative z-10 px-6 py-5 bg-white rounded-full text-[#13171C] text-xl font-medium"
          >
            Приобрести у нас
          </button>
        </section>

        <!-- hits -->
        <section class="pt-18 xl:pt-29 mx-5 relative z-10">
          <h2
            class="text-2xl md:text-3xl xl:text-4xl font-medium mx-5 bg-[linear-gradient(to_right,_rgba(153,172,190,1)_0%,_rgba(224,240,255,1)_37%,_rgba(153,172,190,1)_63%,_rgba(50,61,72,1)_100%)] bg-clip-text text-transparent"
          >
            Топ-хиты
          </h2>
          <div class="flex justify-between items-center mt-7 md:mt-8 xl:mt-10 relative w-full">
            <button
              class="border-none w-10 h-10 rounded-full bg-white/80 absolute top-1/2 -translate-y-1/2 -left-[17px] z-10 flex items-center justify-center"
              type="button"
              @click="showPrev"
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.65584 15.6478C8.87621 15.4222 9 15.1163 9 14.7974C9 14.4784 8.87621 14.1725 8.65584 13.947L2.83731 7.99274L8.65584 2.03852C8.86996 1.81166 8.98844 1.50781 8.98576 1.19242C8.98308 0.877029 8.85946 0.575334 8.64152 0.352312C8.42358 0.129289 8.12876 0.00278607 7.82056 4.54345e-05C7.51236 -0.0026952 7.21543 0.118547 6.99374 0.33766L0.344159 7.14231C0.123794 7.36788 -3.63951e-07 7.67378 -3.50009e-07 7.99274C-3.36066e-07 8.3117 0.123794 8.6176 0.344159 8.84317L6.99374 15.6478C7.21417 15.8733 7.5131 16 7.82479 16C8.13648 16 8.43541 15.8733 8.65584 15.6478Z"
                  fill="#101010"
                />
              </svg>
            </button>
            <div class="overflow-hidden w-full">
              <ul
                class="flex transition-transform duration-500 ease-linear"
                :style="{ transform: transformStyle }"
              >
                <li
                  v-for="(item, index) in items"
                  :key="index"
                  class="min-w-full"
                  :class="item.bgClass"
                >
                  <div class="relative" v-html="item.content"></div>
                </li>
              </ul>
            </div>

            <button
              class="border-none w-10 h-10 rounded-full bg-white/80 absolute top-1/2 -translate-y-1/2 -right-[17px] z-10 flex items-center justify-center"
              type="button"
              @click="showNext"
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z"
                  fill="#101010"
                />
              </svg>
            </button>
          </div>
        </section>

        <!-- philosophy -->
        <section class="h-130 xl:h-177 relative" id="philosophy">
          <div
            class="h-full flex items-end pb-18 relative before:block before:absolute before:left-0 before:bottom-0 before:w-full before:h-[50%] xl:before:h-[65%] before:rounded-[30%] before:bg-[#D9D9D9]/2 before:shadow-[0px_0px_20px_10px_rgba(217, 217, 217, 0.2)] before:filter before:blur-[60px] before:backdrop-blur-[4px] before:z-10"
          >
            <div class="absolute flex -top-35 w-full">
              <div
                class="w-1/2 h-127 xl:h-140 bg-[conic-gradient(from_90deg,_#3378ff_0%,_#072b71_18%,_#090c11_36%,_#090c11_40%,_#090c11_46%,_#090c11_56%,_#090c11_67%,_#090c11_73%,_#090c11_78%,_#090c11_87%,_#090c11_94%,_#070707_100%,_#6599ff_100%)]"
              ></div>
              <div
                class="w-1/2 h-127 xl:h-140 bg-[conic-gradient(from_90deg,_#3378ff_0%,_#072b71_18%,_#090c11_36%,_#090c11_40%,_#090c11_46%,_#090c11_56%,_#090c11_67%,_#090c11_73%,_#090c11_78%,_#090c11_87%,_#090c11_94%,_#070707_100%,_#6599ff_100%)] scale-x-[-1]"
              ></div>
              <div
                class="absolute w-58 h-58 rounded-[50%] left-1/2 -translate-x-1/2 bottom-7 bg-[#0075ff] filter blur-[50px]"
              ></div>
            </div>
            <div
              class="relative top-12 px-5 flex flex-col items-center justify-end gap-y-4 xl:gap-y-9"
            >
              <p
                class="w-48 text-lg md:text-xl xl:text-2xl text-[#CFDFF1] text-center relative z-10 before:absolute before:block before:h-[0.125rem] before:w-12 xl:before:w-16 before:-left-7 xl:before:-left-19 before:top-1/2 before:-translate-y-1/2 before:opacity-80 before:bg-linear-to-r before:from-[#E2F1FF]/20 before:to-[#E2F1FF] after:absolute after:block after:h-[0.125rem] after:w-12 xl:after:w-16 after:-right-7 xl:after:-right-19 after:top-1/2 after:-translate-y-1/2 after:opacity-80 after:bg-linear-to-r after:from-[#E2F1FF] after:to-[#E2F1FF]/20"
              >
                Наша философия
              </p>
              <h2
                class="w-2/3 xl:w-[41.6%] text:xl md:text-2xl xl:text-3xl font-medium text-center relative z-10 text-transparent bg-clip-text bg-[linear-gradient(to_bottom,_#C0E0FF_0%,_#13171C_230%)]"
              >
                Мы верим, что технологии должны упрощать жизнь, и наша миссия - помочь вам найти
                нужные решения
              </h2>
              <p
                class="w-[96%] text-sm md:text-lg xl:text-2xl font-normal text-white/70 text-center relative z-10"
              >
                Название
                <span class="text-white/90">Stella Polare</span> переводится как
                <span class="text-white/90">Полярная звезда</span>, которая в древности служила
                путеводителем. Мы стремимся быть таким же надежным проводником в мире технологий,
                направляя вас к лучшим решениям для продуктивной и комфортной жизни
              </p>
            </div>
          </div>
        </section>

        <!-- services -->
        <section class="pt-19 mx-5">
          <ul class="flex gap-5 flex-wrap w-full">
            <li
              class="p-6 flex flex-col justify-end items-start w-full md:w-[52%] h-53 xl:h-82 rounded-xl bg-no-repeat bg-left-top bg-cover shadow-[inset_0px_0px_10px_rgba(255,255,255,0.1)] bg-[url('../images/assortment.png')]"
            >
              <div class="w-[77%]">
                <h3 class="text-lg xl:text-[1.75rem] font-medium text-white">
                  Широкий ассортимент
                </h3>
                <p class="mt-4 text-xs xl:text-xl font-normal text-white/70">
                  В нашем магазине представлен большой выбор техники: от новейших моделей айфонов и
                  макбуков до аксессуаров и других устройств
                </p>
              </div>
            </li>
            <li
              class="p-6 flex flex-col justify-end items-start w-full md:w-[45.2%] lg:w-[45.9%] xl:w-[46.3%] h-53 xl:h-82 rounded-xl bg-no-repeat bg-left-top bg-cover shadow-[inset_0px_0px_10px_rgba(255,255,255,0.1)] bg-[url('../images/consultation.png')]"
            >
              <div class="w-[88.8%]">
                <h3 class="text-lg xl:text-[1.75rem] font-medium text-white">
                  Консультации экспертов
                </h3>
                <p class="mt-4 text-xs xl:text-xl font-normal text-white/70">
                  Наши специалисты всегда готовы помочь с выбором и дать подробные консультации по
                  использованию техники
                </p>
              </div>
            </li>
            <li
              class="p-6 flex flex-col justify-end items-start w-full md:w-[45.2%] lg:w-[45.9%] xl:w-[46.3%] h-53 xl:h-82 rounded-xl bg-no-repeat bg-left-top bg-cover shadow-[inset_0px_0px_10px_rgba(255,255,255,0.1)] bg-[url('../images/stock.png')]"
            >
              <div class="w-[68%]">
                <h3 class="text-lg xl:text-[1.75rem] font-medium text-white">
                  Специальные предложения и акции
                </h3>
                <p class="mt-4 text-xs xl:text-xl font-normal text-white/70">
                  Мы регулярно проводим акции и предлагаем специальные скидки на популярные модели
                  техники
                </p>
              </div>
            </li>
            <li
              class="p-6 flex flex-col justify-end items-start w-full md:w-[52%] h-53 xl:h-82 rounded-xl bg-no-repeat bg-left-top bg-cover shadow-[inset_0px_0px_10px_rgba(255,255,255,0.1)] bg-[url('../images/guarantee.png')]"
            >
              <div class="w-[69%]">
                <h3 class="text-lg xl:text-[1.75rem] font-medium text-white">
                  Гарантия на всю технику
                </h3>
                <p class="mt-4 text-xs xl:text-xl font-normal text-white/70">
                  Мы предоставляем гарантию на все продаваемые устройства, чтобы вы могли быть
                  уверены в своем выборе
                </p>
              </div>
            </li>
            <li
              class="p-6 flex flex-col justify-end items-start w-full md:w-[52%] h-53 xl:h-82 rounded-xl bg-no-repeat bg-left-top bg-cover shadow-[inset_0px_0px_10px_rgba(255,255,255,0.1)] bg-[url('../images/engraving.png')]"
            >
              <div class="w-[95%]">
                <h3 class="text-lg xl:text-[1.75rem] font-medium text-white">
                  Лазерная гравировка
                </h3>
                <p class="mt-4 text-xs xl:text-xl font-normal text-white/70">
                  При необходимости мы нанесем на устройство различные символы, знаки, буквы и даже
                  изображение с помощью лазерного оборудования. Нанесение возможно на любые типы
                  подключаемых клавиатур, встроенных клавиатур ноутбуков, смартфонов и прочих
                  гаджетов
                </p>
              </div>
            </li>
            <li
              class="p-6 flex flex-col justify-end items-start w-full md:w-[45.2%] lg:w-[45.9%] xl:w-[46.3%] h-53 xl:h-82 rounded-xl bg-no-repeat bg-left-top bg-cover shadow-[inset_0px_0px_10px_rgba(255,255,255,0.1)] bg-[url('../images/original.png')]"
            >
              <div class="w-[90%]">
                <h3 class="text-lg xl:text-[1.75rem] font-medium text-white">
                  Только оригинальная продукция
                </h3>
                <p class="mt-4 text-xs xl:text-xl font-normal text-white/70">
                  Stella Polare предлагает своим клиентам только оригинальные и и новые изделия,
                  кроме того, у всей продукции, реализуемой нами, отсутствуют какие-либо ограничения
                  для использования в России
                </p>
              </div>
            </li>
          </ul>
        </section>

        <!--products-->
        <section class="w-full mt-[94px]" id="products">
          <h2
            class="text-2xl md:text-3xl xl:text-4xl font-medium mx-5 bg-[linear-gradient(to_right,_rgba(153,172,190,1)_0%,_rgba(224,240,255,1)_37%,_rgba(153,172,190,1)_63%,_rgba(50,61,72,1)_100%)] bg-clip-text text-transparent"
          >
            Наша продукция
          </h2>
          <div class="products_nav_container overflow-x-scroll w-full">
            <ul
              class="products_nav flex h-fit py-1 items-center border border-solid border-white/10 bg-white/5 mx-5 rounded-[0.5rem] mt-7 xl:mt-15 w-fit"
            >
              <li
                class="products_nav_item active mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
                data-content="Apple_content"
              >
                <button
                  class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
                  type="button"
                >
                  <div
                    class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
                  >
                    <svg
                      width="20"
                      height="23"
                      viewBox="0 0 20 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_37_85)">
                        <path
                          d="M14.6914 19.3724C13.7816 20.2505 12.7883 20.1118 11.8321 19.6959C10.8202 19.2707 9.89191 19.2522 8.82433 19.6959C7.48754 20.269 6.78201 20.1026 5.98365 19.3724C1.45342 14.723 2.12182 7.64266 7.26474 7.38385C8.51798 7.44855 9.39061 8.06785 10.124 8.12331C11.2194 7.90147 12.2684 7.26368 13.4381 7.34687C14.8399 7.45779 15.8982 8.01239 16.5944 9.01066C13.698 10.7392 14.385 14.5381 17.04 15.6011C16.5109 16.9876 15.8239 18.3649 14.6821 19.3816L14.6914 19.3724ZM10.0312 7.32839C9.89191 5.26714 11.5722 3.56637 13.5031 3.39999C13.7723 5.78476 11.3308 7.55947 10.0312 7.32839Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_37_85"
                          x="0.234096"
                          y="0.674068"
                          width="19.5319"
                          height="22.0919"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1.36296" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_37_85"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_37_85"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none"
                    >Apple</span
                  >
                </button>
              </li>
              <li
                class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
                data-content="Dyson_content"
              >
                <button
                  class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
                  type="button"
                >
                  <div
                    class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38442 12.2108C3.38442 12.8171 2.89974 13.3022 2.29388 13.3022C1.68803 13.3022 1.20334 12.8171 1.20334 12.2108C1.20334 11.6044 1.68803 11.1193 2.29388 11.1193H3.38442V12.2108ZM4.59613 7.72365H3.38442V9.93082H2.29388C1.0337 9.93082 0.0158691 10.9495 0.0158691 12.2108C0.0158691 13.472 1.0337 14.4907 2.29388 14.4907C3.55406 14.4907 4.5719 13.472 4.5719 12.2108V9.93082L4.59613 7.72365Z"
                        fill="white"
                      />
                      <path
                        d="M16.6408 13.3021C17.2467 13.3021 17.7313 12.817 17.7313 12.2107C17.7313 11.6043 17.2467 11.1192 16.6408 11.1192C16.0349 11.1192 15.5503 11.6043 15.5503 12.2107C15.5745 12.817 16.0592 13.3021 16.6408 13.3021ZM14.387 12.2107C14.387 10.9494 15.4049 9.93074 16.665 9.93074C17.9252 9.93074 18.9431 10.9494 18.9431 12.2107C18.9431 13.4719 17.9252 14.4906 16.665 14.4906C15.4049 14.4906 14.387 13.4719 14.387 12.2107Z"
                        fill="white"
                      />
                      <path
                        d="M22.7479 12.2107C22.7479 11.6286 22.2633 11.1435 21.6816 11.1435C21.1 11.1435 20.6153 11.6286 20.6153 12.2107V14.3936H19.4279V12.2107C19.4279 10.9494 20.4457 9.93074 21.7059 9.93074C22.966 9.93074 23.9839 10.9494 23.9839 12.2107V14.3936H22.7964C22.7479 14.3936 22.7479 12.5017 22.7479 12.2107Z"
                        fill="white"
                      />
                      <path
                        d="M11.6006 11.4345C11.431 11.3132 11.4795 11.1192 11.7703 11.0464C12.1338 10.9494 12.7639 11.0222 13.297 11.2647L13.8544 10.4886C13.6121 10.2945 13.0789 10.0277 12.3034 9.97923C12.3034 9.97923 10.9948 9.80945 10.4616 10.8039C10.4616 10.8039 10.0012 11.7256 10.9221 12.3077C11.4795 12.6472 12.4488 12.7928 12.7639 12.9383C13.0062 13.0838 12.9335 13.3506 12.57 13.4234C11.9399 13.5689 11.116 13.2051 10.8494 13.0111L10.2678 13.8115C10.6555 14.1025 11.1402 14.3693 11.9157 14.4906C11.9157 14.4906 13.1516 14.7089 13.8302 13.86C13.9514 13.7144 14.5087 12.6715 13.394 12.0651C12.8124 11.7498 11.8915 11.6043 11.6006 11.4345Z"
                        fill="white"
                      />
                      <path
                        d="M6.02666 15.2668C6.07513 15.2911 6.63251 15.6792 7.16566 15.6792C8.47431 15.7034 8.54701 14.3452 8.54701 14.0298C8.30467 14.2967 7.79575 14.4664 7.48071 14.4664C6.22053 14.4664 5.22693 13.4962 5.22693 12.235V10.0278H6.4144V12.235C6.4144 12.8171 6.89909 13.3022 7.48071 13.3022C8.06233 13.3022 8.54701 12.8171 8.54701 12.235V10.0278H9.73449V12.235C9.73449 14.1996 9.83142 16.2128 7.91692 16.6736C6.48711 17.0132 5.46927 16.1158 5.39657 16.0672L6.02666 15.2668Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none"
                    >Dyson</span
                  >
                </button>
              </li>
              <li
                class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
                data-content="Sony_content"
              >
                <button
                  class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
                  type="button"
                >
                  <div
                    class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="4"
                      viewBox="0 0 24 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.55 0C9.471 0 10.208 0.217804 10.771 0.702652C11.156 1.03314 11.371 1.50379 11.365 1.99716C11.3641 2.24066 11.3109 2.48145 11.2088 2.70494C11.1067 2.92843 10.9578 3.12997 10.771 3.29735C10.244 3.75568 9.423 4 8.551 4C7.679 4 6.871 3.75568 6.336 3.29735C6.1427 3.13441 5.98877 2.93393 5.88471 2.70955C5.78065 2.48517 5.72891 2.24219 5.733 1.99716C5.733 1.50663 5.951 1.03599 6.336 0.702652C6.836 0.272728 7.72 0 8.55 0ZM8.553 3.47538C9.014 3.47538 9.441 3.32292 9.741 3.04167C10.041 2.75758 10.174 2.41667 10.174 1.99716C10.174 1.59564 10.026 1.2197 9.741 0.952652C9.447 0.678031 9.008 0.522727 8.553 0.522727C8.098 0.522727 7.66 0.677084 7.363 0.952652C7.078 1.2197 6.929 1.59564 6.929 1.99716C6.92291 2.38584 7.07885 2.76113 7.363 3.04167C7.66 3.32008 8.096 3.47538 8.553 3.47538ZM3.712 1.61174C3.872 1.65025 4.02734 1.7017 4.178 1.7661C4.31765 1.82726 4.4457 1.90981 4.557 2.01042C4.754 2.20549 4.866 2.46686 4.863 2.73674C4.86515 2.87907 4.83197 3.01988 4.76614 3.14785C4.70031 3.27581 4.60367 3.38735 4.484 3.47348C4.27188 3.62514 4.03129 3.73729 3.775 3.80398C3.38898 3.91912 2.98562 3.9735 2.581 3.96496C2.229 3.96496 2.035 3.92614 1.768 3.87311L1.691 3.85795C1.39675 3.79645 1.10943 3.70829 0.833002 3.5947C0.820641 3.58676 0.805924 3.58278 0.791002 3.58333C0.769073 3.58383 0.748217 3.59243 0.732894 3.60729C0.717571 3.62215 0.708996 3.64211 0.709002 3.66288V3.85511H0.121002V2.45549H0.645002C0.648467 2.59734 0.69613 2.73505 0.782002 2.85133C0.994002 3.09754 1.222 3.19223 1.439 3.26799C1.806 3.38163 2.191 3.44223 2.575 3.4536C3.128 3.4536 3.451 3.3267 3.521 3.29924L3.53 3.29545L3.536 3.29356C3.598 3.27178 3.848 3.18561 3.848 2.92235C3.848 2.66288 3.614 2.60606 3.461 2.56913L3.439 2.56439C3.269 2.52083 2.877 2.48106 2.449 2.43845L2.297 2.4233C1.89567 2.38441 1.49629 2.32912 1.1 2.25758C0.602002 2.15341 0.406002 1.98106 0.284002 1.87405L0.276002 1.86648C0.0981552 1.6869 -0.000568722 1.44979 2.46475e-06 1.2036C2.46475e-06 0.733902 0.340002 0.449811 0.758002 0.275568C1.21273 0.0917336 1.70258 -0.00142658 2.197 0.0018947C3.017 0.00473561 3.684 0.257577 3.924 0.375001C4.021 0.424243 4.069 0.363637 4.069 0.318182V0.177084H4.596V1.39678H4.124C4.08203 1.21563 3.97881 1.05239 3.83 0.931818C3.73944 0.863009 3.63955 0.806 3.533 0.762311C3.13748 0.603742 2.71147 0.524736 2.282 0.530303C1.839 0.530303 1.415 0.610796 1.202 0.733902C1.06934 0.812185 1.00267 0.908775 1.002 1.02367C1.002 1.1875 1.148 1.25284 1.222 1.27273C1.418 1.32955 1.854 1.37027 2.193 1.40246L2.397 1.42235C2.724 1.4536 3.409 1.53977 3.712 1.61174ZM21.879 0.667614V0.214016H24V0.659091H23.524C23.352 0.659091 23.282 0.690341 23.152 0.828598L21.725 2.37216C21.7101 2.39122 21.7033 2.41488 21.706 2.43845V3.1411C21.7082 3.17379 21.7122 3.20634 21.718 3.23864C21.7265 3.25923 21.74 3.27766 21.7573 3.29246C21.7747 3.30726 21.7955 3.31801 21.818 3.32386C21.8611 3.32969 21.9045 3.33286 21.948 3.33333H22.434V3.77841H19.86V3.33333H20.32C20.3635 3.33286 20.4069 3.32969 20.45 3.32386C20.4729 3.31787 20.4942 3.30712 20.5122 3.29237C20.5302 3.27763 20.5444 3.25927 20.554 3.23864C20.5587 3.20723 20.5617 3.17563 20.563 3.14394V2.44129C20.563 2.41761 20.563 2.41761 20.53 2.38068L19.119 0.863637C19.043 0.788826 18.913 0.668561 18.713 0.668561H18.255V0.223485H20.843V0.668561H20.531C20.461 0.668561 20.413 0.734849 20.473 0.806818L21.352 1.80208C21.361 1.81345 21.367 1.81345 21.379 1.80492C21.391 1.7964 22.273 0.815341 22.279 0.806818C22.2864 0.797808 22.2918 0.787482 22.2949 0.776451C22.298 0.76542 22.2988 0.753909 22.2971 0.742603C22.2954 0.731297 22.2914 0.720426 22.2852 0.710635C22.279 0.700844 22.2707 0.692333 22.261 0.685607C22.2434 0.673987 22.2224 0.668011 22.201 0.668561L21.879 0.667614ZM15.595 0.664773H16.08C16.301 0.664773 16.34 0.745265 16.343 0.940341L16.371 2.4233L13.789 0.222538H11.944V0.667614H12.356C12.653 0.667614 12.674 0.822917 12.674 0.961174V3.05682C12.674 3.17803 12.675 3.33617 12.492 3.33617H11.986V3.77841H14.15V3.33333H13.622C13.41 3.33333 13.402 3.24148 13.398 3.0464V1.2642L16.371 3.77462H17.128L17.088 0.9375C17.092 0.731061 17.107 0.661932 17.331 0.661932H17.804V0.216856H15.595V0.664773Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none"
                    >Sony</span
                  >
                </button>
              </li>
              <li
                class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
                data-content="Xiaomi_content"
              >
                <button
                  class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
                  type="button"
                >
                  <div
                    class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
                  >
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6438 8.74959C11.5943 8.74927 11.547 8.73071 11.5121 8.69794C11.4771 8.66516 11.4573 8.62081 11.457 8.57446V0.17517C11.4573 0.128822 11.4771 0.0844635 11.5121 0.0516898C11.547 0.018916 11.5943 0.000361407 11.6438 3.91621e-05H13.8084C13.8333 -0.000450954 13.858 0.00371081 13.8812 0.0122821C13.9044 0.0208534 13.9255 0.0336626 13.9433 0.0499631C13.9612 0.0662636 13.9754 0.0857294 13.9851 0.107226C13.9948 0.128722 13.9999 0.151819 14 0.17517V8.57446C14 8.67289 13.9134 8.75164 13.8084 8.74959H11.6438ZM8.01406 8.74959C8.01406 8.74959 7.84082 8.70037 7.84082 8.57446V3.41775C7.84614 3.25696 7.81673 3.09683 7.75437 2.94697C7.692 2.79711 7.59797 2.66062 7.47792 2.54569C7.35786 2.43076 7.21427 2.33978 7.05576 2.27819C6.89725 2.21661 6.7271 2.1857 6.55553 2.18732H2.50891C2.27442 2.18732 2.33348 2.35179 2.33348 2.35179V8.57446C2.33348 8.7217 2.15805 8.74959 2.15805 8.74959H0.191613C0.166711 8.75008 0.141954 8.74592 0.118786 8.73735C0.0956171 8.72878 0.0744999 8.71597 0.0566653 8.69967C0.0388307 8.68337 0.0246353 8.6639 0.0149066 8.6424C0.00517796 8.62091 0.000110631 8.59781 0 8.57446V0.17517C0 0.0767357 0.0866196 -0.00201155 0.191613 3.91621e-05H7.69471C8.35266 0.00468186 8.98209 0.252511 9.44627 0.689696C9.91046 1.12688 10.1719 1.71811 10.1739 2.33498L10.1782 8.57487C10.1783 8.59788 10.1735 8.62068 10.1641 8.64195C10.1548 8.66322 10.141 8.68255 10.1237 8.69883C10.1063 8.7151 10.0857 8.728 10.063 8.73678C10.0403 8.74556 10.016 8.75005 9.99144 8.75L8.01406 8.74959ZM3.99019 8.74959C3.94366 8.74959 3.89904 8.73226 3.86614 8.70142C3.83324 8.67057 3.81476 8.62874 3.81476 8.58512V3.66342C3.81476 3.5736 3.89438 3.49896 3.99019 3.49896H6.18893C6.28473 3.50306 6.35735 3.57606 6.35735 3.66342V8.58512C6.35758 8.60661 6.35328 8.62792 6.34468 8.64784C6.33608 8.66776 6.32337 8.68589 6.30726 8.70117C6.29116 8.71646 6.27199 8.72861 6.25085 8.73692C6.22971 8.74523 6.20703 8.74954 6.18411 8.74959H3.99019Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none"
                    >Xiaomi</span
                  >
                </button>
              </li>
              <li
                class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
                data-content="Xbox_content"
              >
                <button
                  class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
                  type="button"
                >
                  <div
                    class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5.788C10.3256 8.1448 11.9648 10.908 13.3344 13.9616C11.8691 15.2766 9.96887 16.0027 8 16C6.03114 16.0027 4.13094 15.2766 2.66561 13.9616C4.03521 10.908 5.6736 8.1448 8 5.788ZM2.80721 1.91441C4.24707 2.68992 5.59732 3.62138 6.8336 4.692C4.52481 7.0392 2.86561 9.7432 1.50001 12.6648C0.522144 11.3062 -0.00271106 9.67394 1.05311e-05 8C-0.00116313 6.84278 0.249289 5.69914 0.734014 4.64833C1.21874 3.59752 1.92614 2.66466 2.80721 1.91441ZM13.1928 1.91441C14.0739 2.66466 14.7813 3.59752 15.266 4.64833C15.7507 5.69914 16.0012 6.84278 16 8C16 9.7408 15.444 11.352 14.5 12.664C13.1344 9.7432 11.4752 7.04 9.1664 4.692C10.4027 3.6214 11.7529 2.68994 13.1928 1.91441ZM8 8.69552e-06C9.34 8.69552e-06 10.6032 0.329608 11.7128 0.912008C10.3914 1.68098 9.14796 2.57666 8 3.58641C6.85204 2.57667 5.60859 1.68099 4.28721 0.912008C5.43242 0.311113 6.70672 -0.00190205 8 8.69552e-06Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none"
                    >Xbox</span
                  >
                </button>
              </li>
            </ul>
          </div>

          <ul
            class="products_list active px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
            id="Apple_content"
          >
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
          </ul>
          <ul
            class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
            id="Dyson_content"
          >
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
          </ul>
          <ul
            class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
            id="Sony_content"
          >
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
          </ul>
          <ul
            class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
            id="Xiaomi_content"
          >
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
          </ul>
          <ul
            class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
            id="Xbox_content"
          >
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
            <li
              class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
            >
              <div class="overlay"></div>
              <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
                >Apple iPhone 15 Pro Max<br />256 GB Blue Titanium</span
              >
              <span
                class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
                >110500₽</span
              >
              <button
                class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
                type="button"
              >
                Приобрести
              </button>
            </li>
          </ul>
        </section>

        <!-- attention -->
        <section class="py-18 xl:py-35 mx-5">
          <p
            class="mx-auto w-[90%] xl:w-[77.3%] text-lg xl:text-[2rem] text-white font-medium text-center"
          >
            С момента создания Stella Polare клиент всегда стоял у нас на первом месте. Мы стараемся
            сделать для людей, которые приобретают у нас технику, самое лучшее и постоянно пополнять
            ассортимент в соответствии с их запросами
          </p>

          <p
            class="text-[4.375rem] xl:text-[8.75rem] font-medium text-center text-transparent bg-clip-text bg-[linear-gradient(25deg,_#1E74F9_35%,_#A9CBFF_50%,_#1E74F9_65%)]"
          >
            100+
          </p>

          <p
            class="mx-auto w-[70%] md:w-[37%] xl:w-[30.5%] text-base xl:text-2xl text-white/70 text-center font-medium"
          >
            Людей стали немного счастливее с нашими товарами
          </p>
        </section>

        <!-- feedbacks -->
        <section
          class="my-14 mx-5 py-4 xl:py-13 rounded-[1.25rem] relative z-0 shadow-[inset_0px_0px_50px_rgba(0,0,0,0.5)] bg-[linear-gradient(45deg,_#0075ff,_rgba(92,_167,_255,_0.2))] before:block before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:rounded-[1.25rem] before:bg-black/60 before:z-10"
          id="feedbacks"
        >
          <span class="mx-5 text-sm xl:text-xl font-normal text-white/80 relative z-20"
            >Отзывы</span
          >
          <h2
            class="mt-5 mb-[3.1875rem] mx-5 text-3xl xl:text-[3.125rem] font-medium text-white relative z-20"
          >
            Что говорят<br />наши клиенты
          </h2>
          <ul class="overflow-x-scroll px-10 xl:px-12 flex gap-x-5 relative z-20 min-h-[23.75rem]">
            <li
              v-for="(item, index) in feedbackItems"
              :key="index"
              :class="getItemClass(index)"
              class="feedbacks_item w-50 xl:w-75 flex flex-col shrink-0"
            >
              <div>
                <div
                  class="w-10 xl:w-[4.375rem] aspect-[1/1] flex items-center justify-center text-[#969696] text-lg xl:text-[1.875rem] font-normal rounded-[50%] bg-white relative z-2"
                >
                  Ю
                </div>
                <p class="mt-4 text-xl xl:text-2xl font-medium text-white relative z-20">
                  {{ item.name }}
                </p>
              </div>
              <p class="w-full mt-5 text-base xl:text-xl text-white whitespace-normal">
                {{ item.feedback }}
              </p>
            </li>
          </ul>
          <a
            href="https://yandex.ru/maps/org/stella_polare/219434381766/reviews/?indoorLevel=3&ll=37.502687%2C55.741186&z=16"
          >
            <button
              class="mt-15 xl:mt-22 mx-5 h-15 xl:h-22 w-[calc(100%-2*20px)] xl:w-[calc(100%-2*3.125rem)] border-none rounded-xl xl:rounded-xl bg-white/10 flex gap-x-4 xl:gap-x-7 justify-center items-center relative z-20"
              type="btn"
            >
              <span class="text-xl xl:text-[1.875rem] text-white font-normal"
                >Написать свой отзыв</span
              >
              <img src="./svg/write.svg" class="w-5 xl:w-7 aspect-[1/1]" />
            </button>
          </a>
        </section>

        <!-- location -->
        <section class="pt-17 xl:pt-30 mx-5 xl:px-13">
          <h2
            class="text-2xl xl:text-[2.5rem] font-medium mr-5 xl:mx-5 bg-[linear-gradient(to_right,_rgba(153,172,190,1)_0%,_rgba(224,240,255,1)_37%,_rgba(153,172,190,1)_63%,_rgba(50,61,72,1)_100%)] bg-clip-text text-transparent"
          >
            Пункт выдачи находится всего в 5 минутах от метро Багратионовская
          </h2>
          <div
            class="w-full h-116 rounded-[1.25rem] mt-7 xl:mt-13 p-4 xl:p-7 flex justify-start items-end bg-[url('../images/locationM.jpg')] md:bg-[url('../images/location_bg.png')] bg-no-repeat bg-center bg-cover"
          >
            <div
              class="w-62 xl:w-79 h-fit p-3 l:py-9 xl:px-5 flex flex-col gap-y-4 xl:gap-y-6 bg-white rounded-[1.25rem]"
            >
              <div class="px-2 flex flex-col justify-center gap-y-[0.625rem]">
                <div class="flex items-center gap-x-2">
                  <svg
                    class="w-3 h-4 xl:w-14 xl:h-20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
                      fill="#090C11"
                    />
                  </svg>
                  <span class="text-lg xl:text-2xl font-medium text-[#090C11]">Адрес</span>
                </div>
                <p class="text-base xl:text-xl text-[#090C11]/60">
                  Москва, ул. Барклая, дом 8, 3 этаж, 335 павильон
                </p>
                <a
                  class="text-base xl:text-xl font-normal text-[#0060D1] underline"
                  href="https://yandex.ru/maps/org/stella_polare/219434381766/?ll=37.502687%2C55.741186&z=7"
                  >Показать на карте</a
                >
              </div>
              <div class="px-2 flex flex-col justify-center gap-y-[0.625rem]">
                <div class="flex items-center gap-x-2">
                  <svg
                    class="w-4 aspect-[1/1] xl:w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M15 1.33989C16.5083 2.21075 17.7629 3.46042 18.6398 4.96519C19.5167 6.46997 19.9854 8.17766 19.9994 9.91923C20.0135 11.6608 19.5725 13.3758 18.72 14.8946C17.8676 16.4133 16.6332 17.6831 15.1392 18.5782C13.6452 19.4733 11.9434 19.9627 10.2021 19.998C8.46083 20.0332 6.74055 19.6131 5.21155 18.7791C3.68256 17.9452 2.39787 16.7264 1.48467 15.2434C0.571462 13.7604 0.0614093 12.0646 0.00500011 10.3239L0 9.99989L0.00500011 9.67589C0.0610032 7.94888 0.563548 6.26585 1.46364 4.79089C2.36373 3.31592 3.63065 2.09934 5.14089 1.25977C6.65113 0.420205 8.35315 -0.0137108 10.081 0.000330246C11.8089 0.0143713 13.5036 0.47589 15 1.33989ZM10 3.99989C9.75507 3.99992 9.51866 4.08985 9.33563 4.25261C9.15259 4.41537 9.03566 4.63964 9.007 4.88289L9 4.99989V9.99989L9.009 10.1309C9.0318 10.3044 9.09973 10.4689 9.206 10.6079L9.293 10.7079L12.293 13.7079L12.387 13.7899C12.5624 13.926 12.778 13.9998 13 13.9998C13.222 13.9998 13.4376 13.926 13.613 13.7899L13.707 13.7069L13.79 13.6129C13.9261 13.4375 13.9999 13.2219 13.9999 12.9999C13.9999 12.7779 13.9261 12.5623 13.79 12.3869L13.707 12.2929L11 9.58489V4.99989L10.993 4.88289C10.9643 4.63964 10.8474 4.41537 10.6644 4.25261C10.4813 4.08985 10.2449 3.99992 10 3.99989Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-lg xl:text-2xl font-medium text-[#090C11]">Часы работы</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-base xl:text-xl text-[#090C11]">Будни</span>
                  <span class="text-base xl:text-xl text-[#090C11]">10:00 - 19:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-base xl:text-xl text-[#090C11]/60">Выходные</span>
                  <span class="text-base xl:text-xl text-[#090C11]/60">12:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- questions -->
        <section
          class="mt-17 md:mt-34 mx-5 pb-10 md:pb-27 md:flex justify-between items-start relative before:block before:absolute before:w-[41.25rem] before:h-[29.8125rem] before:left-[50%] before:-top-4 before:-translate-x-[50%] before:filter before:blur-[30.0625rem] before:bg-[radial-gradient(ellipse_at_center,_#4D9FFF_20%,_#0050AD_50%,_#002F66_80%)] before:z-1"
        >
          <div class="xl:w-[29.04%] relative z-10 xl:mx-5">
            <h2
              class="text-2xl xl:text-[2.5rem] font-medium mr-5 xl:mx-5 bg-[linear-gradient(to_right,_rgba(153,172,190,1)_0%,_rgba(224,240,255,1)_37%,_rgba(153,172,190,1)_63%,_rgba(50,61,72,1)_100%)] bg-clip-text text-transparent"
            >
              Часто задаваемые вопросы
            </h2>
            <p
              class="hidden md:block md:w-1/2 xl:w-[79.25%] xl:mx-5 mt-[2.1875rem] md:text-lg xl:text-2xl font-normal text-white/70"
            >
              Есть вопрос, на который не было ответа? Пиши на почту
              <a
                class="text-2xl font-normal text-white/70 relative underline"
                href="mailto:example@example.com"
                >sp@gmail.com</a
              >
            </p>
          </div>
          <ul
            class="md:w-[90%] xl:w-[52.12%] flex flex-col gap-y-3 md:gap-y-4 relative z-10 mt-5 md:mt-0"
          >
            <li v-for="(item, index) in questions" :key="index" class="question-item">
              <div
                class="w-full h-15 xl:h-19 border border-solid border-white/30 rounded-2xl xl:rounded-[1.25rem] bg-white/10 inline-flex items-center justify-between p-5 xl:p-6 transition-transform duration-300 ease-linear"
                @click="toggleQuestion(index)"
              >
                <span class="w-[70%] text-lg xl:text-2xl xl:font-medium text-white">{{
                  item.title
                }}</span>
                <button
                  class="border-none bg-no justify-center inline-flex items-center transition-transform duration-100 ease-linear"
                  type="button"
                  :class="{ 'rotate-90': activeIndex === index }"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition-transform duration-300 ease-linear"
                    :class="{
                      'rotate-0': activeIndex !== index,
                      'rotate-180': activeIndex === index,
                    }"
                  >
                    <path
                      d="M10 2L10 18"
                      stroke="#90969D"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2 10L18 10"
                      stroke="#90969D"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div
                class="text-lg xl:text-2xl font-medium text-white/60 px-[1.5625rem] overflow-hidden transition-height duration-100 ease-linear"
                :class="{ 'mt-4': activeIndex === index }"
                :style="{
                  maxHeight: activeIndex === index ? '100rem' : '0',
                  opacity: activeIndex === index ? '1' : '0',
                }"
              >
                {{ item.content }}
              </div>
            </li>
          </ul>
          <p
            class="md:hidden mt-[2.1875rem] text-base text-white/70 text-center px-5 relative z-10"
          >
            Есть вопрос, на который не было ответа? Пиши на почту
            <a class="text-base text-white/70 relative underline" href="mailto:example@example.com"
              >sp@gmail.com</a
            >
          </p>
        </section>

        <!-- company products -->
        <section
          class="w-full h-[8.125rem] xl:mt-30 relative overflow-hidden before:block before:absolute before:w-[13.4375rem] before:h-full before:left-0 before:top-0 before:bg-linear-to-r before:from-[#0A0F16] before:to-[#0A0F16]/0 before:z-10 after:block after:absolute after:w-[13.4375rem] after:h-full after:right-0 after:top-0 after:bg-linear-to-r after:from-[#0A0F16]/0 after:to-[#0A0F16] after:z-10 opacity-40 whitespace-nowrap"
        >
          <div class="scroll-wrapper flex w-max animate-scroll" :style="{ '--gap': gap }">
            <ul
              class="company_icons_list flex gap-x-10 sm:gap-x-15 md:gap-x-20 lg:gap-x-28 xl:gap-x-32 items-center whitespace-nowrap"
            >
              <li class="inline-block">
                <svg
                  class="w-8 h-9 md:w-12 md:h-14 xl:w-16 xl:h-19"
                  viewBox="0 0 64 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.6545 72C48.5712 75.9583 44.1128 75.3333 39.8212 73.4583C35.2795 71.5417 31.1128 71.4583 26.3212 73.4583C20.3212 76.0417 17.1545 75.2917 13.5712 72C-6.76218 51.0417 -3.76217 19.125 19.3212 17.9583C24.9462 18.25 28.8628 21.0417 32.1545 21.2917C37.0712 20.2917 41.7795 17.4167 47.0295 17.7917C53.3212 18.2917 58.0712 20.7917 61.1962 25.2917C48.1962 33.0833 51.2795 50.2083 63.1962 55C60.8212 61.25 57.7378 67.4583 52.6128 72.0417L52.6545 72ZM31.7378 17.7083C31.1128 8.41667 38.6545 0.75 47.3212 0C48.5295 10.75 37.5712 18.75 31.7378 17.7083Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-13 h-9 md:w-16 md:h-13 xl:w-20 xl:h-17"
                  viewBox="0 0 100 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.1711 67.3344C82.8179 67.3319 82.48 67.1906 82.2303 66.9408C81.9805 66.6911 81.8392 66.3531 81.8367 66V2.00313C81.8392 1.64999 81.9805 1.31201 82.2303 1.0623C82.48 0.812584 82.8179 0.671211 83.1711 0.668755H98.6336C98.8115 0.665021 98.9883 0.696731 99.1538 0.762038C99.3193 0.827346 99.4702 0.924943 99.5976 1.04914C99.725 1.17334 99.8264 1.32166 99.8959 1.48544C99.9653 1.64923 100.002 1.82521 100.002 2.00313V66C100.002 66.75 99.3836 67.35 98.6336 67.3344H83.1711ZM57.243 67.3344C57.243 67.3344 56.0055 66.9594 56.0055 66V26.7094C56.0434 25.4843 55.8334 24.2642 55.3879 23.1224C54.9424 21.9806 54.2707 20.9406 53.4131 20.0649C52.5555 19.1892 51.5298 18.496 50.3975 18.0267C49.2653 17.5575 48.0498 17.322 46.8242 17.3344H17.918C16.243 17.3344 16.6648 18.5875 16.6648 18.5875V66C16.6648 67.1219 15.4117 67.3344 15.4117 67.3344H1.36484C1.18696 67.3381 1.01012 67.3064 0.844616 67.2411C0.679115 67.1758 0.528269 67.0782 0.400871 66.954C0.273473 66.8298 0.172071 66.6815 0.102576 66.5177C0.0330815 66.3539 -0.00311598 66.1779 -0.00390625 66V2.00313C-0.00390625 1.25313 0.614844 0.65313 1.36484 0.668755H54.9617C59.6617 0.70413 64.1579 2.59242 67.4737 5.92347C70.7895 9.25453 72.6572 13.7593 72.6711 18.4594L72.7023 66.0031C72.7027 66.1785 72.6685 66.3522 72.6016 66.5143C72.5347 66.6763 72.4364 66.8236 72.3124 66.9476C72.1884 67.0716 72.0412 67.1699 71.8791 67.2368C71.717 67.3037 71.5433 67.3379 71.368 67.3375L57.243 67.3344ZM28.4992 67.3344C28.1669 67.3344 27.8481 67.2024 27.6131 66.9673C27.3781 66.7323 27.2461 66.4136 27.2461 66.0813V28.5813C27.2461 27.8969 27.8148 27.3281 28.4992 27.3281H44.2055C44.8898 27.3594 45.4086 27.9156 45.4086 28.5813V66.0813C45.4102 66.245 45.3795 66.4074 45.3181 66.5591C45.2566 66.7109 45.1658 66.849 45.0508 66.9655C44.9357 67.082 44.7988 67.1746 44.6478 67.2379C44.4968 67.3012 44.3348 67.334 44.1711 67.3344H28.4992Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-16 h-3 md:w-24 md:h-4 xl:w-32 xl:h-5"
                  viewBox="0 0 130 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M107.342 0.683415L107.591 15.2759H107.467L103.242 0.688833H96.2921V19.0622H100.885L100.636 3.97675H100.761L105.289 19.0622H111.935V0.688833L107.342 0.683415ZM19.8629 0.683415L16.3908 19.2518H21.4175L23.9633 2.36258H24.0879L26.5742 19.2518H31.5358L28.1233 0.688833L19.8629 0.683415ZM47.9267 0.683415L45.63 14.8426H45.5054L43.2088 0.688833H35.6417L35.2679 19.2518H39.9262L40.0508 2.55217H40.1104L43.2142 19.2518H47.9321L51.0358 2.55217H51.1604L51.285 19.2518H55.9433L55.51 0.688833L47.9267 0.683415ZM8.56917 13.9759C8.70536 14.4184 8.72587 14.8883 8.62875 15.3409C8.50417 15.9584 8.07083 16.5813 6.83042 16.5813C5.64958 16.5813 4.96708 15.8988 4.96708 14.9022V13.1038H0V14.5338C0 18.6938 3.28792 19.9342 6.77083 19.9342C10.1183 19.9342 12.9133 18.7534 13.3467 15.7093C13.5958 14.0951 13.4117 13.0443 13.3467 12.6705C12.48 8.75967 5.40042 7.63842 4.90208 5.46633C4.8411 5.13873 4.8411 4.80268 4.90208 4.47508C5.02667 3.85216 5.46542 3.22925 6.58125 3.22925C7.69708 3.22925 8.31458 3.91717 8.31458 4.90842V6.02425H12.9729V4.72425C12.9729 0.688833 9.31125 0.065918 6.70583 0.065918C3.4125 0.065918 0.6825 1.18175 0.184167 4.16634C0.02115 4.98783 0.0433554 5.83533 0.249167 6.64716C0.99125 10.493 7.6375 11.6143 8.56917 13.9705M68.9758 13.9705C69.16 14.4038 69.095 14.9672 69.0354 15.3409C68.9108 15.9584 68.4775 16.5813 67.2371 16.5813C66.0563 16.5813 65.3737 15.8988 65.3737 14.9022V13.1038H60.4067V14.5338C60.4067 18.6288 63.635 19.8692 67.1125 19.8692C70.4654 19.8692 73.1954 18.7534 73.6288 15.6497C73.8779 14.0355 73.6937 13.0443 73.6288 12.6055C72.8867 8.75967 65.8667 7.57883 65.3737 5.46633C65.3128 5.13873 65.3128 4.80268 65.3737 4.47508C65.4983 3.85216 65.9317 3.22925 67.0529 3.22925C68.1037 3.22925 68.7862 3.91717 68.7862 4.90842V6.02425H73.3796V4.72425C73.3796 0.688833 69.7775 0.065918 67.1721 0.065918C63.8842 0.065918 61.2137 1.12217 60.7154 4.16634C60.5908 4.97342 60.5908 5.7155 60.7804 6.64716C61.5225 10.493 68.0387 11.5492 68.9758 13.9705ZM84.6192 16.4568C85.9192 16.4568 86.2983 15.5901 86.4175 15.0917C86.4825 14.9022 86.4825 14.5934 86.4825 14.4093V0.683415H91.195V14.0301C91.195 14.4038 91.195 15.0863 91.1408 15.2759C90.8267 18.748 88.0967 19.8638 84.6787 19.8638C81.2663 19.8638 78.5362 18.748 78.2221 15.2705C78.2221 15.0863 78.1625 14.4038 78.1625 14.0301V0.683415H82.875V14.4038C82.875 14.653 82.875 14.8968 82.94 15.0863C82.94 15.5793 83.3192 16.4513 84.6192 16.4513M123.359 16.2672C124.724 16.2672 125.157 15.4005 125.282 14.8968C125.342 14.7126 125.342 14.4038 125.342 14.2143V11.5438H123.419V8.81384H130V13.7809C130 14.1547 130 14.4038 129.94 15.0268C129.626 18.4393 126.707 19.6147 123.419 19.6147C120.131 19.6147 117.211 18.4393 116.903 15.0213C116.838 14.4038 116.837 14.1547 116.837 13.7809V5.95925C116.837 5.6505 116.903 5.02758 116.903 4.71342C117.336 1.24133 120.131 0.1255 123.419 0.1255C126.707 0.1255 129.567 1.24133 129.935 4.71883C130 5.27675 130 5.95925 130 5.95925V6.58217H125.342V5.52592C125.342 5.52592 125.342 5.09259 125.282 4.84342C125.217 4.41009 124.849 3.47841 123.419 3.47841C122.054 3.47841 121.685 4.34509 121.555 4.84342C121.496 5.08717 121.496 5.40133 121.496 5.71008V14.2143C121.496 14.4634 121.496 14.7126 121.555 14.8968C121.555 15.3951 122.054 16.2672 123.359 16.2672Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-20 h-30 md:w-26 md:h-26 xl:w-32 xl:h-32"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3323 66.1416C18.3323 69.4261 15.7069 72.0537 12.4252 72.0537C9.14346 72.0537 6.51809 69.4261 6.51809 66.1416C6.51809 62.8571 9.14346 60.2295 12.4252 60.2295H18.3323V66.1416ZM24.8957 41.8364H18.3323V53.792H12.4252C5.59922 53.792 0.0859375 59.3099 0.0859375 66.1416C0.0859375 72.9733 5.59922 78.4913 12.4252 78.4913C19.2511 78.4913 24.7644 72.9733 24.7644 66.1416V53.792L24.8957 41.8364Z"
                    fill="white"
                  />
                  <path
                    d="M90.1377 72.0532C93.4194 72.0532 96.0447 69.4257 96.0447 66.1412C96.0447 62.8567 93.4194 60.2291 90.1377 60.2291C86.8559 60.2291 84.2306 62.8567 84.2306 66.1412C84.3618 69.4257 86.9872 72.0532 90.1377 72.0532ZM77.9297 66.1412C77.9297 59.3094 83.443 53.7915 90.2689 53.7915C97.0949 53.7915 102.608 59.3094 102.608 66.1412C102.608 72.9729 97.0949 78.4908 90.2689 78.4908C83.443 78.4908 77.9297 72.9729 77.9297 66.1412Z"
                    fill="white"
                  />
                  <path
                    d="M123.218 66.1412C123.218 62.9881 120.593 60.3605 117.442 60.3605C114.292 60.3605 111.667 62.9881 111.667 66.1412V77.9653H105.234V66.1412C105.234 59.3094 110.748 53.7915 117.574 53.7915C124.4 53.7915 129.913 59.3094 129.913 66.1412V77.9653H123.481C123.218 77.9653 123.218 67.7177 123.218 66.1412Z"
                    fill="white"
                  />
                  <path
                    d="M62.837 61.937C61.9181 61.2801 62.1806 60.229 63.7558 59.8349C65.7249 59.3094 69.1378 59.7035 72.0257 61.0173L75.0449 56.8132C73.7322 55.7621 70.8443 54.317 66.6437 54.0542C66.6437 54.0542 59.5552 53.1346 56.6673 58.5211C56.6673 58.5211 54.1732 63.5135 59.1614 66.6666C62.1806 68.5059 67.4314 69.2942 69.1378 70.0825C70.4505 70.8708 70.0567 72.316 68.0877 72.7101C64.6747 73.4984 60.2116 71.5277 58.7676 70.4766L55.6172 74.8122C57.7175 76.3887 60.3429 77.8339 64.5434 78.4908C64.5434 78.4908 71.2381 79.6732 74.9137 75.0749C75.57 74.2866 78.5892 68.6373 72.5508 65.3528C69.4004 63.6449 64.4122 62.8566 62.837 61.937Z"
                    fill="white"
                  />
                  <path
                    d="M32.6444 82.6953C32.9069 82.8267 35.9261 84.9288 38.814 84.9288C45.9025 85.0602 46.2963 77.7029 46.2963 75.995C44.9836 77.4402 42.227 78.3598 40.5205 78.3598C33.6945 78.3598 28.3125 73.1046 28.3125 66.2729V54.3174H34.7447V66.2729C34.7447 69.426 37.37 72.0536 40.5205 72.0536C43.6709 72.0536 46.2963 69.426 46.2963 66.2729V54.3174H52.7284V66.2729C52.7284 76.9146 53.2535 87.8191 42.8833 90.3153C35.1385 92.1546 29.6252 87.2936 29.2314 87.0308L32.6444 82.6953Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-10 h-10 md:w-15 md:h-15 xl:w-21 xl:h-21"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.0027 30.4794C54.1152 42.7544 62.6527 57.146 69.786 73.0502C62.154 79.8992 52.2572 83.681 42.0027 83.6669C31.7481 83.681 21.8513 79.8992 14.2193 73.0502C21.3527 57.146 29.886 42.7544 42.0027 30.4794ZM14.9568 10.3044C22.4561 14.3435 29.4887 19.1949 35.9277 24.771C23.9027 36.996 15.261 51.0794 8.14849 66.296C3.05544 59.2199 0.321817 50.7187 0.335992 42.0002C0.32988 35.973 1.63432 30.0165 4.15893 24.5436C6.68354 19.0706 10.3679 14.212 14.9568 10.3044ZM69.0485 10.3044C73.6374 14.212 77.3218 19.0706 79.8464 24.5436C82.371 30.0165 83.6754 35.973 83.6693 42.0002C83.6693 51.0669 80.7735 59.4585 75.8568 66.2919C68.7443 51.0794 60.1027 37.0002 48.0777 24.771C54.5167 19.195 61.5492 14.3436 69.0485 10.3044ZM42.0027 0.333541C48.9818 0.333541 55.561 2.05021 61.3402 5.08354C54.4579 9.08862 47.9816 13.7536 42.0027 19.0127C36.0237 13.7537 29.5474 9.08866 22.6652 5.08354C28.6298 1.95388 35.2668 0.32359 42.0027 0.333541Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-16 h-3 md:w-24 md:h-4 xl:w-32 xl:h-6"
                  width="130"
                  height="23"
                  viewBox="0 0 130 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.3125 0C51.3013 0 55.2934 1.24584 58.3429 4.01917C60.4284 5.90959 61.5929 8.60167 61.5604 11.4238C61.5553 12.8166 61.2675 14.1939 60.7144 15.4723C60.1614 16.7506 59.3546 17.9034 58.3429 18.8608C55.4884 21.4825 51.0413 22.88 46.3179 22.88C41.5946 22.88 37.2179 21.4825 34.32 18.8608C33.273 17.9288 32.4392 16.7821 31.8755 15.4986C31.3119 14.2152 31.0316 12.8253 31.0538 11.4238C31.0538 8.61792 32.2346 5.92584 34.32 4.01917C37.0283 1.56 41.8167 0 46.3125 0ZM46.3288 19.8792C48.8259 19.8792 51.1388 19.0071 52.7638 17.3983C54.3888 15.7733 55.1092 13.8233 55.1092 11.4238C55.1092 9.12708 54.3075 6.97667 52.7638 5.44917C51.1713 3.87834 48.7934 2.99 46.3288 2.99C43.8642 2.99 41.4917 3.87292 39.8829 5.44917C38.3392 6.97667 37.5321 9.12708 37.5321 11.4238C37.4991 13.647 38.3438 15.7937 39.8829 17.3983C41.4917 18.9908 43.8534 19.8792 46.3288 19.8792ZM20.1067 9.21917C20.9733 9.43945 21.8147 9.73375 22.6308 10.1021C23.3873 10.4519 24.0809 10.9241 24.6838 11.4996C25.7508 12.6154 26.3575 14.1104 26.3413 15.6542C26.3529 16.4683 26.1732 17.2737 25.8166 18.0057C25.46 18.7377 24.9366 19.3757 24.2883 19.8683C23.1394 20.7358 21.8362 21.3773 20.4479 21.7588C18.357 22.4173 16.1721 22.7284 13.9804 22.6796C12.0738 22.6796 11.0229 22.4575 9.57668 22.1542L9.1596 22.0675C7.56574 21.7157 6.00941 21.2114 4.5121 20.5617C4.44514 20.5163 4.36542 20.4935 4.2846 20.4967C4.16581 20.4995 4.05284 20.5487 3.96984 20.6337C3.88684 20.7187 3.8404 20.8328 3.84043 20.9517V22.0512H0.65543V14.0454H3.49376C3.51253 14.8568 3.77071 15.6445 4.23585 16.3096C5.38418 17.7179 6.61918 18.2596 7.7946 18.6929C9.78251 19.3429 11.8679 19.6896 13.9479 19.7546C16.9433 19.7546 18.6929 19.0288 19.0721 18.8717L19.1208 18.85L19.1533 18.8392C19.4892 18.7146 20.8433 18.2217 20.8433 16.7158C20.8433 15.2317 19.5758 14.9067 18.7471 14.6954L18.6279 14.6683C17.7071 14.4192 15.5838 14.1917 13.2654 13.9479L12.4421 13.8612C10.2682 13.6388 8.10493 13.3226 5.95835 12.9133C3.26085 12.3175 2.19918 11.3317 1.53835 10.7196L1.49501 10.6763C0.531674 9.64908 -0.00308058 8.29282 1.33508e-05 6.88459C1.33508e-05 4.19792 1.84168 2.57292 4.10585 1.57625C6.56897 0.524716 9.2223 -0.00816005 11.9004 0.0108377C16.3421 0.0270877 19.955 1.47334 21.255 2.145C21.7804 2.42667 22.0404 2.08 22.0404 1.82V1.01292H24.895V7.98959H22.3383C22.111 6.9534 21.5519 6.01965 20.7458 5.33C20.2553 4.93641 19.7142 4.61032 19.1371 4.36042C16.9947 3.4534 14.6871 3.00149 12.3608 3.03334C9.96126 3.03334 7.6646 3.49375 6.51085 4.19792C5.79224 4.6457 5.43112 5.1982 5.42751 5.85542C5.42751 6.7925 6.21835 7.16625 6.61918 7.28C7.68085 7.605 10.0425 7.83792 11.8788 8.02209L12.9838 8.13584C14.755 8.31459 18.4654 8.8075 20.1067 9.21917ZM118.511 3.81875V1.22417H130V3.77H127.422C126.49 3.77 126.111 3.94875 125.407 4.73958L117.677 13.5688C117.597 13.6778 117.56 13.8131 117.574 13.9479V17.9671C117.586 18.1541 117.608 18.3403 117.639 18.525C117.685 18.6428 117.758 18.7482 117.852 18.8329C117.946 18.9175 118.059 18.979 118.181 19.0125C118.414 19.0459 118.649 19.064 118.885 19.0667H121.518V21.6125H107.575V19.0667H110.067C110.302 19.064 110.538 19.0459 110.771 19.0125C110.895 18.9782 111.01 18.9167 111.108 18.8324C111.205 18.748 111.282 18.643 111.334 18.525C111.359 18.3454 111.376 18.1646 111.383 17.9833V13.9642C111.383 13.8287 111.383 13.8288 111.204 13.6175L103.561 4.94C103.15 4.51209 102.445 3.82417 101.362 3.82417H98.8813V1.27833H112.9V3.82417H111.21C110.83 3.82417 110.57 4.20333 110.895 4.615L115.657 10.3079C115.705 10.3729 115.738 10.3729 115.803 10.3242C115.868 10.2754 120.645 4.66375 120.678 4.615C120.718 4.56346 120.747 4.5044 120.764 4.4413C120.781 4.3782 120.785 4.31236 120.776 4.24769C120.767 4.18302 120.745 4.12084 120.711 4.06483C120.678 4.00883 120.633 3.96015 120.58 3.92167C120.485 3.8552 120.371 3.82102 120.255 3.82417L118.511 3.81875ZM84.4729 3.8025H87.1C88.2971 3.8025 88.5084 4.26292 88.5246 5.37875L88.6763 13.8612L74.6904 1.27292H64.6967V3.81875H66.9284C68.5371 3.81875 68.6509 4.70709 68.6509 5.49792V17.485C68.6509 18.1783 68.6563 19.0829 67.665 19.0829H64.9242V21.6125H76.6459V19.0667H73.7859C72.6375 19.0667 72.5942 18.5412 72.5725 17.4254V7.23125L88.6763 21.5908H92.7767L92.56 5.3625C92.5817 4.18167 92.6629 3.78625 93.8763 3.78625H96.4384V1.24042H84.4729V3.8025Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>

            <div class="gap-div" :style="{ width: gap }"></div>

            <ul
              class="company_icons_list flex gap-x-10 sm:gap-x-15 md:gap-x-20 lg:gap-x-28 xl:gap-x-32 items-center whitespace-nowrap"
            >
              <li class="inline-block">
                <svg
                  class="w-8 h-9 md:w-12 md:h-14 xl:w-16 xl:h-19"
                  viewBox="0 0 64 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.6545 72C48.5712 75.9583 44.1128 75.3333 39.8212 73.4583C35.2795 71.5417 31.1128 71.4583 26.3212 73.4583C20.3212 76.0417 17.1545 75.2917 13.5712 72C-6.76218 51.0417 -3.76217 19.125 19.3212 17.9583C24.9462 18.25 28.8628 21.0417 32.1545 21.2917C37.0712 20.2917 41.7795 17.4167 47.0295 17.7917C53.3212 18.2917 58.0712 20.7917 61.1962 25.2917C48.1962 33.0833 51.2795 50.2083 63.1962 55C60.8212 61.25 57.7378 67.4583 52.6128 72.0417L52.6545 72ZM31.7378 17.7083C31.1128 8.41667 38.6545 0.75 47.3212 0C48.5295 10.75 37.5712 18.75 31.7378 17.7083Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-13 h-9 md:w-16 md:h-13 xl:w-20 xl:h-17"
                  viewBox="0 0 100 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.1711 67.3344C82.8179 67.3319 82.48 67.1906 82.2303 66.9408C81.9805 66.6911 81.8392 66.3531 81.8367 66V2.00313C81.8392 1.64999 81.9805 1.31201 82.2303 1.0623C82.48 0.812584 82.8179 0.671211 83.1711 0.668755H98.6336C98.8115 0.665021 98.9883 0.696731 99.1538 0.762038C99.3193 0.827346 99.4702 0.924943 99.5976 1.04914C99.725 1.17334 99.8264 1.32166 99.8959 1.48544C99.9653 1.64923 100.002 1.82521 100.002 2.00313V66C100.002 66.75 99.3836 67.35 98.6336 67.3344H83.1711ZM57.243 67.3344C57.243 67.3344 56.0055 66.9594 56.0055 66V26.7094C56.0434 25.4843 55.8334 24.2642 55.3879 23.1224C54.9424 21.9806 54.2707 20.9406 53.4131 20.0649C52.5555 19.1892 51.5298 18.496 50.3975 18.0267C49.2653 17.5575 48.0498 17.322 46.8242 17.3344H17.918C16.243 17.3344 16.6648 18.5875 16.6648 18.5875V66C16.6648 67.1219 15.4117 67.3344 15.4117 67.3344H1.36484C1.18696 67.3381 1.01012 67.3064 0.844616 67.2411C0.679115 67.1758 0.528269 67.0782 0.400871 66.954C0.273473 66.8298 0.172071 66.6815 0.102576 66.5177C0.0330815 66.3539 -0.00311598 66.1779 -0.00390625 66V2.00313C-0.00390625 1.25313 0.614844 0.65313 1.36484 0.668755H54.9617C59.6617 0.70413 64.1579 2.59242 67.4737 5.92347C70.7895 9.25453 72.6572 13.7593 72.6711 18.4594L72.7023 66.0031C72.7027 66.1785 72.6685 66.3522 72.6016 66.5143C72.5347 66.6763 72.4364 66.8236 72.3124 66.9476C72.1884 67.0716 72.0412 67.1699 71.8791 67.2368C71.717 67.3037 71.5433 67.3379 71.368 67.3375L57.243 67.3344ZM28.4992 67.3344C28.1669 67.3344 27.8481 67.2024 27.6131 66.9673C27.3781 66.7323 27.2461 66.4136 27.2461 66.0813V28.5813C27.2461 27.8969 27.8148 27.3281 28.4992 27.3281H44.2055C44.8898 27.3594 45.4086 27.9156 45.4086 28.5813V66.0813C45.4102 66.245 45.3795 66.4074 45.3181 66.5591C45.2566 66.7109 45.1658 66.849 45.0508 66.9655C44.9357 67.082 44.7988 67.1746 44.6478 67.2379C44.4968 67.3012 44.3348 67.334 44.1711 67.3344H28.4992Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-16 h-3 md:w-24 md:h-4 xl:w-32 xl:h-5"
                  viewBox="0 0 130 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M107.342 0.683415L107.591 15.2759H107.467L103.242 0.688833H96.2921V19.0622H100.885L100.636 3.97675H100.761L105.289 19.0622H111.935V0.688833L107.342 0.683415ZM19.8629 0.683415L16.3908 19.2518H21.4175L23.9633 2.36258H24.0879L26.5742 19.2518H31.5358L28.1233 0.688833L19.8629 0.683415ZM47.9267 0.683415L45.63 14.8426H45.5054L43.2088 0.688833H35.6417L35.2679 19.2518H39.9262L40.0508 2.55217H40.1104L43.2142 19.2518H47.9321L51.0358 2.55217H51.1604L51.285 19.2518H55.9433L55.51 0.688833L47.9267 0.683415ZM8.56917 13.9759C8.70536 14.4184 8.72587 14.8883 8.62875 15.3409C8.50417 15.9584 8.07083 16.5813 6.83042 16.5813C5.64958 16.5813 4.96708 15.8988 4.96708 14.9022V13.1038H0V14.5338C0 18.6938 3.28792 19.9342 6.77083 19.9342C10.1183 19.9342 12.9133 18.7534 13.3467 15.7093C13.5958 14.0951 13.4117 13.0443 13.3467 12.6705C12.48 8.75967 5.40042 7.63842 4.90208 5.46633C4.8411 5.13873 4.8411 4.80268 4.90208 4.47508C5.02667 3.85216 5.46542 3.22925 6.58125 3.22925C7.69708 3.22925 8.31458 3.91717 8.31458 4.90842V6.02425H12.9729V4.72425C12.9729 0.688833 9.31125 0.065918 6.70583 0.065918C3.4125 0.065918 0.6825 1.18175 0.184167 4.16634C0.02115 4.98783 0.0433554 5.83533 0.249167 6.64716C0.99125 10.493 7.6375 11.6143 8.56917 13.9705M68.9758 13.9705C69.16 14.4038 69.095 14.9672 69.0354 15.3409C68.9108 15.9584 68.4775 16.5813 67.2371 16.5813C66.0563 16.5813 65.3737 15.8988 65.3737 14.9022V13.1038H60.4067V14.5338C60.4067 18.6288 63.635 19.8692 67.1125 19.8692C70.4654 19.8692 73.1954 18.7534 73.6288 15.6497C73.8779 14.0355 73.6937 13.0443 73.6288 12.6055C72.8867 8.75967 65.8667 7.57883 65.3737 5.46633C65.3128 5.13873 65.3128 4.80268 65.3737 4.47508C65.4983 3.85216 65.9317 3.22925 67.0529 3.22925C68.1037 3.22925 68.7862 3.91717 68.7862 4.90842V6.02425H73.3796V4.72425C73.3796 0.688833 69.7775 0.065918 67.1721 0.065918C63.8842 0.065918 61.2137 1.12217 60.7154 4.16634C60.5908 4.97342 60.5908 5.7155 60.7804 6.64716C61.5225 10.493 68.0387 11.5492 68.9758 13.9705ZM84.6192 16.4568C85.9192 16.4568 86.2983 15.5901 86.4175 15.0917C86.4825 14.9022 86.4825 14.5934 86.4825 14.4093V0.683415H91.195V14.0301C91.195 14.4038 91.195 15.0863 91.1408 15.2759C90.8267 18.748 88.0967 19.8638 84.6787 19.8638C81.2663 19.8638 78.5362 18.748 78.2221 15.2705C78.2221 15.0863 78.1625 14.4038 78.1625 14.0301V0.683415H82.875V14.4038C82.875 14.653 82.875 14.8968 82.94 15.0863C82.94 15.5793 83.3192 16.4513 84.6192 16.4513M123.359 16.2672C124.724 16.2672 125.157 15.4005 125.282 14.8968C125.342 14.7126 125.342 14.4038 125.342 14.2143V11.5438H123.419V8.81384H130V13.7809C130 14.1547 130 14.4038 129.94 15.0268C129.626 18.4393 126.707 19.6147 123.419 19.6147C120.131 19.6147 117.211 18.4393 116.903 15.0213C116.838 14.4038 116.837 14.1547 116.837 13.7809V5.95925C116.837 5.6505 116.903 5.02758 116.903 4.71342C117.336 1.24133 120.131 0.1255 123.419 0.1255C126.707 0.1255 129.567 1.24133 129.935 4.71883C130 5.27675 130 5.95925 130 5.95925V6.58217H125.342V5.52592C125.342 5.52592 125.342 5.09259 125.282 4.84342C125.217 4.41009 124.849 3.47841 123.419 3.47841C122.054 3.47841 121.685 4.34509 121.555 4.84342C121.496 5.08717 121.496 5.40133 121.496 5.71008V14.2143C121.496 14.4634 121.496 14.7126 121.555 14.8968C121.555 15.3951 122.054 16.2672 123.359 16.2672Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-20 h-30 md:w-26 md:h-26 xl:w-32 xl:h-32"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3323 66.1416C18.3323 69.4261 15.7069 72.0537 12.4252 72.0537C9.14346 72.0537 6.51809 69.4261 6.51809 66.1416C6.51809 62.8571 9.14346 60.2295 12.4252 60.2295H18.3323V66.1416ZM24.8957 41.8364H18.3323V53.792H12.4252C5.59922 53.792 0.0859375 59.3099 0.0859375 66.1416C0.0859375 72.9733 5.59922 78.4913 12.4252 78.4913C19.2511 78.4913 24.7644 72.9733 24.7644 66.1416V53.792L24.8957 41.8364Z"
                    fill="white"
                  />
                  <path
                    d="M90.1377 72.0532C93.4194 72.0532 96.0447 69.4257 96.0447 66.1412C96.0447 62.8567 93.4194 60.2291 90.1377 60.2291C86.8559 60.2291 84.2306 62.8567 84.2306 66.1412C84.3618 69.4257 86.9872 72.0532 90.1377 72.0532ZM77.9297 66.1412C77.9297 59.3094 83.443 53.7915 90.2689 53.7915C97.0949 53.7915 102.608 59.3094 102.608 66.1412C102.608 72.9729 97.0949 78.4908 90.2689 78.4908C83.443 78.4908 77.9297 72.9729 77.9297 66.1412Z"
                    fill="white"
                  />
                  <path
                    d="M123.218 66.1412C123.218 62.9881 120.593 60.3605 117.442 60.3605C114.292 60.3605 111.667 62.9881 111.667 66.1412V77.9653H105.234V66.1412C105.234 59.3094 110.748 53.7915 117.574 53.7915C124.4 53.7915 129.913 59.3094 129.913 66.1412V77.9653H123.481C123.218 77.9653 123.218 67.7177 123.218 66.1412Z"
                    fill="white"
                  />
                  <path
                    d="M62.837 61.937C61.9181 61.2801 62.1806 60.229 63.7558 59.8349C65.7249 59.3094 69.1378 59.7035 72.0257 61.0173L75.0449 56.8132C73.7322 55.7621 70.8443 54.317 66.6437 54.0542C66.6437 54.0542 59.5552 53.1346 56.6673 58.5211C56.6673 58.5211 54.1732 63.5135 59.1614 66.6666C62.1806 68.5059 67.4314 69.2942 69.1378 70.0825C70.4505 70.8708 70.0567 72.316 68.0877 72.7101C64.6747 73.4984 60.2116 71.5277 58.7676 70.4766L55.6172 74.8122C57.7175 76.3887 60.3429 77.8339 64.5434 78.4908C64.5434 78.4908 71.2381 79.6732 74.9137 75.0749C75.57 74.2866 78.5892 68.6373 72.5508 65.3528C69.4004 63.6449 64.4122 62.8566 62.837 61.937Z"
                    fill="white"
                  />
                  <path
                    d="M32.6444 82.6953C32.9069 82.8267 35.9261 84.9288 38.814 84.9288C45.9025 85.0602 46.2963 77.7029 46.2963 75.995C44.9836 77.4402 42.227 78.3598 40.5205 78.3598C33.6945 78.3598 28.3125 73.1046 28.3125 66.2729V54.3174H34.7447V66.2729C34.7447 69.426 37.37 72.0536 40.5205 72.0536C43.6709 72.0536 46.2963 69.426 46.2963 66.2729V54.3174H52.7284V66.2729C52.7284 76.9146 53.2535 87.8191 42.8833 90.3153C35.1385 92.1546 29.6252 87.2936 29.2314 87.0308L32.6444 82.6953Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-10 h-10 md:w-15 md:h-15 xl:w-21 xl:h-21"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.0027 30.4794C54.1152 42.7544 62.6527 57.146 69.786 73.0502C62.154 79.8992 52.2572 83.681 42.0027 83.6669C31.7481 83.681 21.8513 79.8992 14.2193 73.0502C21.3527 57.146 29.886 42.7544 42.0027 30.4794ZM14.9568 10.3044C22.4561 14.3435 29.4887 19.1949 35.9277 24.771C23.9027 36.996 15.261 51.0794 8.14849 66.296C3.05544 59.2199 0.321817 50.7187 0.335992 42.0002C0.32988 35.973 1.63432 30.0165 4.15893 24.5436C6.68354 19.0706 10.3679 14.212 14.9568 10.3044ZM69.0485 10.3044C73.6374 14.212 77.3218 19.0706 79.8464 24.5436C82.371 30.0165 83.6754 35.973 83.6693 42.0002C83.6693 51.0669 80.7735 59.4585 75.8568 66.2919C68.7443 51.0794 60.1027 37.0002 48.0777 24.771C54.5167 19.195 61.5492 14.3436 69.0485 10.3044ZM42.0027 0.333541C48.9818 0.333541 55.561 2.05021 61.3402 5.08354C54.4579 9.08862 47.9816 13.7536 42.0027 19.0127C36.0237 13.7537 29.5474 9.08866 22.6652 5.08354C28.6298 1.95388 35.2668 0.32359 42.0027 0.333541Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li class="inline-block">
                <svg
                  class="w-16 h-3 md:w-24 md:h-4 xl:w-32 xl:h-6"
                  width="130"
                  height="23"
                  viewBox="0 0 130 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.3125 0C51.3013 0 55.2934 1.24584 58.3429 4.01917C60.4284 5.90959 61.5929 8.60167 61.5604 11.4238C61.5553 12.8166 61.2675 14.1939 60.7144 15.4723C60.1614 16.7506 59.3546 17.9034 58.3429 18.8608C55.4884 21.4825 51.0413 22.88 46.3179 22.88C41.5946 22.88 37.2179 21.4825 34.32 18.8608C33.273 17.9288 32.4392 16.7821 31.8755 15.4986C31.3119 14.2152 31.0316 12.8253 31.0538 11.4238C31.0538 8.61792 32.2346 5.92584 34.32 4.01917C37.0283 1.56 41.8167 0 46.3125 0ZM46.3288 19.8792C48.8259 19.8792 51.1388 19.0071 52.7638 17.3983C54.3888 15.7733 55.1092 13.8233 55.1092 11.4238C55.1092 9.12708 54.3075 6.97667 52.7638 5.44917C51.1713 3.87834 48.7934 2.99 46.3288 2.99C43.8642 2.99 41.4917 3.87292 39.8829 5.44917C38.3392 6.97667 37.5321 9.12708 37.5321 11.4238C37.4991 13.647 38.3438 15.7937 39.8829 17.3983C41.4917 18.9908 43.8534 19.8792 46.3288 19.8792ZM20.1067 9.21917C20.9733 9.43945 21.8147 9.73375 22.6308 10.1021C23.3873 10.4519 24.0809 10.9241 24.6838 11.4996C25.7508 12.6154 26.3575 14.1104 26.3413 15.6542C26.3529 16.4683 26.1732 17.2737 25.8166 18.0057C25.46 18.7377 24.9366 19.3757 24.2883 19.8683C23.1394 20.7358 21.8362 21.3773 20.4479 21.7588C18.357 22.4173 16.1721 22.7284 13.9804 22.6796C12.0738 22.6796 11.0229 22.4575 9.57668 22.1542L9.1596 22.0675C7.56574 21.7157 6.00941 21.2114 4.5121 20.5617C4.44514 20.5163 4.36542 20.4935 4.2846 20.4967C4.16581 20.4995 4.05284 20.5487 3.96984 20.6337C3.88684 20.7187 3.8404 20.8328 3.84043 20.9517V22.0512H0.65543V14.0454H3.49376C3.51253 14.8568 3.77071 15.6445 4.23585 16.3096C5.38418 17.7179 6.61918 18.2596 7.7946 18.6929C9.78251 19.3429 11.8679 19.6896 13.9479 19.7546C16.9433 19.7546 18.6929 19.0288 19.0721 18.8717L19.1208 18.85L19.1533 18.8392C19.4892 18.7146 20.8433 18.2217 20.8433 16.7158C20.8433 15.2317 19.5758 14.9067 18.7471 14.6954L18.6279 14.6683C17.7071 14.4192 15.5838 14.1917 13.2654 13.9479L12.4421 13.8612C10.2682 13.6388 8.10493 13.3226 5.95835 12.9133C3.26085 12.3175 2.19918 11.3317 1.53835 10.7196L1.49501 10.6763C0.531674 9.64908 -0.00308058 8.29282 1.33508e-05 6.88459C1.33508e-05 4.19792 1.84168 2.57292 4.10585 1.57625C6.56897 0.524716 9.2223 -0.00816005 11.9004 0.0108377C16.3421 0.0270877 19.955 1.47334 21.255 2.145C21.7804 2.42667 22.0404 2.08 22.0404 1.82V1.01292H24.895V7.98959H22.3383C22.111 6.9534 21.5519 6.01965 20.7458 5.33C20.2553 4.93641 19.7142 4.61032 19.1371 4.36042C16.9947 3.4534 14.6871 3.00149 12.3608 3.03334C9.96126 3.03334 7.6646 3.49375 6.51085 4.19792C5.79224 4.6457 5.43112 5.1982 5.42751 5.85542C5.42751 6.7925 6.21835 7.16625 6.61918 7.28C7.68085 7.605 10.0425 7.83792 11.8788 8.02209L12.9838 8.13584C14.755 8.31459 18.4654 8.8075 20.1067 9.21917ZM118.511 3.81875V1.22417H130V3.77H127.422C126.49 3.77 126.111 3.94875 125.407 4.73958L117.677 13.5688C117.597 13.6778 117.56 13.8131 117.574 13.9479V17.9671C117.586 18.1541 117.608 18.3403 117.639 18.525C117.685 18.6428 117.758 18.7482 117.852 18.8329C117.946 18.9175 118.059 18.979 118.181 19.0125C118.414 19.0459 118.649 19.064 118.885 19.0667H121.518V21.6125H107.575V19.0667H110.067C110.302 19.064 110.538 19.0459 110.771 19.0125C110.895 18.9782 111.01 18.9167 111.108 18.8324C111.205 18.748 111.282 18.643 111.334 18.525C111.359 18.3454 111.376 18.1646 111.383 17.9833V13.9642C111.383 13.8287 111.383 13.8288 111.204 13.6175L103.561 4.94C103.15 4.51209 102.445 3.82417 101.362 3.82417H98.8813V1.27833H112.9V3.82417H111.21C110.83 3.82417 110.57 4.20333 110.895 4.615L115.657 10.3079C115.705 10.3729 115.738 10.3729 115.803 10.3242C115.868 10.2754 120.645 4.66375 120.678 4.615C120.718 4.56346 120.747 4.5044 120.764 4.4413C120.781 4.3782 120.785 4.31236 120.776 4.24769C120.767 4.18302 120.745 4.12084 120.711 4.06483C120.678 4.00883 120.633 3.96015 120.58 3.92167C120.485 3.8552 120.371 3.82102 120.255 3.82417L118.511 3.81875ZM84.4729 3.8025H87.1C88.2971 3.8025 88.5084 4.26292 88.5246 5.37875L88.6763 13.8612L74.6904 1.27292H64.6967V3.81875H66.9284C68.5371 3.81875 68.6509 4.70709 68.6509 5.49792V17.485C68.6509 18.1783 68.6563 19.0829 67.665 19.0829H64.9242V21.6125H76.6459V19.0667H73.7859C72.6375 19.0667 72.5942 18.5412 72.5725 17.4254V7.23125L88.6763 21.5908H92.7767L92.56 5.3625C92.5817 4.18167 92.6629 3.78625 93.8763 3.78625H96.4384V1.24042H84.4729V3.8025Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </section>

        <!-- request -->
        <section class="mx-5 mt-7 xl:mt-15 pt-1" id="contacts">
          <h2 class="text-2xl xl:text-[3.125rem] text-white font-medium text-center">
            Оставь заявку и мы быстро <br />с вами свяжемся
          </h2>
          <p
            class="text-base xl:text-2xl text-white/70 font-normal text-center mt-6 xl:mt-9 px-13 xl:px-0 z-10"
          >
            Поможем с
            <span class="text-white">оформлением заказа</span> и ответим на
            <span class="text-white">все вопросы</span>
          </p>
          <div class="relative mt-8 xl:mt-10">
            <div
              class="absolute block top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] rounded-full bg-linear-to-r from-[#D1E3FF]/10 via-[#D1E3FF] to-[#D1E3FF]/10 [box-shadow:0px_0px_63.4px_2px_#2171f1] after:absolute after:block after:left-1/2 after:-translate-x-1/2 after:-top-4 after:rounded-[50%] after:h-[90px] after:w-[70%] after:bg-[#0075FF] after:filter after:blur-[40px] after:-z-10"
            ></div>
            <div
              class="h-fit p-6 xl:p-11 text-center relative z-0 before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 before:opacity-25 before:rounded-[1.25rem] xl:before:rounded-[1.875rem] before:shadow-[inset_0px_0px_5px_white] before:bg-[linear-gradient(135deg,_#002e5c_15%,_#13171c_40%)] before:z-10"
            >
              <form class="xl:w-[49.15%] md:w-1/2 flex mx-auto flex-col gap-y-4 relative z-20">
                <input
                  class="h-14 xl:h-16 py-5 px-6 bg-[#C7E3FF]/20 border-none rounded-xl outline-hidden text-lg xl:text-2xl text-white placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white/30"
                  type="text"
                  placeholder="Имя"
                  required
                />
                <input
                  class="h-14 xl:h-16 py-5 px-6 bg-[#C7E3FF]/20 border-none rounded-xl outline-hidden text-lg xl:text-2xl text-white placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white/30"
                  type="tel"
                  placeholder="Номер телефона"
                  required
                />
                <input
                  class="h-14 xl:h-16 py-5 px-6 bg-[#C7E3FF]/20 border-none rounded-xl outline-hidden text-lg xl:text-2xl text-white placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white/30"
                  type="email"
                  placeholder="Почта"
                  required
                />
              </form>
              <button
                class="relative z-20 mt-5 xl:mt-9 w-full xl:w-[49.15%] md:w-1/2 h-17 xl:h-19 border border-solid border-[#a0ccff] rounded-xl bg-[#0069e5] text-lg xl:text-[1.75rem] text-white font-normal shadow-[inset_0px_0px_20px_rgba(255,255,255,0.4)]"
                type="submit"
              >
                Отправить
              </button>
            </div>
            <p class="mt-4 text-center text-sm text-white">Связаться самостоятельно</p>
            <a class="block text-center text-sm text-white underline" href="tel:89255990016"
              >8-925-599-00-16</a
            >
          </div>
        </section>
      </main>

      <footer>
        <TheFooter />
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
