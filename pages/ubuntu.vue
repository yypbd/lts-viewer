<script setup lang="ts">
import {chartData} from "~/assets/data/ubuntu.js"
</script>

<template>
    <div>
        <LtsChart
            :chart-data="chartData"
        />
    </div>
</template>

<style scoped>

</style>