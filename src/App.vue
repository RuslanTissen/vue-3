<template>
	<div class="App">
		<form @submit.prevent>
			<h4>Post Creation</h4>
			<input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Name">
			<input v-bind:value="body" @input="body = $event.target.value" class="input" type="text"
				placeholder="Discription">
			<button class="btn" @click="createPost">
				Create
			</button>
		</form>
	</div>
	<div class="post" v-for="post in posts">
		<div><strong>Name: </strong>{{ post.title }}</div>
		<div><strong>Discription: </strong>{{ post.body }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [
				{ id: 1, title: "JS", body: "Post discription " },
				{ id: 2, title: "JS 2", body: "Post discription 2" },
				{ id: 3, title: "JS 3", body: "Post discription 3" }
			],
			title: "",
			body: ""
		}
	},
	methods: {
		createPost() {
			const newPost = {
				id: Date.now(),
				title: this.title,
				body: this.body,
			}
			this.posts.push(newPost);
			this.title = "";
			this.body = "";
		},
	}
}
</script>










<style >
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.post {
	margin-top: 15px;
	padding: 15px;
	border: 2px solid teal;
}

.App {
	padding: 20px;
}

form {
	display: flex;
	flex-direction: column;
}

.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
	color: red;
}

.btn {
	margin-top: 15px;
	align-self: flex-end;
	padding: 10px 30px;
	background-color: none;
	color: teal;
	border: 1px solid teal;
}
</style>