<template>
	<div class="d-flex justify-center">
		<div
			class="home d-inline-flex justify-center flex-column ma-10 text-center"
		>
			<img src="@/assets/logo.png" height="120" style="object-fit: contain" />
			<div class="ma-6">
				<h1>Desafio Mobral</h1>
				<h2>Grupo 5</h2>
			</div>
			<ul class="ma-6">
				<li>Ana Beatriz Maia</li>
				<li>Diego Freitas</li>
				<li>Gabriel Basilio</li>
				<li>Leonardo Brunhetti</li>
				<li>Nicolas Andalaft</li>
			</ul>
			<v-btn
				color="light-green darken-2"
				dark
				large
				rounded
				class="mt-10"
				href="https://github.com/ifLeozao/desafio-vue"
			>
				<v-icon>mdi-github</v-icon>
				Repositório do Projeto
			</v-btn>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
};
</script>

<style>
li {
	list-style: none;
	font-size: 1.2rem;
}
</style>
