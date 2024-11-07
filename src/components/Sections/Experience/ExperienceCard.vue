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
        <ul>
            <li class="mb-2 text-sm sm:text-base">
                <a :href="props.experience.website">
                    {{ props.experience.company }}
                </a>
            </li>
            <div v-if="props.experience.content.length > 3">
                <li
                    v-for="(item, index) in props.experience.content.slice(0,1)"
                    :key="index + item"
                    class="mb-2 text-sm sm:text-base"
                >
                    {{ item }}
                </li>
                <TheAccordion :is-open="isOpen">
                    <li
                        v-for="(item, index) in props.experience.content.slice(1)"
                        :key="index + item"
                        class="mb-2 text-sm sm:text-base"
                    >
                        {{ item }}
                    </li>
                </TheAccordion>
                <button @click="isOpen = !isOpen" class="text-sm underline hover:no-underline text-gray-600">
                    {{ isOpen ? "Hide" : "Show more" }}
                </button>
            </div>
            <div v-else>
                <li
                    v-for="(item, index) in props.experience.content"
                    :key="index + item"
                    class="mb-2 text-sm sm:text-base"
                >
                    {{ item }}
                </li>
            </div>
        </ul>
    </div>
</template>

<style scoped></style>
