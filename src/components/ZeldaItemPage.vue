<template>
	<div>
		<h1 class="text-capitalize white--text mb-5 text-center">
			{{ entry.name }}
		</h1>
		<v-row>
			<v-col xs="12" sm="7" md="4" lg="3" offset-lg="2">
				<v-card color="#191f24" class="pb-6">
					<v-img :src="entry.image"></v-img>
					<v-card-text class="ps-5 white--text">
						<div class="text-capitalize mb-8">
							<v-chip class="mr-4" color="#23361c" dark>{{
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
			<v-col xs="12" sm="12" md="8" lg="5">
				<v-card v-if="entry.drops" class="mb-10 pb-5" color="#191f24" dark>
					<v-card-title>Drops</v-card-title>
					<v-card-text class="white--text">
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
				<v-card color="#191f24" dark>
					<v-card-title>Common Locations</v-card-title>
					<v-card-text>
						<div
							v-for="(location, index) in entry.common_locations"
							:key="index"
							class="no-dot"
						>
							<h2 class="mb-5 text-center white--text">{{ location }}</h2>
							<div class="location-image">
								<v-img
									contain
									:src="locationImages[location]"
									class="rounded-lg mb-10 location-img mx-auto"
									max-width="600"
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
	z-index: 0;
	transition: all 0.2s ease-in-out;
}
.location-img:hover {
	z-index: 100;
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
