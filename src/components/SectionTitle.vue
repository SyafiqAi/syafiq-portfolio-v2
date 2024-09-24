<script setup lang="ts">
import GradientText from "./GradientText.vue";
</script>

<template>
    <h2 class="font-extralight text-4xl md:text-6xl">
        <GradientText><slot></slot></GradientText>
    </h2>
</template>

<style scoped></style>
