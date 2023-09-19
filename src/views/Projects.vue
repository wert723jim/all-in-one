<template>
  <section class="section min-h-screen bg-[#f6f7f8]">
    <div class="container">
      <h1 class="text-6xl font-semibold">作品集</h1>
      <div class="my-5">
        <div class="project-card bg-white w-full shadow-md cursor-pointer hover:shadow-xl ease-out duration-300 md:flex">
          <div class="w-full md:w-[280px]">
            <div class="pb-[56%] relative md:pb-[70%]">
              <img class="h-full w-full object-cover absolute top-0 left-0" src="../assets/world-weather-app.png" alt="">
            </div>
          </div>
          <div class="flex-1 text-left p-5">
            <div class="mb-2">
              <span class="inline-block rounded-2xl text-xs bg-black text-white px-2 py-1 leading-none mr-1">Vue3</span>
              <span class="inline-block rounded-2xl text-xs bg-black text-white px-2 py-1 leading-none mr-1">TailwindCSS</span>
            </div>
            <h2 class="text-2xl">World Weather App</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>