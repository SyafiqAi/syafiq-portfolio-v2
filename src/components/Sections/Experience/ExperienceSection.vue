<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { experiences } from "@/components/Sections/Experience/data/experience";
import ExperienceCard from "./ExperienceCard.vue";
</script>

<template>
    <TheSection title="Experience">
        <div class="relative">
            <div
                class="border-l-[1px] border-[rgb(47,117,88)] absolute left-0 top-[5px] -ml-md h-[calc(100%-5px)]"
            ></div>
            <ExperienceCard
                v-for="(experience, index) in experiences"
                :key="index"
                :class="index !== 0 && `relative mt-sectionCard`"
                :experience="experience"
            />
        </div>
    </TheSection>
</template>

<style scoped></style>
