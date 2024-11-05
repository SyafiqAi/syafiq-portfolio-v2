<script setup lang="ts">
import { ref } from "vue";
import { type Experience } from "./data/experience";
import TheAccordion from "@/common/TheAccordion.vue";
const props = defineProps<{ experience: Experience }>();
const isOpen = ref(false);
</script>

<template>
    <div>
        <div class="text-xs relative">
            <div
                class="size-[7px] absolute bg-gray-600 top-[5px] -ml-[23px] rounded-full"
            ></div>
            {{ props.experience.startDate }} -
            {{ props.experience.endDate ?? "Present" }}
        </div>
        <h3>{{ props.experience.position }}</h3>
        <ul class="">
            <li class="mb-2 text-sm sm:text-base">
                <a :href="props.experience.website">
                    {{ props.experience.company }}
                </a>
            </li>
            <TheAccordion :is-open="isOpen">
                <li
                    v-for="(item, index) in props.experience.content"
                    :key="index + item"
                    class="mb-2 text-sm sm:text-base"
                >
                    {{ item }}
                </li>
            </TheAccordion>
            <button @click="isOpen = !isOpen" class="text-sm">
                {{ isOpen ? "Hide" : "Show more" }}
            </button>
        </ul>
    </div>
</template>

<style scoped></style>
