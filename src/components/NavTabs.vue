<template>
  <div>
    <span v-for="tab in tabs" :key="tab" @click="tabClicked(tab)" :class="{'bg-black text-white': chosenTab === tab, 'bg-white text-black': chosenTab !==tab}" class="inline-block rounded-xl text-xs px-2 py-1 leading-none mr-1 cursor-pointer border border-black">{{ tab }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, PropType } from 'vue'
defineProps({
  tabs: {
    type: Array as PropType<string[]>,
    required: true
  }
})
const emit = defineEmits<{
  (e: 'tab', value: string): void
}>()
// Can I use TypeScript to define chosenTab's value only be set as props.tabs array element as union type?
const chosenTab = ref('All')


const tabClicked = (tab: string) => {
  chosenTab.value = tab
  emit('tab', chosenTab.value)
}
</script>