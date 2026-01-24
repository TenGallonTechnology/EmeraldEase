<template>
  <UModal v-model:open="isOpen">
    <template #content>
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Neural Reset Therapy</h3>
        </template>

        <p class="">
          Neural Reset Therapy or NRT is a rapid muscular pain relief by working
          directly with the nervous system. Muscles are controlled by the
          nervous system. By using reciprocal inhibition and proper application
          of NRT resets the nervous system to release a muscle from excessive
          tension. With the release, the knots, pain, and tightness are gone.
          Joint mobility and posture are improved.
        </p>
      </UCard>
    </template>
  </UModal>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>();
</script>
