<script setup lang="ts">
import { ref } from "vue";
import { type Experience } from "./data/experience";
import TheAccordion from "@/common/TheAccordion.vue";
const props = defineProps<{ experience: Experience; opened?: boolean }>();
const isOpen = ref(props.opened ?? false);
</script>

<template>
    <div>
        <div class="mb-4">
            <div class="text-xs relative mb-1">
                <button
                    @click="isOpen = !isOpen"
                    :class="`
                    flex justify-center items-center scale-[.6] 
                    md:hover:text-[rgb(0,220,130)] md:hover:bg-[rgb(2,4,32)] 
                    transition-colors
                    absolute text-sm border border-[rgb(0,220,130)] text-[rgb(0,220,130)] rounded-md size-[31px] 
                    -top-[7px] -ml-[35px] ${!isOpen ? 'bg-[rgb(0,220,130)] text-[rgb(2,4,32)]' : 'bg-[rgb(2,4,32)]'}`"
                >
                    <div
                        :class="`flex justify-center scale-125 
                    ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-500 `"
                    >
                        &#x276F;
                    </div>
                </button>
                {{ props.experience.startDate }} -
                {{ props.experience.endDate ?? "Present" }}
            </div>
            <div class="font-bold text-lg flex justify-between">
                <p>{{ props.experience.position }}</p>
            </div>
            <a
                :href="props.experience.website"
                class="mb-2 text-sm sm:text-base"
            >
                {{ props.experience.company }}
            </a>
        </div>
        <div>
            <TheAccordion :is-open="isOpen">
                <ul>
                    <li
                        v-for="(item, index) in props.experience.content"
                        :key="index + item"
                        class="mb-2 text-sm sm:text-base"
                    >
                    <div class="flex gap-2">
                        <div class="size-1 mt-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <div>{{ item }}</div>
                    </div>
                    </li>
                </ul>
            </TheAccordion>
        </div>
    </div>
</template>

<style scoped>
/* button {
    border: 1px solid rgb(0,220,130);
    border-radius: 5px;
    padding: 3px;

} */
</style>
