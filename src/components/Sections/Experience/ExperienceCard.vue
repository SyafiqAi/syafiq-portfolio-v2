<script setup lang="ts">
import { ref } from "vue";
import { type Experience } from "./data/experience";
import TheAccordion from "@/common/TheAccordion.vue";
const props = defineProps<{ experience: Experience }>();
const isOpen = ref(false);

const firstThreeExperienceContents = props.experience.content.slice(0,3);
const theRestOfTheExperienceContents = props.experience.content.slice(3);
</script>

<template>
    <div>
        <div class="mb-4">
            <div class="text-xs relative mb-1">
                <div
                    class="size-[7px] absolute bg-[rgb(0,220,130)] top-[5px] -ml-[23px] rounded-full"
                ></div>
                {{ props.experience.startDate }} -
                {{ props.experience.endDate ?? "Present" }}
            </div>
            <p class="font-bold text-lg">{{ props.experience.position }}</p>
            <a
                :href="props.experience.website"
                class="mb-2 text-sm sm:text-base"
            >
                {{ props.experience.company }}
            </a>
        </div>
        <div>
            <ul>
                <li
                    v-for="(item, index) in firstThreeExperienceContents"
                    :key="index + item"
                    class="mb-2 text-sm sm:text-base"
                >
                    {{ item }}
                </li>
                <TheAccordion :is-open="isOpen" v-if="theRestOfTheExperienceContents.length > 0">
                    <li
                        v-for="(item, index) in theRestOfTheExperienceContents"
                        :key="index + item"
                        class="mb-2 text-sm sm:text-base"
                    >
                        {{ item }}
                    </li>
                </TheAccordion>
                <button
                    v-if="theRestOfTheExperienceContents.length > 0"
                    @click="isOpen = !isOpen"
                    class="text-sm underline hover:no-underline"
                >
                    {{ isOpen ? "Hide" : "Show more" }}
                </button>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
