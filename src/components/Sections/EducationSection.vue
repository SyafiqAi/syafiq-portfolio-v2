<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { education } from "@/data/education";
</script>

<template>
    <TheSection title="Education">
        <div
            v-for="(ed, index) in education"
            :key="index + ed.university"
            class="relative mb-sectionCard gap-1 flex flex-col *:w-fit"
        >
            <p class="text-xs">{{ ed.date }}</p>
            <p>{{ ed.level }}</p>
            <p class="font-bold">{{ ed.program }}</p>
            <a>{{ ed.university }}</a>
        </div>
    </TheSection>
</template>

<style scoped></style>
