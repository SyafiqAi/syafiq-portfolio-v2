<script setup lang="ts">
import GradientText from "./GradientText.vue";
defineProps<{ text: string }>();
</script>

<template>
    <h2 class="text-4xl md:text-6xl">
        <GradientText :text="text" />
    </h2>
</template>

<style scoped></style>
