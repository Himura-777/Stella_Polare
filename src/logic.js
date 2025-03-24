import { computed, onMounted, onUnmounted, ref } from 'vue'

// header showMenu
export function useMenu() {
  const isMenuOpen = ref(false)

  // Открытие и закрытие меню
  const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  // Функция для прокрутки до элемента и закрытия меню
  const scrollToAndCloseMenu = (target) => {
    const element = document.querySelector(target)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Сдвигаем, чтобы учитывать высоту шапки
        behavior: 'smooth',
      })
    }
    isMenuOpen.value = false // Закрываем меню после клика
  }

  return {
    isMenuOpen,
    openMenu,
    scrollToAndCloseMenu,
  }
}

// header selectedItem
export function useNavigation() {
  const menuItems = [
    { id: 1, label: 'О компании', href: '#philosophy' },
    { id: 2, label: 'Товары', href: '#products' },
    { id: 3, label: 'Отзывы', href: '#feedbacks' },
  ]

  const activeItem = ref(menuItems[0].id)
  const setActive = (id) => {
    activeItem.value = id // Устанавливаем активный элемент
  }

  return {
    activeItem,
    menuItems,
    setActive,
  }
}

// feedback
export function userFeedbacks() {
  const feedbackItems = ref([
    {
      name: 'Юлия Юрьевна',
      feedback:
        'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
    },
    {
      name: 'Юлия Юрьевна',
      feedback:
        'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
    },
    {
      name: 'Юлия Юрьевна',
      feedback:
        'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
    },
    {
      name: 'Юлия Юрьевна',
      feedback:
        'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
    },
    {
      name: 'Юлия Юрьевна',
      feedback:
        'Очень довольна покупкой. Порадовала быстрая доставка, все идеально упаковано, очень приятные менеджеры проконсультировали по всем вопросам. Кстати цены у ребят очень приемлемые.',
    },
  ])

  function getItemClass(index) {
    return index % 2 === 0 ? 'feedbacks_item__even' : 'feedbacks_item__odd'
  }

  return {
    feedbackItems,
    getItemClass,
  }
}

// questions
export function useQuestions() {
  const activeIndex = ref(null) // Индекс активного вопроса
  const questions = ref([
    {
      title: 'Где заказывать товары?',
      content: 'Ответ на первый вопрос...',
    },
    {
      title: 'Как добраться до магазина?',
      content: 'Ответ на второй вопрос...',
    },
    {
      title: 'Как узнать какие товары сейчас есть в наличии?',
      content: 'Ответ на третий вопрос...',
    },
    {
      title: 'Как работает гарантия?',
      content: 'Ответ на четвертый вопрос...',
    },
    {
      title: 'Есть ли какие-то скидки?',
      content: 'Ответ на пятый вопрос...',
    },
  ])

  function toggleQuestion(index) {
    // Если кликнули на текущий активный элемент, то закрыть его
    activeIndex.value = activeIndex.value === index ? null : index
  }

  return {
    activeIndex,
    questions,
    toggleQuestion,
  }
}

export function useGap() {
  const gap = ref('40px')

  const updateGap = () => {
    gap.value = window.innerWidth < 1280 ? '40px' : '131px'
    document.documentElement.style.setProperty('--gap', gap.value)
  }

  onMounted(() => {
    updateGap()
    window.addEventListener('resize', updateGap)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateGap)
  })

  return { gap }
}

// hits
export function useCarousel() {
  const items = [
    {
      content: `
      <div class="w-full h-126 pt-15 rounded-xl flex flex-col items-center justify-start xl:justify-center gap-y-7 md:gap-y-8 xl:gap-y-10 bg-black xl:bg-[url(../images/Iphone_hits.png)] bg-no-repeat bg-bottom xl:bg-[right_6rem_center] bg-[length:280px_248px] xl:bg-[length:456px_405px]">
        <div class="xl:ml-[10.17%] flex gap-x-5 justify-center xl:items-center ">
                  <svg class="w-6 md:w-8 xl:w-10 h-7 md:h-9 xl:h-11"
                    viewBox="0 0 40 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_5_241)">
                      <path
                        d="M31.3285 41.3952C29.1316 43.506 26.733 43.1727 24.4241 42.1728C21.9806 41.1507 19.7389 41.1063 17.161 42.1728C13.9329 43.5504 12.2292 43.1505 10.3014 41.3952C-0.638101 30.2188 0.975923 13.1987 13.3949 12.5766C16.4212 12.7321 18.5284 14.2208 20.2994 14.3541C22.9446 13.8209 25.4777 12.2877 28.3022 12.4877C31.6872 12.7543 34.2427 14.0875 35.924 16.4872C28.9299 20.6422 30.5887 29.7744 37 32.3296C35.7222 35.6625 34.0634 38.9732 31.3061 41.4174L31.3285 41.3952ZM20.0752 12.4433C19.7389 7.48832 23.7964 3.39995 28.4591 3C29.1092 8.73261 23.2136 12.9987 20.0752 12.4433Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_5_241"
                        x="0.274074"
                        y="0.274074"
                        width="39.4519"
                        height="45.4519"
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
                          result="effect1_dropShadow_5_241"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_5_241"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <span class="text-3xl md:text-4xl font-medium text-white">iPhone 16 Pro</span>
                </div>
                <a class="xl:ml-[10.17%]" href="https://t.me/stellapolare07">
                  <button
                    class="border-none rounded-full w-38 py-3 text-xl font-medium text-[#13171c] bg-white"
                    type="button"
                  >
                    Купить
                  </button>
                </a>
                <img src="src/images/Iphone_hits.png" class="xl:hidden w-70 h-62">
                </div>
      `,
    },
    {
      content: `
      <div class="w-full h-126 pt-15 rounded-xl flex flex-col items-center justify-start xl:justify-center gap-y-7 md:gap-y-8 xl:gap-y-10 bg-linear-to-l from-[#8D3367] to-[#2A1A3E] before:absolute before:block before:w-full before:h-full before:left-0 before:top-0 before:bg-[url(../images/Dyson_hits.png)] before:bg-no-repeat before:bg-right-bottom before:bg-[length:410px_320px] before:rounded-xl">
        <div class="xl:ml-[10.17%] flex flex-col gap-y-5 z-10 items-center">
                  <svg class="hidden md:block"
                    width="130"
                    height="49"
                    viewBox="0 0 130 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_16_1500)">
                      <path
                        d="M18.3323 24.1416C18.3323 27.4261 15.7069 30.0537 12.4252 30.0537C9.14346 30.0537 6.51809 27.4261 6.51809 24.1416C6.51809 20.8571 9.14346 18.2295 12.4252 18.2295H18.3323V24.1416ZM24.8957 -0.163574H18.3323V11.792H12.4252C5.59922 11.792 0.0859375 17.3099 0.0859375 24.1416C0.0859375 30.9733 5.59922 36.4913 12.4252 36.4913C19.2511 36.4913 24.7644 30.9733 24.7644 24.1416V11.792L24.8957 -0.163574Z"
                        fill="white"
                      />
                      <path
                        d="M90.1377 30.0532C93.4194 30.0532 96.0447 27.4257 96.0447 24.1412C96.0447 20.8567 93.4194 18.2291 90.1377 18.2291C86.8559 18.2291 84.2306 20.8567 84.2306 24.1412C84.3618 27.4257 86.9872 30.0532 90.1377 30.0532ZM77.9297 24.1412C77.9297 17.3094 83.443 11.7915 90.2689 11.7915C97.0949 11.7915 102.608 17.3094 102.608 24.1412C102.608 30.9729 97.0949 36.4908 90.2689 36.4908C83.443 36.4908 77.9297 30.9729 77.9297 24.1412Z"
                        fill="white"
                      />
                      <path
                        d="M123.218 24.1412C123.218 20.9881 120.593 18.3605 117.442 18.3605C114.292 18.3605 111.667 20.9881 111.667 24.1412V35.9653H105.234V24.1412C105.234 17.3094 110.748 11.7915 117.574 11.7915C124.4 11.7915 129.913 17.3094 129.913 24.1412V35.9653H123.481C123.218 35.9653 123.218 25.7177 123.218 24.1412Z"
                        fill="white"
                      />
                      <path
                        d="M62.837 19.937C61.9181 19.2801 62.1806 18.229 63.7558 17.8349C65.7249 17.3094 69.1378 17.7035 72.0257 19.0173L75.0449 14.8132C73.7322 13.7621 70.8443 12.317 66.6437 12.0542C66.6437 12.0542 59.5552 11.1346 56.6673 16.5211C56.6673 16.5211 54.1732 21.5135 59.1614 24.6666C62.1806 26.5059 67.4314 27.2942 69.1378 28.0825C70.4505 28.8708 70.0567 30.316 68.0877 30.7101C64.6747 31.4984 60.2116 29.5277 58.7676 28.4766L55.6172 32.8122C57.7175 34.3887 60.3429 35.8339 64.5434 36.4908C64.5434 36.4908 71.2381 37.6732 74.9137 33.0749C75.57 32.2866 78.5892 26.6373 72.5508 23.3528C69.4004 21.6449 64.4122 20.8566 62.837 19.937Z"
                        fill="white"
                      />
                      <path
                        d="M32.6444 40.6953C32.9069 40.8267 35.9261 42.9288 38.814 42.9288C45.9025 43.0602 46.2963 35.7029 46.2963 33.995C44.9836 35.4402 42.227 36.3598 40.5205 36.3598C33.6945 36.3598 28.3125 31.1046 28.3125 24.2729V12.3174H34.7447V24.2729C34.7447 27.426 37.37 30.0536 40.5205 30.0536C43.6709 30.0536 46.2963 27.426 46.2963 24.2729V12.3174H52.7284V24.2729C52.7284 34.9146 53.2535 45.8191 42.8833 48.3153C35.1385 50.1546 29.6252 45.2936 29.2314 45.0308L32.6444 40.6953Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_16_1500">
                        <rect width="130" height="49" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span class="text-3xl md:text-4xl font-medium text-white text-center md:text-start w-2/3">Горячие новинки Dyson</span>
                </div>
                <a class="xl:ml-[10.17%]" href="https://t.me/stellapolare07">
                  <button
                    class="border-none rounded-full w-38 py-3 text-xl font-medium text-[#13171c] bg-white"
                    type="button"
                  >
                    Смотреть
                  </button>
                </a>
                </div>
      `,
    },
    {
      content: `
      <div class="w-full h-126 pt-15 rounded-xl flex flex-col items-center justify-start xl:justify-center gap-y-7 md:gap-y-8 xl:gap-y-10 bg-white xl:bg-[url(../images/Macbook_hits.png)] bg-no-repeat bg-[right_7rem_center] bg-contain before:absolute before:block before:w-full before:h-[95%] before:left-0 before:top-0 xl:before:hidden before:bg-[url(../images/Macbook_hits_v.png)] before:bg-no-repeat before:bg-contain before:bg-bottom before:rounded-xl">
        <div class="xl:ml-[10.17%] flex gap-x-5 justify-center xl:items-center ">
                  <svg class="w-6 md:w-8 xl:w-10 h-7 md:h-9 xl:h-11"
                    viewBox="0 0 40 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_16_1549)">
                      <path
                        d="M31.3285 41.3952C29.1316 43.506 26.733 43.1727 24.4241 42.1728C21.9806 41.1507 19.7389 41.1063 17.161 42.1728C13.9329 43.5504 12.2292 43.1505 10.3014 41.3952C-0.6381 30.2188 0.975923 13.1987 13.3949 12.5766C16.4212 12.7321 18.5284 14.2208 20.2994 14.3541C22.9446 13.8209 25.4777 12.2877 28.3022 12.4877C31.6872 12.7543 34.2427 14.0875 35.924 16.4872C28.9299 20.6422 30.5887 29.7744 37 32.3296C35.7222 35.6625 34.0634 38.9732 31.3061 41.4174L31.3285 41.3952ZM20.0752 12.4433C19.7389 7.48832 23.7964 3.39995 28.4591 3C29.1092 8.73261 23.2136 12.9987 20.0752 12.4433Z"
                        fill="#090C11"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_16_1549"
                        x="0.274074"
                        y="0.274074"
                        width="39.4519"
                        height="45.4519"
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
                          result="effect1_dropShadow_16_1549"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_16_1549"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <span class="text-3xl md:text-4xl font-medium text-[#090C11]">MacBook Air M3</span>
                </div>
                <a class="xl:ml-[10.17%] z-10" href="https://t.me/stellapolare07">
                  <button
                    class="border-none rounded-full w-38 py-3 text-xl font-medium text-white bg-[#006BEA]"
                    type="button"
                  >
                    Купить
                  </button>
                </a>
                </div>
      `,
    },
    {
      content: `
      <div class="w-full h-126 pt-15 rounded-xl flex flex-col items-center justify-start xl:justify-center gap-y-7 md:gap-y-8 xl:gap-y-10 bg-[url(../images/Xiaomi_hits_m.png)] xl:bg-[url(../images/Xiaomi_hits.png)] bg-center bg-cover bg-no-repeat"
       style="background-position: -80px center;">
        <div class="xl:ml-[10.17%]">
                  <span class="block text-[#090C11] font-medium text-3xl md:text-4xl text-center"
                    >Зима в уюте</span
                  >
                  <p class="block mt-4 text-xl md:text-2xl text-[#090C11]/60  text-center">
                    С Xiaomi Mi Smart Kettle Pro
                  </p>
                </div>
                <a class="xl:ml-[10.17%]" href="https://t.me/stellapolare07">
                  <button
                    class="border-none rounded-full w-38 py-3 text-xl font-medium text-[#090C11] bg-white"
                    type="button"
                  >
                    Заказать
                  </button>
                </a>
                </div>
      `,
    },
  ]

  const currentIndex = ref(0)

  function showPrev() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  function showNext() {
    if (currentIndex.value < items.length - 1) {
      currentIndex.value++
    }
  }

  const transformStyle = computed(() => `translateX(-${currentIndex.value * 100}%)`)

  return {
    items,
    currentIndex,
    showPrev,
    showNext,
    transformStyle,
  }
}

// products
