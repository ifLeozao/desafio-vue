<template>
    <v-card class="card-default">
        <h2>{{titulo}}</h2>
        <img class="imagem-quadrinho" :src="imagem"/>
        <p>{{descricao}}</p>
    </v-card>
</template>

<script>
export default {
    name: 'quadrinho',
    props: {
        imagem: {
            type: String
        },
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String
        }
    }
}
</script>

<style scoped>
    .imagem-quadrinho {
        width: 120px;
    }
    .card-default {
        padding: 28px;
        margin: 18px;
        width: 300px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #FFF !important;
        border: 1px solid #e0e0e0;
        box-shadow: 0 4px 4px -2px #989898;
        -moz-box-shadow: 0 4px 4px -2px #989898;
        -webkit-box-shadow: 0 4px 4px -2px #989898;
    }
</style>