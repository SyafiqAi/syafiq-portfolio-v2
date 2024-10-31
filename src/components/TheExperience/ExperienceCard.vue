<script setup lang="ts">
import { type VueElement } from "vue";

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
                class="h-20 rounded-2xl"
            />
            <div class="w-4"></div>
            <div class="w-fit">
                <div class="text-xs">
                    <slot name="date"></slot>
                </div>

                <div class="text-base md:text-2xl">
                    <slot name="position"></slot>
                </div>

                <div class="text-end group-hover:underline text-xs md:text-base">
                    <slot name="company"></slot>
                </div>
            </div>
        </div>

        <hr class="my-8 w-[50%] text-center m-auto" />

        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>
