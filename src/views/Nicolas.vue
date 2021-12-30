<template>
	<div class="d-flex blue-grey darken-4" style="height: 100%">
		<SideDrawer></SideDrawer>
		<div class="flex-grow-1 pa-10 ml-15">
			<ZeldaItemPage
				v-if="'id' in this.$route.params"
				:entry="results[0]"
			></ZeldaItemPage>
			<v-row v-else>
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
		next();
		this.updateView();
	},
};
</script>
