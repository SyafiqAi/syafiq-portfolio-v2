<script setup lang="ts">
import SectionTitle from "../SectionTitle.vue";

const { title } = defineProps<{ title?: string }>();
</script>

<template>
    <div class="py-section">
        <SectionTitle class="text-center mb-sectionTitle" v-if="!!title">{{ title }}</SectionTitle>
        <slot></slot>
    </div>
</template>

<style scoped></style>
