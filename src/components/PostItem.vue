<template>
	<div class="post">
		<div><strong>Name: </strong>{{ post.title }}</div>
		<div><strong>Discription: </strong>{{ post.body }}</div>
		<div class="post__btns">
			<button>Delete</button>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			post:{
				type: Object,
				required: true,
			}
		}
	}
</script>

<style  scoped>
.post {
	margin-top: 15px;
	padding: 15px;
	border: 2px solid teal;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>