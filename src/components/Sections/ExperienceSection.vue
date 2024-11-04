<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { experiences } from "@/data/experience";
</script>

<template>
    <div>
        <h2>Experience</h2>

        <div class="relative">
            <div
                class="border-l-[1px] border-gray-400 absolute left-0 top-2 h-full"
            ></div>
            <TheSection
                v-for="(experience, index) in experiences"
                :key="index"
                :class="(index !== 0 && '') + ' pb-8 relative'"
            >
                <div class="text-xs relative">
                    <div
                        class="size-[7px] absolute bg-gray-600 top-1 -left-[23px] rounded-full"
                    ></div>
                    {{ experience.startDate }} -
                    {{ experience.endDate ?? "Present" }}
                </div>
                <h3>{{ experience.company }}</h3>
                <ul class="ml-6">
                    <li
                        v-for="(item, index) in experience.content"
                        :key="index + item"
                    >
                        {{ item }}
                    </li>
                </ul>
            </TheSection>
        </div>
    </div>
</template>

<style scoped></style>
