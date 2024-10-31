<script setup lang="ts">
import { computed, type VueElement } from "vue";

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

const shadow = computed(() => "hover:shadow-[" + companyLogoMainColor + "]")
</script>

<template>
    <div
        :class="`p-8 md:p-14 md:py-10 flex flex-col bg-neutral-800 max-w-[500px] mx-2 rounded-xl shadow-2xl transition-all duration-300 shadow-black hover:scale-105 group cursor-pointer ${shadow}`"
    >
        <div class="flex justify-center items-center">
            <img
                :src="logoSrc"
                :alt="`${logoAlt} logo`"
                class="h-20 -ml-5 rounded-2xl"
            />
            <div class="w-4"></div>
            <div class="w-fit">
                <div class="text-sm">
                    <slot name="date"></slot>
                </div>

                <div class="text-2xl text-justify">
                    <slot name="position"></slot>
                </div>

                <div class="text-end group-hover:underline">
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
