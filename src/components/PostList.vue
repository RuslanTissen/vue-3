<template>
	<div class="post" v-for="post in posts">
		<div><strong>Name: </strong>{{ post.title }}</div>
		<div><strong>Discription: </strong>{{ post.body }}</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>