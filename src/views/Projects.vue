<template>
  <section class="section min-h-screen bg-[#f6f7f8] dark:bg-black">
    <div class="container pb-5">
      <h1 class="text-6xl font-semibold dark:text-white">作品集</h1>
      <!-- <div>
        <span class="inline-block rounded-2xl text-xs bg-black text-white px-2 py-1 leading-none mr-1 cursor-pointer">Vue3</span>
        <span class="inline-block rounded-2xl text-xs bg-white text-black px-2 py-1 leading-none mr-1 cursor-pointer">TailwindCSS</span>
      </div> -->
      <NavTabs :tabs="tabs" @tab="filterByTab"/>
      <div class="flex flex-col gap-5 my-5">
        <ProjectCard v-for="project in filteredProjectsList" :key="project.id" :project="project"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import NavTabs from '../components/NavTabs.vue'
import { projectsList } from '../data/projects'
const tabs = ref<string[]>(['All'])
const chosenTab = ref('All')

const getTabs = () => {
  projectsList.forEach(i => {
    i.tags.forEach(t => {
      if (!tabs.value.includes(t)) {
        tabs.value.push(t)
      }
    })
  })
}
getTabs()

const filterByTab = (tab: string) => {
  chosenTab.value = tab
}


const filteredProjectsList = computed(() => {
  if (chosenTab.value === 'All') {
    return projectsList
  }
  return projectsList.filter(i => {
    return i.tags.includes(chosenTab.value)
  })
})
</script>