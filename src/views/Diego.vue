<template>
    <div id="app-diego">
        <img alt="Vue logo" src="../assets/diegologo.gif" />
        <h1>Conversor de Moedas</h1>
        <div class="container">
            <div class="container-one">
                <select name="first-currency" id="first-currency" v-model="currency_one">
                    <option value="AED">AED</option>
                    <option value="ARS">ARS</option>
                    <option value="AUD">AUD</option>
                    <option value="BGN">BGN</option>
                    <option value="BRL">BRL</option>
                    <option value="BSD">BSD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CLP">CLP</option>
                    <option value="CNY">CNY</option>
                    <option value="COP">COP</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="DOP">DOP</option>
                    <option value="EGP">EGP</option>
                    <option value="EUR">EUR</option>
                    <option value="FJD">FJD</option>
                    <option value="GBP">GBP</option>
                    <option value="GTQ">GTQ</option>
                    <option value="HKD">HKD</option>
                    <option value="HRK">HRK</option>
                    <option value="HUF">HUF</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="ISK">ISK</option>
                    <option value="JPY">JPY</option>
                    <option value="KRW">KRW</option>
                    <option value="KZT">KZT</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NOK">NOK</option>
                    <option value="NZD">NZD</option>
                    <option value="PAB">PAB</option>
                    <option value="PEN">PEN</option>
                    <option value="PHP">PHP</option>
                    <option value="PKR">PKR</option>
                    <option value="PLN">PLN</option>
                    <option value="PYG">PYG</option>
                    <option value="RON">RON</option>
                    <option value="RUB">RUB</option>
                    <option value="SAR">SAR</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="TRY">TRY</option>
                    <option value="TWD">TWD</option>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="UYU">UYU</option>
                    <option value="VND">VND</option>
                    <option value="ZAR">ZAR</option>
                </select>
                <input type="number" name="input-one" id="input-one" v-model="amountOne" @input="fetchData()"/>
            </div>
            <div class="container-two">
                <button @click="switchValues()">Trocar</button>
                <h4 id="baseValue">1 {{currency_one}} = {{rate}} {{currency_two}}</h4>
            </div>
            <div class="container-three">
                <select name="second-currency" id="seconf-currency" v-model="currency_two">
                    <option value="AED">AED</option>
                    <option value="ARS">ARS</option>
                    <option value="AUD">AUD</option>
                    <option value="BGN">BGN</option>
                    <option value="BRL">BRL</option>
                    <option value="BSD">BSD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CLP">CLP</option>
                    <option value="CNY">CNY</option>
                    <option value="COP">COP</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="DOP">DOP</option>
                    <option value="EGP">EGP</option>
                    <option value="EUR">EUR</option>
                    <option value="FJD">FJD</option>
                    <option value="GBP">GBP</option>
                    <option value="GTQ">GTQ</option>
                    <option value="HKD">HKD</option>
                    <option value="HRK">HRK</option>
                    <option value="HUF">HUF</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="ISK">ISK</option>
                    <option value="JPY">JPY</option>
                    <option value="KRW">KRW</option>
                    <option value="KZT">KZT</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NOK">NOK</option>
                    <option value="NZD">NZD</option>
                    <option value="PAB">PAB</option>
                    <option value="PEN">PEN</option>
                    <option value="PHP">PHP</option>
                    <option value="PKR">PKR</option>
                    <option value="PLN">PLN</option>
                    <option value="PYG">PYG</option>
                    <option value="RON">RON</option>
                    <option value="RUB">RUB</option>
                    <option value="SAR">SAR</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="TRY">TRY</option>
                    <option value="TWD">TWD</option>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="UYU">UYU</option>
                    <option value="VND">VND</option>
                    <option value="ZAR">ZAR</option>
                </select>
                <input type="number" id="amount-two" placeholder="0" disabled v-model="amountTwo"/>
            </div>
            <div class="container-four">
                <h4 id="lastlyUpdated"><strong>Ultimo Update</strong> {{ localTime }}</h4>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            data:[],
            currency_one:"USD",
            currency_two:"EUR",
            rate:"",
            amountOne:1,
            amountTwo:0,
            localTime: new Date().toLocaleString('pt-BR'),
        };
    },

    methods:{
        fetchData(){
            fetch(`https://v6.exchangerate-api.com/v6/ef2cf9858421c219428dc3a3/latest/${this.currency_one}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                this.data = data;
                this.rate = data.conversion_rates[this.currency_two];
                this.amountTwo = this.amountOne * this.rate.toFixed(2);
            });
        },
        switchValues(){
            const temporaryValue = this.currency_one
            this.currency_one = this.currency_two
            this.currency_two = temporaryValue;
            this.fetchData();
        }

    },

    mounted(){
        this.fetchData();
 }
};
</script>

<style>
html{
    background: #f4f4f4;
}

#app-diego{
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 120px;
}
h1{
    color: #88cf4a
}

img {
    margin-top: 20px;
    margin-bottom: 15px;
    width: 250px;
    height: 200px;
}

.container{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
}

.container-two{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
}

.container-two button{
    padding: 5px;
    margin: 10px;
    font-size: 18px;
    background-color: #88cf4a;
    color: #fff;
    width: 30%;
    height: 70%;
    border: none;
    outline: none;
    border-radius: 15px;
}

select{
    padding: 5px;
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 5);
    outline: none;
    
}
select:focus{
        color: #FFF;
        background-color: #88cf4a;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
            }

input{
    padding: 5px;
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 5);
    outline: none;
    font-size: 18px;
}
input:focus{
        color: #FFF;
        background-color: #88cf4a;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
            }

#lastlyUpdated{
    font-weight: 500;
}

#baseValue{
    font-weight: 500;
}
</style>