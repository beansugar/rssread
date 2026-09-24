

<template>
<div class="bar">
	<h2>{{ store.isplay }}</h2>
	<h4>{{ store.showtitle }}</h4>
	<div class="control">
		<control :state="store.isplay"></control>
	</div>
</div>
</template>
<script setup  lang="ts">
import { useAudioStore } from '@/store/store';
import control from '@/components/control.vue'
 const store=useAudioStore()
</script>
<style lang="css" scoped>
.bar{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:row;
}
.control{
	width:60px;
	height:30px;
	margin: auto;
    margin-right:10px;
	border-radius:10px;
	background:orange;
}
h4{
	min-width:100px;
}

</style>
