<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale } from 'chart.js'
import 'chartjs-adapter-date-fns'
import annotationPlugin from 'chartjs-plugin-annotation';

import {ubuntuChartData, ubuntuChartOptions} from "~/assets/data/ubuntu.js"

// 참조
// https://jsfiddle.net/Leelenaleee/gyp3z28b/2/

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale, annotationPlugin)


const chartData = ref(ubuntuChartData)
let chartOptions = ref(ubuntuChartOptions)

let dateStrings: string[] = []
ubuntuChartData.datasets.map((dataset) => (
    dateStrings = dateStrings.concat(dataset.data.flat())
))

let dates: Date[] = dateStrings.map((dateString) => new Date(dateString))

// 참조
// https://stackoverflow.com/questions/7143399/min-max-of-dates-in-an-array
// const maxDate = new Date(Math.max.apply(null, dates))
// const minDate = new Date(Math.min.apply(null, dates))
let maxDate = new Date(Math.max(...dates))
let minDate = new Date(Math.min(...dates))

// 앞뒤로 여유 주기
maxDate.setMonth(maxDate.getMonth() + 12)
minDate.setMonth(minDate.getMonth() - 12)

chartOptions.value.scales.x.min = maxDate
chartOptions.value.scales.x.max = minDate

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