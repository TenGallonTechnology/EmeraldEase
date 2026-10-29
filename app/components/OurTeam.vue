<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t-2 border-gray-100 mt-8 pt-4"
  >
    <!-- About Us Section -->
    <div class="lg:col-span-7">
      <h3 class="text-2xl font-light mb-4 flex items-center gap-2">
        About Us
        <Icon
          name="heroicons:information-circle"
          class="w-6 h-6 text-primary"
        />
      </h3>
      <NuxtImg
        src="/wholeTeam.jpg"
        alt="Emerald Ease Team"
        class="rounded-lg w-full"
        loading="lazy"
      />
      <p class="text-sm mt-2">
        Emerald Ease is a locally owned business with licensed massage
        therapists offering relaxing and therapeutic massages. We
        offer many modality options such as Swedish, deep tissue, prenatal,
        aromatherapy, warm stones, couples, chair massage, Therapeutic, Cupping
        Therapy, and Rossiter Stretching.
      </p>
    </div>

    <!-- Our Team Carousel Section -->
    <div class="lg:col-span-5">
      <h3
        class="text-2xl font-light text-center mb-4 flex items-center justify-center gap-2"
      >
        Our Team
        <Icon name="heroicons:heart" class="w-6 h-6 text-primary" />
      </h3>

      <UCarousel
        v-slot="{ item }"
        :items="teamMembers"
        :ui="{
          item: 'basis-full',
          container: 'rounded-lg',
        }"
        class="rounded-lg overflow-hidden"
        arrows
        loop
        :autoplay="!isBioOpen && { delay: 2000 }"
      >
        <div class="relative w-full h-146.25">
          <NuxtImg
            :src="item.image"
            :alt="item.name"
            class="rounded-lg w-full h-full object-cover"
            loading="lazy"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-white/55 backdrop-blur-md rounded-b-lg p-3 text-center ring-1 ring-white/40"
          >
            <div class="flex items-center justify-center gap-2">
              <h5 class="text-lg font-semibold text-gray-900 drop-shadow-sm">
                {{ item.name }}
              </h5>
              <UButton
                class="bg-white/90 text-gray-900 shadow-sm ring-1 ring-gray-900/10 backdrop-blur-sm hover:bg-white sm:hidden"
                size="xs"
                color="neutral"
                variant="ghost"
                icon="i-heroicons-information-circle"
                :aria-label="`Read ${item.name}'s bio`"
                @click="openBio(item)"
              >
                Bio
              </UButton>
            </div>
            <p class="text-sm mt-1 text-right hidden sm:block text-gray-800">
              {{ item.description }}
            </p>
          </div>
        </div>
      </UCarousel>
    </div>
  </div>

  <UModal v-model:open="isBioOpen">
    <template #content>
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">{{ activeMember?.name }}</h3>
        </template>

        <p class="text-sm text-gray-800">{{ activeMember?.description }}</p>

        <UButton
          class="mt-4"
          block
          color="primary"
          variant="soft"
          @click="isBioOpen = false"
        >
          Close
        </UButton>
      </UCard>
    </template>
  </UModal>
</template>

<script setup lang="ts">
interface TeamMember {
  name: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Andrea",
    image: "/andrea.jpg",
    description:
      "Andrea Craft, LMT owner of Emerald Ease, became licensed as a therapist in 2021. She was an educator in Laurens County for 14 years before becoming a LMT. She offers Swedish, therapeutic, prenatal, warm stones, couples, cupping therapy, and chair massages.",
  },
  {
    name: "Codi",
    image: "/codi.jpg",
    description:
      "Codi's passion for massage therapy is providing personalized care that meets each client's individual needs. He approaches massage therapy from a biblical worldview, seeing it as a tool God has given us to promote healing and well-being. While his primary focus is helping clients manage pain and improve their quality of life, he also enjoys helping those dealing with stress and anxiety find time to relax, unwind, and recharge.",
  },
  {
    name: "Natalie",
    image: "/natalie.jpg",
    description:
      "Natalie Newsome, LMT has been a massage therapist for over 14 years. She has experience in Swedish, Neuromuscular, and Deep Tissue Massage. She is also a yoga instructor and a potter.",
  },
  {
    name: "Van",
    image: "/van.jpg",
    description:
      "Van has been working in a clinical setting as a licensed therapist for over 13 years and is also an Army Veteran. He is available for therapeutic, warm stones, & pre-natal massage sessions.",
  },
  {
    name: "Coleen",
    image: "/coleen.jpg",
    description:
      "Coleen will be helping with scheduling and making sure your experience at Emerald Ease is exceptional! Give us a call and let Coleen help get you scheduled for an appointment!",
  },
  {
    name: "Autumn",
    image: "/autumn.jpg",
    description:
      "Autumn has been a Licensed Massage Therapist over four years with experience in several different massage modalities. She enjoys walking, listening to music, and hanging out with her fur babies.",
  },
  {
    name: "Megan",
    image: "/megan.jpg",
    description:
      "Megan has over 26 years experience as a LMT. She specializes in relaxing Swedish massage (NOT deep tissue), warm stones, and has extended training in pregnancy massage (pre-natal & peri-natal) for expectant/new mothers. If you just want to relax and recharge, book with Megan!",
  },
];

const activeMember = ref<TeamMember | null>(null);
const isBioOpen = ref(false);

function openBio(member: TeamMember) {
  activeMember.value = member;
  isBioOpen.value = true;
}
</script>
