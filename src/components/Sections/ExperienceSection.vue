<script setup lang="ts">
import TheSection from '@/common/TheSection.vue';
import { experiences } from '@/data/experience';

</script>

<template>
    <TheSection title="Experience">

        <TheSection v-for="(experience, index) in experiences" :key="index" class="mb-14">
            <p class="text-xs">{{ experience.startDate }} - {{ experience.endDate ?? "Present" }}</p>
            <h3>{{ experience.company }}</h3>
            <ul>
                <li v-for="(item, index) in experience.content" :key="index+item">
                    {{ item }}
                </li>
            </ul>
        </TheSection>
    </TheSection>
    
</template>

<style scoped></style>