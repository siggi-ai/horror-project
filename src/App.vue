<template>
  <div class="bg-slate-800 h-screen ">
      <h1 class="pt-44 pb-8 p-5 h-5 flex items-center justify-center text-7xl font-rubik text-stone-200 sm:text-9xl flex-shrink">
        HORROR
      </h1>
      
      <img src="../images/cat face.png" alt="drawing of cat-face" class="object-scale-down bg-slate-800 pt-10 w-screen">
      <YourHorrorStory  class="bg-slate-800 pt-10 h-screen "/>
      <router-link to="first">Alone</router-link>
      <Poem class="bg-slate-800 pt-1" />
  </div>
  
  
</template>

<script setup>
import YourHorrorStory from './components/YourHorrorStory.vue';

</script>

<style lang="scss" scoped>

</style>