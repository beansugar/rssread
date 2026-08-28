<template>
  <div class="feed-all">
    <h3>订阅</h3>
    <div class="feed-show">
    <feed></feed>
    </div>
  </div>
</template>
<style lang="css" scoped>
li,ol{
  list-style: none;
  margin:0;
  padding:0;
}
.feed-all{
  width:100%;
}
.feed-show{
  width:80%;
  margin:0 auto;
}
</style>
<script lang="ts" setup>
import feed from '@/sub/components/feed.vue'
</script>