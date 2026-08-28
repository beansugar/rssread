<template>
   <div class="navbar">
   <button class="base">
      <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
   </button>
   <button class="base">
   <router-link to="/subadd">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
          <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g>
      </svg>
   </router-link>
   </button>
   <button class="base">
      <svg  viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- 左右两个耳机的耳罩部分 -->
  <path stroke="#020202" stroke-miterlimit="10" stroke-width="1.91px" d="M5.8,13h.48a0,0,0,0,1,0,0v8.59a0,0,0,0,1,0,0H5.8a4.3,4.3,0,0,1-4.3-4.3v0A4.3,4.3,0,0,1,5.8,13Z"></path>
  <path stroke="#020202" stroke-miterlimit="10" stroke-width="1.91px" d="M17.73,13h.48a4.3,4.3,0,0,1,4.3,4.3v0a4.3,4.3,0,0,1-4.3,4.3h-.48a0,0,0,0,1,0,0V13a0,0,0,0,1,0,0Z"></path>
  <!-- 头梁弧线部分 -->
  <path stroke="#020202" stroke-miterlimit="10" stroke-width="1.91px" d="M3.41,13.91V11.05A8.6,8.6,0,0,1,12,2.45h0a8.6,8.6,0,0,1,8.59,8.6v2.86"></path>
</svg>
   </button>
   <button class="base">
   <router-link to="/sub" class="base">
    <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
   </router-link>
    </button>
   </div>
 </template>
 <script setup lang="ts">
</script>
 <style lang="css" scoped>
 .navbar{
 height:100%;
 width:90%;
 margin:0 5% 0 5%;
 background: var(--nav-bg);
display: flex;
flex-direction:row;
align-items: center;
justify-content:space-between;
}
.base{
   width:40px;
   height:40px;
   background: var(--nav-button);
   border:none;
}
</style>
