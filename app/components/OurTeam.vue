<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t-2 border-gray-100 mt-8 pt-4"
  >
    <!-- About Us Section -->
    <div class="lg:col-span-7">
      <h3 class="text-2xl font-light mb-4 flex items-center gap-2">
        About Us
        <Icon name="heroicons:information-circle-solid" class="w-6 h-6" />
      </h3>
      <NuxtImg
        src="/wholeTeam.jpg"
        alt="Emerald Ease Team"
        class="rounded-lg w-full"
        loading="lazy"
      />
      <p class="text-sm text-gray-600 mt-2">
        Emerald Ease is a locally owned business with licensed massage
        therapists offering relaxing and therapeutic massages and bodywork. We
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
        <Icon name="heroicons:heart" class="w-6 h-6" />
      </h3>

      <UCarousel
        v-slot="{ item }"
        :items="teamMembers"
        :ui="{
          item: 'basis-full',
          container: 'rounded-lg'
        }"
        class="rounded-lg overflow-hidden"
        arrows
        loop
        :autoplay="{ delay: 2000 }"
      >
        <div class="relative w-full h-[585px]">
          <NuxtImg
            :src="item.image"
            :alt="item.name"
            class="rounded-lg w-full h-full object-cover"
            loading="lazy"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-gray-50 bg-opacity-75 rounded-b-lg p-3 text-center"
          >
            <h5 class="text-lg font-semibold text-gray-900">{{ item.name }}</h5>
            <p class="text-sm text-gray-800 mt-1 text-right hidden sm:block">
              {{ item.description }}
            </p>
          </div>
        </div>
      </UCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'Andrea',
    image: '/andrea.jpg',
    description:
      'Andrea Craft, LMT owner of Emerald Ease, became licensed as a therapist in 2021. She was an educator in Laurens County for 14 years before becoming a LMT. She offers Swedish, therapeutic, prenatal, warm stones, couples, cupping therapy, and chair massages.'
  },
  {
    name: 'Codi',
    image: '/codi.jpg',
    description:
      'Codi is a LMT, CPT, and a Deputy in Laurens County. He offers therapeutic massages that include deep tissue, trigger point release, and myofascial release with the goal of combining relaxation, pain management, and recovery.'
  },
  {
    name: 'Natalie',
    image: '/natalie.jpg',
    description:
      'Natalie Newsome, LMT has been a massage therapist for over 14 years. She has experience in Swedish, Neuromuscular, and Deep Tissue Massage. She is also a yoga instructor and a potter.'
  },
  {
    name: 'Van',
    image: '/van.jpg',
    description:
      'Van has been working in a clinical setting as a licensed therapist for over 13 years and is also an Army Veteran. He is available for therapeutic, warm stones, & pre-natal massage sessions.'
  },
  {
    name: 'Coleen',
    image: '/coleen.jpg',
    description:
      'Coleen will be helping with scheduling and making sure your experience at Emerald Ease is exceptional! Give us a call and let Coleen help get you scheduled for an appointment!'
  },
  {
    name: 'Autumn',
    image: '/autumn.jpg',
    description:
      'Autumn has been a Licensed Massage Therapist over four years with experience in several different massage modalities. She enjoys walking, listening to music, and hanging out with her fur babies.'
  }
]
</script>
