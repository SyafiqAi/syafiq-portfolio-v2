<script setup lang="ts">
const { title } = defineProps<{ title?: string }>();
</script>

<template>
    <section class="ml-[20px]">
        <h2 v-if="!!title">{{ title }}</h2>
        <slot></slot>
    </section>
</template>

<style scoped></style>
