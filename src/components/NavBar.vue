<template>
  <nav class="fixed left-0 right-0 top-0 border-b-2">
    <div class="mx-auto lg:max-w-[800px] lg:flex">
      <div class="navbar-brand flex">
        <div class="flex items-center text-2xl font-semibold px-4 py-2">
          <a href="/">Jim</a>
        </div>
        <div @click="toggleMenu" class="navbar-burger flex-1 flex justify-end lg:hidden">
          <div class="flex items-center justify-center w-14 cursor-pointer">
            <span class="block h-px w-4 bg-black relative before:absolute before:h-px before:w-4 before:bg-black before:block before:top-1 after:absolute after:h-px after:w-4 after:bg-black after:block after:bottom-1"></span>
          </div>
        </div>
      </div>
      <div :class="{hidden: !isActive}" class="navbar-menu bg-white absolute top-[50px] w-full lg:static lg:flex">
        <div class="flex flex-col lg:flex-row lg:flex-1">
          <a class="flex items-center px-4 py-2 justify-center" href="/">文章列表</a>
          <a class="flex items-center px-4 py-2 justify-center" href="/">分類</a>
          <a class="flex items-center px-4 py-2 justify-center" href="/">關於我</a>
        </div>
        <div class="flex justify-center min-h-[40px]">
          <a class="flex items-center px-4 py-2 justify-center" href="/">
            <i class="fa-brands fa-facebook fa-xl"></i>
          </a>
          <a class="flex items-center px-4 py-2 justify-center" href="/">
            <i class="fa-brands fa-github fa-xl"></i>
          </a>
          <a class="flex items-center px-4 py-2 justify-center" href="/">
            <i class="fa-brands fa-google fa-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isActive = ref(false)

const toggleMenu = () => {
  isActive.value = !isActive.value
}
</script>