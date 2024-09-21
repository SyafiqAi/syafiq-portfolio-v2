<script setup lang="ts">
import SideContacts from "@/components/SideContacts/SideContacts.vue";
import TheName from "@/components/TheName.vue";
import TheTechnologies from "@/components/TheTechnologies/TheTechnologies.vue";
</script>

<template>
    <div>
        <aside>
            <SideContacts />
        </aside>
        <main>
            <TheName />
            <TheTechnologies />
        </main>
    </div>
</template>
