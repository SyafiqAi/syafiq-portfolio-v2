<script setup lang="ts">
import SideContacts from "@/components/SideContacts/SideContacts.vue";
import TheName from "@/components/TheName.vue";
import TheTechnologies from "@/components/TheTechnologies/TheTechnologies.vue";
</script>

<template>
    <div>
        <main class="relative">
        <aside>
            <SideContacts />
        </aside>
            <TheName />
            <TheTechnologies />
        </main>
    </div>
</template>
