<template>
	<div class="post">
		<div>
			<div><strong>Name: </strong>{{ post.title }}</div>
			<div><strong>Discription: </strong>{{ post.body }}</div>
		</div>
		<div class="post__btns">
			<my-button>Delete</my-button>
		</div>
	</div>
</template>

<script>
import MyButton from "../components/UI/MyButton"
export default {
	components: { MyButton },
	props: {
		post: {
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