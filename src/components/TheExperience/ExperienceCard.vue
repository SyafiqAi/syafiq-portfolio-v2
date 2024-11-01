<script setup lang="ts">
import { onMounted, ref, useTemplateRef, type VueElement } from "vue";
import TheAccordion from "../Common/TheAccordion.vue";
import CaretDownIcon from "../icons/CaretDownIcon.vue";
import ExternalLinkIcon from "../icons/ExternalLinkIcon.vue";

export interface Experience {
    company: string;
    position: string;
    date: string;
    content: VueElement;
}

const { logoSrc, company, companyLogoMainColor } = defineProps<{
    logoSrc: string;
    company: string;
    companyLogoMainColor: string;
    companyWebsiteUrl: string;
}>();

const isOpen = ref(false);

const cardRef = useTemplateRef("card-ref");

onMounted(() => {
    cardRef.value?.style.setProperty("--shadow-color", companyLogoMainColor);
});
</script>

<template>
    <div
        :class="`relative p-7 sm:px-14 sm:py-10 flex flex-col bg-neutral-800 w-[90vw] sm:w-[500px] mx-2 rounded-xl shadow-2xl transition-all duration-300 ${isOpen && 'shadow-[color:--shadow-color]'} hover:shadow-[color:--shadow-color] group cursor-pointer`"
        ref="card-ref"
        @click="isOpen = !isOpen"
    >
            <CaretDownIcon
                :class="`absolute top-4 right-4 h-2 ${isOpen && 'rotate-180'} transition-transform duration-500 opacity-50`"
            />
        <div class="flex gap-4 justify-center items-center">
            <img
                :src="logoSrc"
                :alt="`${company} logo`"
                class="max-h-20 max-w-20 rounded-2xl"
            />
            <div class="w-fit">
                <div class="text-xs">
                    <slot name="date"></slot>
                </div>

                <div class="text-base sm:text-2xl">
                    <slot name="position"></slot>
                </div>

                <div class="flex justify-end text-xs sm:text-base">
                    <a
                        :href="companyWebsiteUrl"
                        class="hover:underline"
                        target="_blank"
                        @click="
                            (e) => {
                                e.stopPropagation();
                            }
                        "
                    >
                        <div class="flex place-items-center gap-1">
                            {{ company }}
                            <ExternalLinkIcon class="h-4 w-fit" />
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <TheAccordion :is-open="isOpen">
            <hr class="my-8 w-[50%] text-center m-auto" />
            <div>
                <slot></slot>
            </div>
        </TheAccordion>
    </div>
</template>

<style scoped>
:root {
    --shadow-color: #000000;
}
</style>
