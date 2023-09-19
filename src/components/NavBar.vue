<template>
  <nav class="fixed left-0 right-0 top-0 border-b-2 bg-white z-30">
    <div class="mx-auto lg:max-w-[800px] lg:flex">
      <div class="navbar-brand flex">
        <div>
          <router-link @click="closeMenu" class="flex items-center text-2xl font-semibold px-4 py-2" to="/">Jim</router-link>
        </div>
        <div @click="toggleMenu" class="navbar-burger flex-1 flex justify-end lg:hidden">
          <div class="flex items-center justify-center w-14 cursor-pointer">
            <span class="block h-px w-4 bg-black relative before:absolute before:h-px before:w-4 before:bg-black before:block before:top-1 after:absolute after:h-px after:w-4 after:bg-black after:block after:bottom-1"></span>
          </div>
        </div>
      </div>
      <div :class="{'scale-y-100': isActive}" class="navbar-menu bg-white absolute top-[50px] w-full origin-top ease-out scale-y-0 duration-200 lg:static lg:flex lg:transform-none">
        <div class="flex flex-col lg:flex-row lg:flex-1">
          <router-link @click="toggleMenu" class="flex items-center px-4 py-2 justify-center" to="/projects">作品集</router-link>
          <router-link @click="toggleMenu" class="flex items-center px-4 py-2 justify-center" to="/categories">分類</router-link>
          <router-link @click="toggleMenu" class="flex items-center px-4 py-2 justify-center" to="/about">關於我</router-link>
        </div>
        <div class="flex justify-center min-h-[40px]">
          <a class="flex items-center px-4 py-2 justify-center" target="_blank" href="https://www.facebook.com/tsengjimka1/">
            <i class="fa-brands fa-facebook fa-xl hover:text-[#1877F2]"></i>
          </a>
          <a class="flex items-center px-4 py-2 justify-center" target="_blank" href="https://github.com/wert723jim?tab=repositories">
            <i class="fa-brands fa-github fa-xl hover:text-[#1A7F37]"></i>
          </a>
          <a class="flex items-center px-4 py-2 justify-center" href="mailto:wert723jim@gmail.com">
            <i class="fa-brands fa-google fa-xl hover:text-[#BB001B]"></i>
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

const closeMenu = () => {
  isActive.value = false
}
</script>