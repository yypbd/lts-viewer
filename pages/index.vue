<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale } from 'chart.js'
import 'chartjs-adapter-date-fns'

import { ubuntuChartData, ubuntuChartOptions } from "~/assets/data/ubuntu.js"

// 참조
// https://jsfiddle.net/Leelenaleee/gyp3z28b/2/

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale)


const chartData = ref(ubuntuChartData)
let chartOptions = ref(ubuntuChartOptions)

chartOptions.value.scales.x.min = new Date('2010-09-11T00:00:00')
chartOptions.value.scales.x.max = new Date('2040-09-11T00:00:00')

</script>

<template>
    <div class="bg-white">
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
        />
    </div>
</template>

<style scoped>

</style>