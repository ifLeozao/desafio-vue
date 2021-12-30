<template>
	<div>
		<h1 class="text-capitalize white--text mb-5">{{ entry.name }}</h1>
		<v-row>
			<v-col xs="12" sm="7" md="4" offset-lg="1">
				<v-card>
					<v-img :src="entry.image"></v-img>
					<v-card-text class="ps-5">
						<v-chip class="text-capitalize mb-4" color="teal" dark>{{
							entry.category
						}}</v-chip>
						<div class="body-1 blac-text">{{ entry.description }}</div>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col xs="12" sm="12" md="8" lg="6">
				<v-card>
					<v-card-title>Common Locations</v-card-title>
					<ul>
						<li
							v-for="(location, index) in entry.common_locations"
							:key="index"
						>
							{{ location }}
						</li>
					</ul>
				</v-card>
				<v-card class="mt-10" :v-if="drop_list.length === 0">
					<v-card-title>Drops</v-card-title>
					<ul>
						<li v-for="(drop, index) in entry.drops" :key="index">
							{{ drop }}
						</li>
					</ul>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data: () => ({
		drop_list: [],
	}),
	props: {
		entry: {
			category: String,
			common_locations: [],
			description: String,
			drops: [],
			id: Number,
			image: String,
			name: String,
		},
	},
	methods: {
		isEmpty() {
			console.log('teste');
			return this.drops.length === 0;
		},
	},
	beforeCreate() {
		this.drop_list = this.drops;
	},
};
</script>

<style>
li {
	list-style: none;
}
</style>
