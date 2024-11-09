<script setup lang="ts">
const { title } = defineProps<{ title?: string }>();
</script>

<template>
    <section class="mb-section">
        <h2 v-if="!!title">{{ title }}</h2>
        <div class="md:mx-md">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped></style>
