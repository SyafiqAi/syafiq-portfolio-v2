<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import ExternalLinkIcon from "../icons/ExternalLinkIcon.vue";

const { university, level, program, logo, logoMainColor } = defineProps<{
    university: string;
    date: string;
    level: string;
    program: string;
    logo: string;
    website: string;
    logoMainColor: string;
}>();

const cardRef = useTemplateRef("card-ref");

onMounted(() => {
    cardRef.value?.style.setProperty("--shadow-color", logoMainColor);
});
</script>

<template>
    <a :href="website" target="_blank" class="group">
        <div
            :class="`relative p-7 sm:px-14 sm:py-10 flex flex-col bg-neutral-800 w-[90vw] sm:w-[500px] mx-2 rounded-xl shadow-2xl transition-all duration-300 sm:hover:shadow-[color:--shadow-color] cursor-pointer`"
            ref="card-ref"
        >
            <ExternalLinkIcon
                class="h-4 w-fit absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity"
            />
            <div class="flex gap-4 justify-center items-center font-light md:font-extralight">
                <img
                    :src="logo"
                    :alt="`${university} logo`"
                    class="max-h-20 max-w-20 rounded-2xl"
                />
                <div class="w-full">
                    <!-- <div class="text-xs">
                        {{ date }}
                    </div> -->
                    <div class="text-xs sm:text-base">
                        <span>{{ level }}</span>
                    </div>
                    <div class="text-base sm:text-2xl">
                        {{ program }}
                    </div>
                    <div
                        class="flex justify-end text-xs sm:text-base group-hover:underline"
                    >
                        {{ university }}
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped></style>
