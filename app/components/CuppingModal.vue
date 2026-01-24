<template>
  <UModal v-model:open="isOpen">
    <template #content>
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Dry Cupping Therapy</h3>
        </template>

        <p>
          Dry Cupping therapy applies pressure on the body surface using glass,
          plastic, or silicone cups. Cupping is a deeper tissue modality that
          creates a vacuum or suction which stimulates and increases blood flow,
          which can help relieve joint and muscle pain and tension. It also
          loosens soft connective tissue and adhesions, moves stagnation &amp;
          reduces inflammation, accelerates recovery, increases the function of
          the lymphatic and circulatory systems and promotes overall relaxation
          and well-being.
        </p>
        <p class="mt-2 text-sm">*consent waiver required before session</p>
      </UCard>
    </template>
  </UModal>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>();
</script>
