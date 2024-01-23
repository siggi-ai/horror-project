<template>
  <div>
    <div class="bg-slate-800 h-screen">
      <h1
        class="pt-44 pb-8 p-5 h-5 flex items-center justify-center text-7xl font-rubik text-stone-200 sm:text-9xl flex-shrink"
      >
        HORROR
      </h1>

      <img
        src="../../images/cat face.png"
        alt="drawing of cat-face"
        class="object-scale-down bg-slate-800 pt-10 w-screen"
      />
      <YourHorrorStory class="bg-slate-800 pt-10 h-screen" />

      <div class="bg-slate-800 p-8 h-4 flex items-center justify-center pt-10">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <router-link to="first">Alone</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import YourHorrorStory from '../components/YourHorrorStory.vue';
</script>

<style lang="scss" scoped></style>
