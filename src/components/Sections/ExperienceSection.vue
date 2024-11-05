<script setup lang="ts">
import TheSection from "@/common/TheSection.vue";
import { experiences } from "@/data/experience";
</script>

<template>
    <TheSection title="Exprience">
        <div class="relative">
            <div
                class="border-l-[1px] border-gray-400 absolute left-0 top-[5px] -ml-md h-[calc(100%-5px)]"
            ></div>
            <div
                v-for="(experience, index) in experiences"
                :key="index"
                :class="index !== 0 && `relative mt-sectionCard`"
            >
                <div class="text-xs relative">
                    <div
                        class="size-[7px] absolute bg-gray-600 top-[5px] -ml-[23px] rounded-full"
                    ></div>
                    {{ experience.startDate }} -
                    {{ experience.endDate ?? "Present" }}
                </div>
                <h3>{{ experience.position }}</h3>
                <ul class="ml-6">
                    <li><a href="">{{ experience.company }}</a></li>
                    <li
                        v-for="(item, index) in experience.content"
                        :key="index + item"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </TheSection>
</template>

<style scoped></style>
