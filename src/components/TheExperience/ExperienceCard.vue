<script setup lang="ts">
import type { VueElement } from "vue";

export interface Experience {
    company: string;
    position: string;
    date: string;
    content: VueElement;
}
</script>

<template>
    <div
        class="p-8 text-sm md:text-base md:p-14 md:py-10 flex flex-col bg-neutral-800 max-w-[500px] mx-2 shadow-black shadow-2xl rounded-xl"
    >
        <div class="flex justify-center">
            <div class="w-fit">
                <div class="text-sm">
                    <slot name="date"></slot>
                </div>

                <div class="text-2xl text-justify">
                    <slot name="position"></slot>
                </div>

                <div class="text-end">
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
