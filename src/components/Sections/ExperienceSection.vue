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
            :class="index !== 0 && 'mt-14'"
        >
            <p class="text-xs">
                {{ experience.startDate }} -
                {{ experience.endDate ?? "Present" }}
            </p>
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
