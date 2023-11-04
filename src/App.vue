<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import { useBodyMassStore } from '../stores/BodyMassStore.js' // this will import the BodyMassStore.js
import { storeToRefs } from 'pinia'

const bodyMassStore = useBodyMassStore()

const bmiTotal = storeToRefs(bodyMassStore)

import { ref } from 'vue'


const userSelection = ref('')


function updateUserSelection(height, weight) { // this will add up the value for BMI with two decimal points
  const bmi = (weight / ( height * height)).toFixed(2)
  userSelection.value = `Your BMI is ${bmi}`
}



// TO DO 
// Tidy up code, remove things that aren't needed
// review variable names, make sure they are appropaiter for app
// extra credit - need props 


</script>

<template>

  <div id="app-component">

  <h1 id="BMIC">Body Mass Index Calculator</h1>

  <BodyMassIndexForm 
    v-bind:height="wryHeight"
    v-bind:weight="wryWeight"
    v-on:stats-entered="updateUserSelection"
    ></BodyMassIndexForm>

  

   <p> {{ userSelection }} </p>  
  
</div>

</template>

<style scoped>

#app-component {
  background-color: rgb(0, 255, 64);
  padding: 50px;
}

p {    /*this will change the font text*/
  font-family: 'Courier New', Courier, monospace;
}
#BMIC {
  color: black;
}
#wryHeight {
  color: black;
}


</style>