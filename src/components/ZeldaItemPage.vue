<template>
	<div>
		<h1 class="text-capitalize white--text mb-5">{{ entry.name }}</h1>
		<v-row>
			<v-col xs="12" sm="7" md="4" offset-lg="1">
				<v-card>
					<v-img :src="entry.image"></v-img>
					<v-card-text class="ps-5">
						<div class="text-capitalize mb-4">
							<v-chip class="mr-4" color="teal" dark>{{
								entry.category
							}}</v-chip>
							<v-chip v-if="entry.cooking_effect" color="green darken-1" dark>
								<v-icon left> mdi-flask-round-bottom </v-icon>
								{{ entry.cooking_effect }}</v-chip
							>
						</div>
						<div>{{ entry.description }}</div>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col xs="12" sm="12" md="8" lg="6">
				<v-card>
					<v-card-title>Common Locations</v-card-title>
					<v-card-text>
						<ul>
							<li
								v-for="(location, index) in entry.common_locations"
								:key="index"
								class="no-dot"
							>
								{{ location }}
							</li>
						</ul>
					</v-card-text>
				</v-card>
				<v-card class="mt-10" v-if="entry.drops">
					<v-card-title>Drops</v-card-title>
					<v-card-text>
						<ul>
							<li
								v-for="(drop, index) in entry.drops"
								:key="index"
								class="text-capitalize"
							>
								{{ drop }}
							</li>
						</ul>
					</v-card-text>
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
		entry: {},
	},
	methods: {
		isEmpty() {
			console.log('teste');
			return this.drops.length === 0;
		},
	},
};
</script>

<style>
.no-dot {
	list-style: none;
}
.v-card__text {
	color: rgba(0, 0, 0, 0.8) !important;
	font-size: 1rem;
}
</style>
