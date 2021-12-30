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
		<div class="flex-grow-1 pa-10">
			<h3>{{ $route.params.id }}</h3>
			<v-row>
				<v-col
					xs="12"
					sm="6"
					md="4"
					lg="3"
					xl="2"
					v-for="item in results"
					:key="item.id"
				>
					<ZeldaItemCard :id="item.id" :name="item.name" :image="item.image">
					</ZeldaItemCard>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import ZeldaItemCard from "@/components/ZeldaItemCard.vue";

export default {
	name: "Nicolas",
	components: {
		ZeldaItemCard,
	},
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
