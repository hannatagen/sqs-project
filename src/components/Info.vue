<template>
  <div class="container">
    <p id="errorMsg" v-if="error !== ''">{{ error }}</p>
    <div class="table">
      <table style="width:100%">
        <tr>
          <td>Lock status</td>
          <td id="lockStatus">{{ lockStatus }}</td>
          <td>
            <b-button-group>
              <b-button @click="lockUnlockCar('locked')" id="lockBtn" variant="danger">Lock</b-button>
              <b-button @click="lockUnlockCar('unlocked')" id="unlockBtn" variant="success">Unclock</b-button>
            </b-button-group>
          </td>
        </tr>
        <tr>
          <td>Charging limits</td>
          <td id="chargingLimit">{{ chargingLimit }}%</td>
          <td>
            <b-button-group>
              <b-form-input v-model="vLimit" placeholder="Enter limit"/>
              <b-button @click="changeLimit()" id="changeLimitBtn" variant="primary">Change</b-button>
            </b-button-group>
          </td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td id="temp">{{ temp }}°C</td>
          <td>
            <b-button-group>
              <b-form-input v-model="vTemp" placeholder="Enter temp"/>
              <b-button @click="changeTemp()" id="changeTempBtn" variant="primary">Change</b-button>
            </b-button-group>
          </td>
        </tr>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lockStatus: 'locked',
        chargingLimit: '60',
        temp: '17',
        items: [],
        vTemp: '',
        vLimit: '',
        error: '',
      }
    },
    created() {
      this.items = [
          { name: 'Battery (%)', status: '70%'},
          { name: 'Location', status: '58.3782513,26.7124846,'},
          { name: 'Location address', status: 'Juhan Liivi 2'},
        ];
    },
    methods: {
      lockUnlockCar(state) {
        this.lockStatus = state;
      },
      changeLimit() {
        try {
          const key = /^\d+$/.test(this.vLimit);
          const limit = parseInt(this.vLimit);
          if (!key) {
            throw "error";
          } else if (limit >= 30 && limit <= 100) {
            this.error = '';
            this.chargingLimit = limit;
          }
          else if (limit < 30) this.error = "Charging limit is too low."
          else if (limit > 100) this.error = "Charging limit is too high."
          else throw "error"
        } catch (e) {
          this.error = "Charging limit is not an integer."
        }
      },
      changeTemp() {
        try {
          const key = /^\d+$/.test(this.vTemp);
          const temp = parseInt(this.vTemp);
          if (!key) {
            throw "error";
          } else if (temp >= 5 && temp <= 32) {
            this.error = '';
            this.temp = temp;
          }
          else if (temp < 5) this.error = "Temperature is too low."
          else if (temp > 32) this.error = "Temperature is too high."
          else throw "error"
        } catch (e) {
          this.error = "Temperature is not an integer."
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
