
<template>
  <v-form ref="form"
    v-model="valid"
    lazy-validation>
  <v-container>
    <v-row>
        <v-col cols="2">
            <v-text-field label="CEP"
             @blur="getCEP" 
             v-model="cep" 
             hide-spin-buttons
             v-mask="['#####-###']">
            </v-text-field>
        </v-col>
          <v-col cols="5">
            <v-text-field label="Cidade" v-model="cidade"></v-text-field>
        </v-col>
        <v-col cols="5">
            <v-text-field label="Estado" v-model="estado"></v-text-field>
        </v-col>
        
    </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
      data: () => ({
      cep:"",
      cidade:"",
      estado:"",
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
     async getCEP() {
         const cepFormatado = this.cep.replace("-", "");
         if(cepFormatado.length === 8){
         try {
          const response = await fetch(`http://viacep.com.br/ws/${cepFormatado}/json/`);
          const json = await response.json();
          this.cidade = json.localidade;
          this.estado = json.uf;
             } catch (error) {
                 console.log("CEP Inválido", error);
                 }
         }else {
             console.log("Cep Inválido");
         }
      }
    },
  }
</script>


<style scoped></style>