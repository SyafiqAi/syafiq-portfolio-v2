<script setup lang="ts"></script>

<template>
    <li class="mb-2 text-sm sm:text-base">
        <div class="flex gap-2">
            <div
                class="size-1 mt-2 sm:mt-3 bg-green-500 rounded-full flex-shrink-0"
            ></div>
            <div><slot></slot></div>
        </div>
    </li>
</template>

<style scoped></style>
