<template>
  <div class="bg-white w-full shadow-md hover:shadow-xl ease-out duration-300 md:flex">
      <div class="w-full md:w-[280px]">
        <div class="pb-[56%] relative md:pb-[70%]">
          <img class="h-full w-full object-cover absolute top-0 left-0" :src="getImgUrl(project.img)" alt="">
        </div>
      </div>
      <div class="flex-1 text-left p-5">
        <div class="mb-2">
          <span v-for="tag in project.tags" :key="tag" class="inline-block rounded-2xl text-xs bg-black text-white px-2 py-1 leading-none mr-1">{{ tag }}</span>
        </div>
        <h2 class="text-2xl">{{ project.name }}</h2>
        <div>
          <a target="_blank" :href="project.link">
            Link
          </a>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import Project from '../types/Project' 

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  }
})

const getImgUrl = (pic: string) => {
  return new URL(`../assets/${pic}`, import.meta.url).href
}
</script>