<template>
	<div class="d-flex" style="height: 100%">
		<v-card>
			<v-navigation-drawer permanent expand-on-hover>
				<v-list> </v-list>

				<v-divider></v-divider>

				<v-list nav dense>
					<v-list-item link @click="getCategory('creatures')">
						<v-list-item-icon>
							<v-icon>mdi-paw</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Creatures</v-list-item-title>
					</v-list-item>
					<v-list-item link @click="getCategory('equipment')">
						<v-list-item-icon>
							<v-icon>mdi-sword</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Equipment</v-list-item-title>
					</v-list-item>
					<v-list-item link @click="getCategory('materials')">
						<v-list-item-icon>
							<v-icon>mdi-food-apple</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Materials</v-list-item-title>
					</v-list-item>
					<v-list-item link @click="getCategory('monsters')">
						<v-list-item-icon>
							<v-icon>mdi-emoticon-devil</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Monsters</v-list-item-title>
					</v-list-item>
					<v-list-item link @click="getCategory('treasure')">
						<v-list-item-icon>
							<v-icon>mdi-treasure-chest</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Treasure</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
		</v-card>
		<div class="flex-grow-1">
			<v-card v-for="item in results" :key="item.id">
				<h2>{{ item.name }}</h2>
				<img :src="item.image" />
				<p>{{ item.description }}</p>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		endpoint: "https://botw-compendium.herokuapp.com/api/v2/",
		results: [],
	}),
	methods: {
		async getCategory(category) {
			let resp = await fetch(this.endpoint + "category/" + category);
			let body = await resp.json();

			if (category === "creatures")
				this.results = [...body.data.food, ...body.data.non_food];
			else this.results = body.data;
		},
	},
};
</script>
