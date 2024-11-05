<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { education } from "@/data/education";
</script>

<template>
    <TheSection title="Education">
        <div
            v-for="(ed, index) in education"
            :key="index + ed.university"
            :class="index !== 0 && `relative mt-sectionCard`"
        >
            <p class="text-xs">{{ ed.date }}</p>
            <p>{{ ed.level }}</p>
            <p class="my-0 font-bold">{{ ed.program }}</p>
            <p>{{ ed.university }}</p>
        </div>
    </TheSection>
</template>

<style scoped></style>
