<script setup lang="ts">
import { ref } from "vue";
import { type Experience } from "./data/experience";
import TheAccordion from "@/common/TheAccordion.vue";
import ExperienceCardListItem from "../../../common/GreenListItem.vue";
const props = defineProps<{
    experience: Experience;
    isPresentExperience: boolean;
}>();
const isOpen = ref(false);

const itemsToShow = 2;
const firstThreeExperienceContents = props.experience.content.slice(0, itemsToShow);
const theRestOfTheExperienceContents = props.experience.content.slice(itemsToShow);
</script>

<template>
    <div>
        <div class="mb-4">
            <div class="text-xs relative mb-1">
                <div
                    class="absolute h-full items-center justify-center w-0 -ml-[31.5px]"
                >
                    <div
                        :class="`size-[10px] border-[1px] border-neonGreen-500 ${isPresentExperience ? 'bg-neonGreen-500' : 'bg-darkBlue'} rounded-full flex-shrink-0 absolute top-0 translate-y-[40%] left-0 -translate-x-[50%]`"
                    />
                </div>
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
                <ExperienceCardListItem
                    v-for="(item, index) in firstThreeExperienceContents"
                    :key="index + item"
                    class="mb-2 text-sm sm:text-base"
                >
                    {{ item }}
                </ExperienceCardListItem>
            </ul>
            <TheAccordion
                :is-open="isOpen"
                v-if="theRestOfTheExperienceContents.length > 0"
            >
                <ul>
                    <ExperienceCardListItem
                        v-for="(item, index) in theRestOfTheExperienceContents"
                        :key="index + item"
                        class="mb-2 text-sm sm:text-base"
                    >
                        {{ item }}
                    </ExperienceCardListItem>
                </ul>
            </TheAccordion>
            <button
                v-if="theRestOfTheExperienceContents.length > 0"
                @click="isOpen = !isOpen"
                class="text-sm underline hover:no-underline"
            >
                {{ isOpen ? "Hide" : "Show more" }}
            </button>
        </div>
    </div>
</template>

<style scoped></style>
