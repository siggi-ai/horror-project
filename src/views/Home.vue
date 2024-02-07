<template>
  <div class="body">
    <!-- <div class="bg-slate-800 h-screen"> -->
      <div class="">
      <h1
        class="pt-44 pb-8 p-5 h-5 flex items-center justify-center text-7xl font-rubik text-fuchsia-700 sm:text-9xl flex-shrink"
      >
        HORROR
      </h1>

      <img
        src="../../images/cat face.png"
        alt="drawing of cat-face"
        class="object-scale-down h-48 w-96"
      />
      <YourHorrorStory class="" />

      <div class=" p-8 h-4 flex items-center justify-center pt-10">
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

<style>
.body {
  background-image: url("../../public/images/p1.jpg");
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}
</style>
