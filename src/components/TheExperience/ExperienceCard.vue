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
    <div>
        <div
            class="p-4 flex flex-col bg-neutral-800 max-w-[500px] mx-2 shadow-black shadow-2xl rounded-xl"
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

            <hr class="my-4 w-[50%] text-center m-auto" />

            <div class="py-6">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
