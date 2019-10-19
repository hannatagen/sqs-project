<template>
  <div>
    <h3>Your Nobe:</h3>
    <h4>{{car}}</h4>
  </div>
</template>

<script>
    import axios from "../axios/axios-http"

    export default {
        name: "Car",
        props: {
            carId: String
        },
        data() {
            //TODO import bootstrap for a easier design https://bootstrap-vue.js.org/docs/
            //TODO use cards from bootstrap to display car and data https://bootstrap-vue.js.org/docs/components/card/#cards

            //console.log(this.props.carId);
            axios.get("/car/" + "nob001") //TODO get carId passed to compoent: "/car/" + this.props.carId
                 .then(response => {
                     this.car = response.data; // JSON are parsed automatically.
                     console.log(this.car);
                 })
                 .catch(e => {
                     console.log(e);
                 });
            return {
                car: null,
            };
        },

    }
</script>

<style scoped>

</style>
