<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { education } from "@/data/education";
</script>

<template>
    <div>
        <h2>Education</h2>
        <TheSection
            v-for="(ed, index) in education"
            :key="index + ed.university"
        >
            <p class="text-xs">{{ ed.date }}</p>
            <p>{{ ed.level }}</p>
            <p class="my-0 font-bold">{{ ed.program }}</p>
            <p>{{ ed.university }}</p>
        </TheSection>
    </div>
</template>

<style scoped></style>
