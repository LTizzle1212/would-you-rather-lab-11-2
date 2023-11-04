<script setup>
import { ref, watch } from 'vue'

import { useBodyMassStore } from '../BodyMassStore'

const bodyMassStore = useBodyMassStore()

const emit = defineEmits([
  'stats-entered'
])

defineProps({
  statement: String,
  height: String,
  weight: String
})

function calculate() { // emit stat-entered
  emit('stats-entered', height.value, weight.value)
}


const height = ref(0)
const weight = ref(0)


const choice = ref('') 


watch(choice, () => {
  emit('stats-entered', choice.value)
})

</script>

<template>

<div id="wyr">

  <h2> Enter your height and weight</h2>
  

  <p> {{ statement }} </p>

      <div>
        <label for="height">Height in meters</label>
        <input v-model="height" type="text">
        <!-- this value attribute is the HTML value, for what data an input stores-->
        <div>
        <label for="weight">Weight in kilograms</label>
        <input v-model="weight" type="text"> 
        <!-- this will add the weight -->
        </div>
     </div>
    
</div>

<button v-on:click="calculate" class="button">Calculate</button> <!-- this will add the Calculate button-->
</template>

<style scoped>

p {
  font-family: fantasy;
}

</style>
