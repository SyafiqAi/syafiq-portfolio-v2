<script setup lang="ts">
import { type VueElement } from "vue";
import TheAccordion from "../Common/TheAccordion.vue";

export interface Experience {
    company: string;
    position: string;
    date: string;
    content: VueElement;
}

const { logoSrc, logoAlt, companyLogoMainColor } = defineProps<{
    logoSrc: string;
    logoAlt: string;
    companyLogoMainColor: string;
    isOpen: boolean;
    companyWebsiteUrl: string;
}>();
</script>

<template>
    <div
        ref="card"
        :class="`p-7 md:p-14 md:py-10 flex flex-col bg-neutral-800 w-[90vw] md:w-[500px] mx-2 rounded-xl shadow-2xl transition-all duration-300 shadow-black group cursor-pointer ${companyLogoMainColor}`"
    >
        <div class="flex justify-center items-center">
            <img
                :src="logoSrc"
                :alt="`${logoAlt} logo`"
                class="max-h-20 max-w-20 rounded-2xl"
            />
            <div class="w-4"></div>
            <div class="w-fit">
                <div class="text-xs">
                    <slot name="date"></slot>
                </div>

                <div class="text-base md:text-2xl">
                    <slot name="position"></slot>
                </div>

                <div class="text-end text-xs md:text-base"  >
                    <a :href="companyWebsiteUrl" class="hover:underline" target="_blank" @click="e => {e.stopPropagation()}">
                        <slot name="company"></slot>
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

<style scoped></style>
