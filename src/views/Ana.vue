<template>
  <div id="Ana" class="md-layout">
    <h1 class="text-center div-padding2">Quadrinhos Marvel</h1>
    <div class="div-padding" >
      <v-row>
        <v-col cols="3" sm="6" md="4" lg="3" offset-lg="" v-for="quadrinho in quadrinhos" :key="quadrinho.id">
          <quadrinho
            :titulo="quadrinho.title"
            :descricao="quadrinho.description"
            :imagem="getImagem(quadrinho)"
          ></quadrinho>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import MarvelApi from '@/router/marvelAPI';
import Quadrinho from '@/components/quadrinho';

export default {
  name: 'Ana',
  components: {
    Quadrinho
  },
  data() {
    return {
      quadrinhos: []
    }
  },
  created() {
    var self = this
    MarvelApi.getAllComics(10, comics => {
      self.quadrinhos = comics.data.data.results;
    })
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + '/portrait_medium.jpg';
      }
    }
  }
};
</script>

<style scoped>
    .div-padding{
        padding: 60px;
    }
    .div-padding2{
        padding-top: 60px;
    }
    .text-center{
      text-align: center;
    }
</style>