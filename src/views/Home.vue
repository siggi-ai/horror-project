<template>
  <div class="body">
    <div class="cat">
      <img src="../../images/cat face.png" alt="drawing of cat-face" />
    </div>

    <YourHorrorStory class="" />

    <h2 class="text1">Welcome to the Darkness</h2>
    <div class="myDIV">Hover over me.</div>
    <div class="hide">Something lies hidden beneath the surface.</div>

    <div class="p-8 h-4 flex items-center justify-center pt-10">
      <button class="button hide">
        <router-link to="first">Alone</router-link>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.body {
  background-color: black;
}
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
  color:blueviolet;
  text-align: center;
}
.myDIV:hover + .hide {
  display: block;
  color: red;
  text-align: center;
}
</style>
