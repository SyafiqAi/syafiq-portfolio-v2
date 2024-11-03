<script setup lang="ts">
import TheSection from '@/common/TheSection.vue';
import { experiences } from '@/data/experience';

</script>

<template>
    <TheSection title="Experience">
        <h3 v-for="(experience, index) in experiences" :key="index">{{ experience.company }}</h3>
    </TheSection>
    
</template>

<style scoped></style>