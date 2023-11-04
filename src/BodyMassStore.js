import { defineStore } from "pinia";
import { ref, computed } from "vue";

// defining useBodyMassStore in BodyMassStore.js
export const useBodyMassStore = defineStore('height', 'weight', () => {

    const bmiTotal = ref([])

    const recentBMI = ref( {} ) // empty object

    function newBMI (height, weight) {
        bmiTotal.value
    }



    return {
        // reactive data
        bmiTotal,
        recentBMI,

        // functions
        newBMI

    }
})


