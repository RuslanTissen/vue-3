<template>
	<button class="btn">
		<slot></slot> 
	</button>
	
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
	padding: 10px 30px;
	background-color: none;
	color: teal;
	border: 1px solid teal;
}
</style>