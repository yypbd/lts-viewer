<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale } from 'chart.js'
import 'chartjs-adapter-date-fns'
import annotationPlugin from 'chartjs-plugin-annotation';

import {chartOptions} from "~/assets/data/options"


const props = defineProps(['chartData'])

// chart에 date 범위 표시
// https://jsfiddle.net/Leelenaleee/gyp3z28b/2/

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale, annotationPlugin)


// const data = ref(props.chartData)
let dateStrings: string[] = []
props.chartData.datasets.map((dataset) => (
    dateStrings = dateStrings.concat(dataset.data.flat())
))
let dates: number[] = dateStrings.map((dateString) => (new Date(dateString).getTime()))

// date 배열에서 min, max 찾기
// https://stackoverflow.com/questions/7143399/min-max-of-dates-in-an-array
// const maxDate = new Date(Math.max.apply(null, dates))
// const minDate = new Date(Math.min.apply(null, dates))
let maxDate = new Date(Math.max(...dates))
let minDate = new Date(Math.min(...dates))

// 앞뒤로 여유 주기
maxDate.setMonth(maxDate.getMonth() + 12)
minDate.setMonth(minDate.getMonth() - 12)


let options = ref(chartOptions)
options.value.scales.x.min = maxDate
options.value.scales.x.max = minDate
</script>

<template>
    <Bar
        id="my-chart-id"
        :options="options"
        :data="chartData"
    />
</template>

<style scoped>

</style>