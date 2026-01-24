<template>
  <UContainer class="py-12">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold mb-2">
          RESPECT MASSAGE: ZERO TOLERANCE POLICY FOR
        </h1>
        <h2 class="text-2xl font-bold text-emerald-600">
          INAPPROPRIATE BEHAVIOR
        </h2>
      </div>

      <!-- Introduction -->
      <UCard class="mb-8">
        <p class="leading-relaxed">
          Our policy at Emerald Ease Massage Therapy is established to create a
          safe and professional environment for all clients and therapists
          during massage sessions. Our policy prohibits any form of sexual
          harassment, as defined and prohibited by law. All services provided
          are strictly therapeutic in nature and have
          <strong>NO</strong> sexual orientation or intent.
        </p>
      </UCard>

      <!-- Prohibited Conduct -->
      <UCard class="mb-8">
        <template #header>
          <h3
            class="text-xl font-semibold text-red-600 flex items-center gap-2"
          >
            <Icon name="heroicons:exclamation-triangle" class="w-6 h-6" />
            Prohibited Conduct
          </h3>
        </template>

        <p class="mb-4">
          The following behaviors are strictly prohibited and will result in
          immediate action:
        </p>

        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:x-circle"
              class="w-5 h-5 text-red-500 shrink-0 mt-0.5"
            />
            <span class="">
              Inappropriate comments, questions, or jokes of a sexual nature,
              sexual innuendos, suggestive remarks, offensive/derogatory
              language.
            </span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:x-circle"
              class="w-5 h-5 text-red-500 shrink-0 mt-0.5"
            />
            <span class="">
              Unwanted advances, propositions, or requests for sexual favors.
            </span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:x-circle"
              class="w-5 h-5 text-red-500 shrink-0 mt-0.5"
            />
            <span class="">
              Any unwelcome verbal or non-verbal physical conduct of a sexual
              nature, including inappropriate touching or physical contact.
            </span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:x-circle"
              class="w-5 h-5 text-red-500 shrink-0 mt-0.5"
            />
            <span class="">
              Exposing genitals, gluteal cleft, or female breasts; draping is a
              legal requirement and is not optional; proper draping will be
              enforced.
            </span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:x-circle"
              class="w-5 h-5 text-red-500 shrink-0 mt-0.5"
            />
            <span class="">
              Displaying or sharing sexually explicit materials.
            </span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:x-circle"
              class="w-5 h-5 text-red-500 shrink-0 mt-0.5"
            />
            <span class="">
              Any impaired behavior (under the influence of drugs or alcohol) or
              behavior that creates a hostile or intimidating environment.
            </span>
          </li>
        </ul>
      </UCard>

      <!-- Consequences -->
      <UCard class="mb-8">
        <template #header>
          <h3
            class="text-xl font-semibold text-amber-600 flex items-center gap-2"
          >
            <Icon name="heroicons:shield-exclamation" class="w-6 h-6" />
            Consequences to Above Behavior
          </h3>
        </template>

        <p class="mb-4">
          If a client engages in prohibited conduct, the therapist has the right
          and responsibility to:
        </p>

        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
            />
            <span class="">Terminate the Session Immediately</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
            />
            <span class=""> Report immediately to management/owner </span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
            />
            <span class=""> Require full payment for scheduled service </span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
            />
            <span class="">
              Permanently Ban the client from booking future services from the
              business
            </span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
            />
            <span class=""> File a report to law enforcement authorities </span>
          </li>
        </ul>
      </UCard>

      <!-- Footer Note -->
      <div class="text-center space-y-4">
        <p class="italic">
          *Emerald Ease has the right to refuse service to any person.
        </p>
        <p class="font-medium">
          Thank you for respecting the profession of Massage Therapy and the
          therapists and staff at Emerald Ease.
        </p>

        <UButton to="/" color="primary" variant="soft" class="mt-6">
          <Icon name="heroicons:arrow-left" class="w-4 h-4 mr-2" />
          Back to Home
        </UButton>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Code of Ethics - Emerald Ease",
  description:
    "Emerald Ease Massage Therapy Zero Tolerance Policy for inappropriate behavior. Creating a safe and professional environment for all clients and therapists.",
});
</script>
