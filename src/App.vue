<template>
	<div class="App">
		<post-form @create="createPost" />
		<post-list :posts="posts" />
	</div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "@/components/PostList";

export default {
	components: {
		PostForm, PostList
	},
	data() {
		return {
			posts: [
				{ id: 1, title: "JS", body: "Post discription " },
				{ id: 2, title: "JS 2", body: "Post discription 2" },
				{ id: 3, title: "JS 3", body: "Post discription 3" }
			],
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post)
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

.App {
	padding: 20px;
}
</style>