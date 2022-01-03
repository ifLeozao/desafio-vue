<template>
	<v-hover>
		<v-card
			class="text-center"
			color="#191f24"
			dark
			:to="'/nicolas/' + category + '/' + id"
		>
			<v-img :src="image" height="200"></v-img>
			<v-card-title>{{ edited_name }}</v-card-title>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	beforeMount() {
		this.edited_name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
	},
	props: {
		id: Number,
		name: String,
		image: String,
		category: String,
	},
	data: () => ({
		edited_name: String,
	}),
	methods: {
		redirect() {
			console.log('opa');
			this.$route.push('/nicolas/' + this.id);
		},
	},
};
</script>
