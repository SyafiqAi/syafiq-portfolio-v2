<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { experiences } from "@/data/experience";
</script>

<template>
    <div>
        <h2>Experience</h2>
        <TheSection
            v-for="(experience, index) in experiences"
            :key="index"
            :class="(index !== 0 && 'pt-8') + ' relative'"
            >
            <div class="border-l-2 border-black w-[full] absolute -left-[17px] -bottom-1 h-full"> </div>
            <div class="text-xs relative">
                <div class="size-2 absolute bg-black top-1 -left-5 rounded-full"></div>
                {{ experience.startDate }} -
                {{ experience.endDate ?? "Present" }}
            </div>
            <h3>{{ experience.company }}</h3>
            <ul>
                <li
                    v-for="(item, index) in experience.content"
                    :key="index + item"
                >
                    {{ item }}
                </li>
            </ul>
        </TheSection>
    </div>
</template>

<style scoped></style>
