<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { experiences } from "@/data/experience";
</script>

<template>
    <div>
        <h2>Experience</h2>

        <div class="relative">
            <div
                class="border-l-[1px] border-[rgba(0,220,128,0.38)] absolute left-0 top-1 -ml-md h-full"
            ></div>
            <TheSection
                v-for="(experience, index) in experiences"
                :key="index"
                :class="(index !== 0 && '') + ' pb-8 relative'"
            >
                <div class="text-xs relative">
                    <div
                        class="size-[7px] absolute bg-[rgb(0,220,130)] top-[5px] -ml-[23px] rounded-full"
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
