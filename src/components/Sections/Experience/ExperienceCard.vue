<script setup lang="ts">
import { ref } from "vue";
import { type Experience } from "./data/experience";
import TheAccordion from "@/common/TheAccordion.vue";
const props = defineProps<{ experience: Experience }>();
const isOpen = ref(false);
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
            <ul v-if="props.experience.content.length > 3">
                <li
                    v-for="(item, index) in props.experience.content.slice(
                        0,
                        3,
                    )"
                    :key="index + item"
                    class="mb-2 text-sm sm:text-base"
                >
                    {{ item }}
                </li>
                <TheAccordion :is-open="isOpen">
                    <li
                        v-for="(item, index) in props.experience.content.slice(
                            3,
                        )"
                        :key="index + item"
                        class="mb-2 text-sm sm:text-base"
                    >
                        {{ item }}
                    </li>
                </TheAccordion>
                <button
                    @click="isOpen = !isOpen"
                    class="text-sm underline hover:no-underline"
                >
                    {{ isOpen ? "Hide" : "Show more" }}
                </button>
            </ul>
            <ul v-else>
                <li
                    v-for="(item, index) in props.experience.content"
                    :key="index + item"
                    class="mb-2 text-sm sm:text-base"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
