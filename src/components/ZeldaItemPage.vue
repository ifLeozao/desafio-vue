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
				<v-card v-if="entry.drops" class="mb-10">
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
				<v-card>
					<v-card-title>Common Locations</v-card-title>
					<v-card-text>
						<div
							v-for="(location, index) in entry.common_locations"
							:key="index"
							class="no-dot"
						>
							<h2 class="mb-5 text-center">{{ location }}</h2>
							<div class="location-image">
								<v-img
									contain
									:src="locationImages[location]"
									class="rounded-lg mb-10 location-img"
									max-width="800"
								></v-img>
							</div>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import LocationImages from '../assets/zelda_regions.json';

export default {
	data: () => ({
		locationImages: LocationImages,
	}),
	props: {
		entry: {},
	},
};
</script>

<style>
.location-img {
	transition: all 0.2s ease;
}
.location-img:hover {
	-moz-transform: scale(1.5);
	-webkit-transform: scale(1.5);
	-o-transform: scale(1.5);
	-ms-transform: scale(1.5);
	transform: scale(1.5);
}
.v-card__text {
	color: rgba(0, 0, 0, 0.8) !important;
	font-size: 1rem;
}
</style>
