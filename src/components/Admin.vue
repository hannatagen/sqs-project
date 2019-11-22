<template>
  <div class="container">
    <b-button-group>
      <b-form-input v-model="searchKey" placeholder="Enter a car id"/>
      <b-button @click="search()" id="searchBtn" variant="primary">Search</b-button>
    </b-button-group>
    <p id="errorMsg" v-if="error !== '' && !searchSuccess">{{ error }}</p>
    <p v-if="searchSuccess">Car: {{ searchKey }}</p>
    <b-table v-if="searchSuccess" striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchKey: '',
        cars: ['000001', '045271', '735172', '953729', '846285', '537794', '444281', '749002', '002033'],
        items: [
          { name: 'Lock status', status: 'locked'},
          { name: 'Charging limit', status: '70%'},
          { name: 'Temperature', status: '20'},
          { name: 'Battery (%)', status: '86%'},
          { name: 'Location', status: '58.3782513,26.7124846,'},
          { name: 'Location address', status: 'Juhan Liivi 2'},
        ],
        searchSuccess: false,
        error: '',
      }
    },
    methods: {
      search() {
        try {
          const key = /^\d+$/.test(this.searchKey);
          if (!key) {
            throw "error";
          } else if (this.searchKey.length == 6) {
            if (this.cars.includes(this.searchKey)) {
              this.error = '',
              this.searchSuccess = true
            } else {
              this.error = "Couldn't find a car with that ID";
            }
          }
          else if (this.searchKey.length < 6) {
            this.error = "ID is too short";
            this.searchSuccess = false;
          }
          else if (this.searchKey.length > 6){
            this.error = "ID is too long";
            this.searchSuccess = false;
          }
        } catch (e) {
          this.error = "Search key must consist only integers."
          this.searchSuccess = false;
        }
      },
    },
  };
</script>

<style scoped>
.table {
  width: 800px;
}
#errorMsg {
  color: 'red',
}
</style>
