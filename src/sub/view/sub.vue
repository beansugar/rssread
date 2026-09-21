<template>
    <div class="subview">
    <div class="user-show"> <show ></show></div>
    <div class="sub-show"><subshow></subshow></div>
    </div>
</template>
<script setup >
import show from '@/user/show.vue'
import subshow from '@/sub/components/subshow.vue'
</script>
<style scoped lang="css">
.subview{
width:100%;
height:100%;
}
.user-show{
    width:100%;
    height:10dvh;
    margin:0 auto;
}
.sub-show{
    width:90%;
    height:80vh;
    margin:10px auto;
}
</style>
