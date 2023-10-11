<template>
  <section class="section min-h-screen bg-[#f6f7f8] dark:bg-black dark:text-white">
    <div class=" mx-auto lg:grid lg:grid-cols-6 lg:grid-rows-2 gap-x-5">
      <div class="text-center max-w-[500px] mx-auto lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 ">
        <div class="mb-5">
          <img src="../assets/5404.jpg" alt="" class="w-32 h-32 rounded-lg object-cover mx-auto">
        </div>
        <div class="flex flex-col mb-5">
          <span class="text-4xl">曾俊凱</span>
          <span>CHUN-KAI TSENG</span>
        </div>
        <div class="text-sm flex flex-col mb-5">
          <span>FrontEnd Developer</span>
          <span>台灣台北</span>
        </div>
        <div>
          <p class="text-left">於2022年11月結束AlphaCamp的課程，目前擅長的是網頁前端的部分，喜歡從解決問題中獲得新的知識以及成就感，希望未來可以多方嘗試，將程式語言能力應用在各個領域上。</p>
        </div>
      </div>
      <div class="lg:col-start-3 lg:col-end-7 lg:row-start-1 lg:row-end-2">
        <h2 class="text-4xl font-bold my-3">技能</h2>
        <div class="sm:grid sm:grid-cols-3 sm:gap-5">
          <div class="border-t border-black dark:border-white">
            <h3 class="text-2xl font-semibold my-1">
              網頁前端程式設計
            </h3>
            <p class="my-2">
              運用HTML、CSS、Javascript，製作動態網頁，從網頁切版、RWD、操作 DOM 事件、串接 API ，並能使用前端框架、CSS框架來開發網頁。
            </p>
          </div>
          <div class="border-t border-black dark:border-white">
            <h3 class="text-2xl font-semibold my-1">語言</h3>
            <ul class="my-2">
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">HTML</li>
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">CSS</li>
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">JavaScript</li>
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">TypeScript</li>
            </ul>
          </div>
          <div class="border-t border-black dark:border-white">
            <h3 class="text-2xl font-semibold my-1">框架</h3>
            <span class="text-xl">JavaScript</span>
            <ul class="my-2">
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">Vue2</li>
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">Vue3</li>
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">Nuxt3</li>
            </ul>
            <span class="text-xl">CSS</span>
            <ul class="my-2">
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">Sass</li>
              <li class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase mb-1 last:mr-0 mr-4">TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lg:col-start-3 lg:col-end-7 lg:row-start-2 lg:row-end-3">
        <h2 class="text-4xl font-bold my-3">經驗</h2>
        <div class="lg:flex lg:gap-5">
          <div class="border-t border-black dark:border-white flex-1">
            <h3 class="text-2xl font-semibold mt-1">Alpha Camp</h3>
            <div class="flex flex-col text-[#666] text-sm">
              <span>Alpha Camp</span>
              <span>04/2022 - 11/2022</span>
            </div>
            <p class="my-2">
              網路基本概念、node.js的使用、後端資料庫、npm 套件使用、javascript語言、html、css的切版，前端框架Vue、非同步概念。
            </p>
          </div>
          <div class="border-t border-black dark:border-white flex-1">
            <h3 class="text-2xl font-semibold mt-1">軟體工程師</h3>
            <div class="flex flex-col text-[#666] text-sm">
              <span>凱衛資訊股份有限公司</span>
              <span>10/2021 - 04/2022</span>
            </div>
            <p class="my-2">
              使用 Oracle 以及 Powerbuilder 進行軟體前端、後端程式編寫，負責各項專案功能的維護以及開發證券帳務邏輯。
            </p>
          </div>
          <div class="border-t border-black dark:border-white flex-1">
            <h3 class="text-2xl font-semibold mt-1">圖資辨識人員</h3>
            <div class="flex flex-col text-[#666] text-sm">
              <span>創意引晴股份有限公司</span>
              <span>03/2020 - 11/2020</span>
            </div>
            <p class="my-2">
              幫助AI辨識圖資以建立大數據資料庫，給予公司辨識功能與辨識軟體使用上的反饋與建議。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>