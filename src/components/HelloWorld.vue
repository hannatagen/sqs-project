<template>
  <div class="hello">
    <Car car-id="nob001"/>
  </div>
</template>

<script>
    import Car from "./Car";

    export default {
        name: 'HelloWorld',
        components: {Car}
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
