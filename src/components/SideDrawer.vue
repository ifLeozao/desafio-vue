<template>
	<v-card rounded="0">
		<v-navigation-drawer
			color="cyan darken-4"
			permanent
			expand-on-hover
			floating
			dark
		>
			<v-list> </v-list>
			<v-list nav dense>
				<v-list-item link to="/nicolas/">
					<v-list-item-icon>
						<v-icon>mdi-home</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Home</v-list-item-title>
				</v-list-item>
				<v-list-item link to="/nicolas/creatures">
					<v-list-item-icon>
						<v-icon>mdi-paw</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Creatures</v-list-item-title>
				</v-list-item>
				<v-list-item link to="/nicolas/equipment">
					<v-list-item-icon>
						<v-icon>mdi-sword</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Equipment</v-list-item-title>
				</v-list-item>
				<v-list-item link to="/nicolas/materials">
					<v-list-item-icon>
						<v-icon>mdi-food-apple</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Materials</v-list-item-title>
				</v-list-item>
				<v-list-item link to="/nicolas/monsters">
					<v-list-item-icon>
						<v-icon>mdi-emoticon-devil</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Monsters</v-list-item-title>
				</v-list-item>
				<v-list-item link to="/nicolas/treasure">
					<v-list-item-icon>
						<v-icon>mdi-treasure-chest</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Treasure</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</v-card>
</template>

<style>
.v-navigation-drawer {
	position: fixed !important;
	padding-top: 50px;
	z-index: 1;
}
.v-list-item {
	padding: 8px 10px !important;
}
</style>
