<template>
  <div class="bg-black">

    <div class="flex">
      <router-link to="/">
        <img src="/images/arrow_left_bold_crooked.png" class="w-28"/>
      </router-link>
      <h2 class="p-7 text-5xl text-fuchsia-500 font-rubik_burned">
        Welcome to the Darkness
      </h2>
    </div>
    
    <!-- <div class="cat">
      <img src="/images/cat face.png" alt="drawing of cat-face" />
    </div> -->
        <!-- <div class="myDIV">Hover over me.</div>
    <div class="hide">Something lies hidden beneath the surface.</div> -->
    <!--     <div class="flex justify-center items-center">
      <img class="p-3 text-5xl animate-bounce" src="/images/arrow.png" />
    </div> -->

    <YourHorrorStory class="" />


    <div class="flex flex-col md:flex-row justify-center items-center">
      <router-link to="Cinema"
        ><img src="/images/d1.jpg" alt="dark room with door sligthly opened"
      /></router-link>
      <router-link to="Library"
        ><img src="/images/d1.jpg" alt="dark room with door sligthly opened"
      /></router-link>
    </div>

    <div class="p-8 h-4 flex items-center justify-center pt-10">
      <button class="button hide">
        <router-link to="first">Alone</router-link>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.button:hover + .hide {
  color: transparent;
  background-color: red;
  /* background-color: transparent;  */
  border: none;
}

.hide {
  display: none;
}

.cat {
  display: flex;
  margin: 0 auto;
  width: 20em;
}

.hide {
  display: none;
}

.text1 {
  color: blueviolet;
  text-align: center;
}
.myDIV:hover + .hide {
  display: block;
  color: red;
  text-align: center;
}
</style>
