<script setup lang="ts">
import navbar from'@/components/navbar.vue'
import top from './components/navtop.vue';
</script>

<template>
  <div class="app">
  <div class="navtop">
 <top ></top>
  </div>
  <div class="router">
  <RouterView ></RouterView>
  </div>
  <div class="bottom">
  <navbar ></navbar>
</div>
  </div>
</template>
<style scoped>

.app{
  width:100vw;
  height:100dvh;
}
.router{
 width:100%;
 box-sizing: border-box;
 background:var(--all-bg);
 padding-top:40px;
 padding-bottom:50px;
}
.navtop{
  width:100%;
  height:40px;
  margin:0;
  padding:0;
  position:fixed;
  left:0;
  right:0;
  top:0;
  z-index:100;
}
.bottom{
  width:100%;
  height:50px;
  position:fixed;
  inset:auto auto 0 auto;
   z-index:100;
}
</style>
