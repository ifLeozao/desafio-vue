<template>
	<div class="d-flex blue-grey darken-4" style="height: 100%">
		<SideDrawer></SideDrawer>
		<div class="ml-14 flex-grow-1">
			<ZeldaItemPage
				class="pa-10"
				v-if="'id' in this.$route.params && results[0]"
				:entry="results[0]"
			></ZeldaItemPage>
			<v-row v-else-if="'category' in this.$route.params" class="pa-10">
				<v-col
					xs="12"
					sm="6"
					md="4"
					lg="3"
					xl="2"
					v-for="item in results"
					:key="item.id"
				>
					<ZeldaItemCard
						:id="item.id"
						:name="item.name"
						:image="item.image"
						:category="item.category"
					>
					</ZeldaItemCard>
				</v-col>
			</v-row>
			<div
				v-else
				class="page-image pa-10 d-flex flex-column justify-space-between fill-height"
			>
				<div>
					<h1 class="text-center white--text">Wiki</h1>
					<v-img
						width="300"
						class="mx-auto mt-n10"
						src="https://www.zelda.com/breath-of-the-wild/assets/img/header/zelda-botw-logo.png"
					></v-img>
				</div>
				<p class="text-center white--text">
					Feito através da API
					<a href="https://gadhagod.github.io/Hyrule-Compendium-API/"
						>Hyrule Compendium API</a
					>
					utilizando Vue.JS
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import SideDrawer from '@/components/SideDrawer';
import ZeldaItemCard from '@/components/ZeldaItemCard.vue';
import ZeldaItemPage from '@/components/ZeldaItemPage.vue';

export default {
	name: 'Nicolas',
	components: {
		SideDrawer,
		ZeldaItemCard,
		ZeldaItemPage,
	},
	data: () => ({
		endpoint: 'https://botw-compendium.herokuapp.com/api/v2/',
		results: [],
	}),
	methods: {
		updateView() {
			let id = this.$route.params.id;
			if (id != null) this.getId(id);
			else {
				let category = this.$route.params.category;
				if (category != null) this.getCategory(category);
			}
		},

		async getCategory(category) {
			let resp = await fetch(this.endpoint + 'category/' + category);
			let body = await resp.json();

			if (category === 'creatures')
				this.results = [...body.data.food, ...body.data.non_food];
			else this.results = body.data;
		},

		async getId(id) {
			let resp = await fetch(this.endpoint + 'entry/' + id);
			let body = await resp.json();

			this.results = [body.data];
		},
	},
	// eslint-disable-next-line no-unused-vars
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			vm.results = [];
			vm.updateView();
		});
	},
	// eslint-disable-next-line no-unused-vars
	beforeRouteUpdate(to, from, next) {
		this.updateView();
		next();
	},
};
</script>

<style scoped>
.page-image {
	background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.8)
		),
		url('https://www.wallpapertip.com/wmimgs/100-1003902_516665-title-zelda-wii-u-video-game-the.jpg');
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
</style>
