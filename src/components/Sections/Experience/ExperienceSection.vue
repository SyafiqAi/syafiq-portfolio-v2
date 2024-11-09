<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { experiences } from "@/components/Sections/Experience/data/experience";
import ExperienceCard from "./ExperienceCard.vue";
</script>

<template>
    <TheSection title="Experience">
        <div class="relative mx-md">
            <div
                class="border-l-[1px] border-neonGreen-300 absolute left-0 top-[5px] -ml-md h-[calc(100%-5px)]"
            ></div>
            <ExperienceCard
                v-for="(experience, index) in experiences"
                :key="index"
                :class="index !== 0 && `relative mt-sectionCard`"
                :experience="experience"
                :is-present-experience="index === 0"
            />
        </div>
    </TheSection>
</template>

<style scoped></style>
