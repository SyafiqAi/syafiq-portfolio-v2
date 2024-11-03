<script setup lang="ts">
const { title } = defineProps<{ title: string }>();
</script>

<template>
    <div>
        <h2>{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<style scoped></style>
