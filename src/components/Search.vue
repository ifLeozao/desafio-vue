<template>
  <div class="search">

         <v-card class="mx-auto" width="500">
     
       <img src='https://t.ctcdn.com.br/AwxkFgvpQizV0aW2qJ_uHcXQNxU=/i361132.gif' width="010"/>
     
        </v-card>

        
 <p class="font-weight-bold" style="margin-top: 10px;margin-bottom: 0px;">
    {{msg}}
   </p> 
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Escreva o que deseja pesquisar" v-model="query" />
    </form>
    
    <div v-if="results">
        <v-card class="mx-auto" width="600">

     <div v-for="(result, index) in results" :key="index" style="margin-bottom: 10px;">
        <img v-bind:src="result.links[0].href"/>
      </div>
        </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'search',
  data () {
    return {
      msg: 'NASA IMAGENS',
      query: '',
      results: ''
    }
  },
  methods: {
    getResult(query) {
      axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then( response => {
        this.results = response.data.collection.items;
      });
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.search{
  margin:0 auto;
  width:100%;
}
.search img {
  max-width: 100%;
  min-width: 100%;
}
.search form input {
  margin-bottom:20px;
  width: 50%;
  padding:10px;
  border:1px solid grey;
}

.colorbackgroud{
    background-color: blanchedalmond;
}
</style>