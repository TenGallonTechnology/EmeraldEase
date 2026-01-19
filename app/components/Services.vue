<template>
  <div>
    <!-- Introduction Section -->
    <div class="mt-6">
      <h3 class="text-2xl mb-3 flex items-center gap-2">
        Which massage is right for me
        <Icon name="heroicons:question-mark-circle" class="w-6 h-6" />
      </h3>
      <p class="text-gray-700">
        Massage Therapy is a broad umbrella that includes many different styles
        and modalities. At Emerald Ease, our therapists are trained in several
        types of modalities. Choosing the right therapist for you, and the
        correct modality that will meet your goals, will help to ensure you get
        the most out of your session. Please read the descriptions to help
        decide which modality will be most suited for you based on your current
        circumstances and needs or goals. If you are still unsure of what
        massage treatment will support you the most, contact Emerald Ease and
        our staff will help advise you.
      </p>
    </div>

    <!-- Services Header -->
    <div id="services" class="border-t-2 border-gray-100 mt-8 pt-4 text-center">
      <h3 class="text-2xl flex items-center justify-center gap-2">
        Our Services
        <Icon name="heroicons:tag" class="w-6 h-6" />
      </h3>
    </div>

    <div class="h-px bg-gray-200 my-4"></div>

    <!-- Services Grid - Row 1 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <!-- Therapeutic Massage -->
      <UCard>
        <template #header>
          <h5 class="text-center text-lg font-semibold">Therapeutic Massage</h5>
        </template>

        <UAccordion
          :items="[
            {
              label: 'More Info',
              icon: 'i-heroicons-information-circle',
              content:
                'This session is different for each client and tailored to their specific goals and needs. This massage can be purely relaxing or focused on specific problem areas, or blended with both! A combination and variety of massage techniques and tools may be used, ranging from Swedish massage, light/medium/firm pressure, myofascial release, trigger point, muscle stripping, deep tissue massage using bamboo sticks, cupping, or passive stretching. The therapist will discuss your pressure preference and goals for the session when you arrive, and will focus on the things that are important to you. This massage treatment helps relieve stress or pain, release muscle tension, and improves overall health.'
            }
          ]"
        />

        <ul class="list-disc list-inside mt-3 text-gray-700">
          <li>30 Minute - $65</li>
          <li>60 Minute - $100</li>
          <li>90 Minute - $150</li>
        </ul>

        <UButton
          to="https://www.vagaro.com/emeraldease/book-now"
          external
          target="_blank"
          color="primary"
          variant="ghost"
          block
          class="mt-3"
          icon="i-heroicons-calendar"
        >
          Book Now
        </UButton>
      </UCard>

      <!-- Warm Stone Massage -->
      <UCard>
        <template #header>
          <h5 class="text-center text-lg font-semibold">Warm Stone Massage</h5>
        </template>

        <UAccordion
          :items="[
            {
              label: 'More Info',
              icon: 'i-heroicons-information-circle',
              content:
                'A delightful warm treatment using smooth, heated, basalt stones to ease tension and pain and relax your body.'
            }
          ]"
        />

        <ul class="list-disc list-inside mt-3 text-gray-700">
          <li>60 Minute - $110</li>
        </ul>

        <UButton
          to="https://www.vagaro.com/emeraldease/book-now"
          external
          target="_blank"
          color="primary"
          variant="ghost"
          block
          class="mt-3"
          icon="i-heroicons-calendar"
        >
          Book Now
        </UButton>
      </UCard>

      <!-- Sticks and Stones Massage -->
      <UCard>
        <template #header>
          <h5 class="text-center text-lg font-semibold">
            Sticks and Stones Massage
          </h5>
        </template>

        <UAccordion
          :items="[
            {
              label: 'More Info',
              icon: 'i-heroicons-information-circle',
              content:
                'Embrace the warmth this winter with our Sticks & Stones massage — a luxurious seasonal treatment that melts away tension and soothes the senses. Smooth, warm bamboo sticks glide across the body to stretch and release tight muscles, while warm stones deliver deep, comforting heat to melt stress from head to toe-- making it ideal for those who love the intensity of deep tissue work with an added element of comforting heat. This unique fusion of warmth and flow promotes circulation, eases sore muscles, and leaves you feeling balanced, renewed, and deeply relaxed. A perfect cozy escape for chilly days — Sticks & Stones is available for a limited time only during the colder months.'
            }
          ]"
        />

        <ul class="list-disc list-inside mt-3 text-gray-700">
          <li>60 Minute - $110</li>
        </ul>

        <UButton
          to="https://www.vagaro.com/emeraldease/book-now"
          external
          target="_blank"
          color="primary"
          variant="ghost"
          block
          class="mt-3"
          icon="i-heroicons-calendar"
        >
          Book Now
        </UButton>
      </UCard>

      <!-- Bodywork -->
      <UCard>
        <template #header>
          <h5 class="text-center text-lg font-semibold">Bodywork</h5>
        </template>

        <UAccordion
          :items="[
            {
              label: 'More Info',
              icon: 'i-heroicons-information-circle',
              content:
                'This session will focus on specific issues or problem areas and a primary goal. Minimal cream/gel is used. This is individually tailored to each client and their desired outcome. The therapist and client will work together to address the goals of the client. There will be talking during this session, along with interaction from the client. The goal is to improve a specific issue while targeting specific muscle groups, rather than simply helping you to relax. This session may involve a variety of techniques, passive, active, or resistive stretching techniques, Neural Reset Therapy, Cupping, Rossiter Stretch Technique, and other manual massage techniques. This session is led by the therapist who will make suggestions within the scope of practice to achieve the goals for the specific outcome that is desired to help improve health and overall wellness for the body\'s connective tissues and the muscular system. This is great for people who want to improve ROM or mobility, specific pain issues, have carpal tunnel, TMJ, plantar fasciitis, Golfer\'s/Tennis elbow, frozen shoulder, sciatic pain, or to increase recovery and mobility for athletes. This style of bodywork holistically looks at the entire body, with its focus being treating pain, structural dysfunctions, improving injury rehabilitation, and helping eliminate acute or chronic pain. The therapist may perform assessments to find out what structures are causing your pain or your postural dysfunction and the session will be focused around treating the muscles that are causing the pain in your body. These sessions may need to be more regular to begin with and your therapist may help build a treatment plan that includes some self-care exercises or stretching to be done at home to help improve your progress.'
            }
          ]"
        />

        <ul class="list-disc list-inside mt-3 text-gray-700">
          <li>90 Minute - $150</li>
        </ul>

        <UButton
          to="https://www.vagaro.com/emeraldease/book-now"
          external
          target="_blank"
          color="primary"
          variant="ghost"
          block
          class="mt-3"
          icon="i-heroicons-calendar"
        >
          Book Now
        </UButton>
      </UCard>
    </div>

    <!-- Services Grid - Row 2 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      <!-- Pregnancy Massage -->
      <UCard>
        <template #header>
          <h5 class="text-center text-lg font-semibold">Pregnancy Massage</h5>
        </template>

        <UAccordion
          :items="[
            {
              label: 'More Info',
              icon: 'i-heroicons-information-circle',
              content:
                'Pre-natal therapy is specifically tailored for the expectant mother\'s needs (past the first trimester) as her body goes through the dramatic changes of pregnancy; enhances the function of muscles and joints, improves circulation and general body tone, and relieves mental and physical fatigue.'
            }
          ]"
        />

        <ul class="list-disc list-inside mt-3 text-gray-700">
          <li>30 Minute - $65</li>
          <li>60 Minute - $100</li>
        </ul>

        <UButton
          to="https://www.vagaro.com/emeraldease/book-now"
          external
          target="_blank"
          color="primary"
          variant="ghost"
          block
          class="mt-3"
          icon="i-heroicons-calendar"
        >
          Book Now
        </UButton>
      </UCard>

      <!-- Couples Massage -->
      <UCard>
        <template #header>
          <h5 class="text-center text-lg font-semibold">Couples Massage</h5>
        </template>

        <UAccordion
          :items="[
            {
              label: 'More Info',
              icon: 'i-heroicons-information-circle',
              content:
                'Enjoy an hour massage with your partner, family member, or friend. Great for an anniversary or birthday, or mother/daughter time, or a girl\'s day. Two tables and two licensed therapists mean double the relaxation!'
            }
          ]"
        />

        <div class="mt-3 flex items-start gap-2 text-sm text-cyan-600">
          <Icon
            name="heroicons:information-circle"
            class="w-5 h-5 flex-shrink-0"
          />
          <span>You must call to book this appointment!</span>
        </div>

        <ul class="list-disc list-inside mt-3 text-gray-700">
          <li>60 Minute - $200</li>
        </ul>

        <UButton
          variant="ghost"
          to="tel:4786970721"
          color="primary"
          block
          class="mt-3"
          icon="i-heroicons-phone"
        >
          Call Now to Book
        </UButton>
      </UCard>

      <!-- Chair Massage -->
      <UCard>
        <template #header>
          <h5 class="text-center text-lg font-semibold">Chair Massage</h5>
        </template>

        <UAccordion
          :items="[
            {
              label: 'More Info',
              icon: 'i-heroicons-information-circle',
              content:
                'A 10/15-minute clothed massage focused on the back, shoulders, neck, arms, and head. The client is in a seated position in a specialized, adjustable, padded chair. This massage is intended to relax the muscles, improve flexibility and movement, reduce stress, enhance circulation, and increase overall well-being. This service is offered for businesses or larger groups. We will travel and come to your office! Call Emerald Ease for a quote. Individual chair massages are not currently offered at Emerald Ease.'
            }
          ]"
        />

        <div class="mt-3 flex items-start gap-2 text-sm text-cyan-600">
          <Icon
            name="heroicons:information-circle"
            class="w-5 h-5 flex-shrink-0"
          />
          <span>You must call to book this appointment!</span>
        </div>

        <ul class="list-disc list-inside mt-3 text-gray-700">
          <li>Corporate - $100 per hour, per therapist + travel</li>
        </ul>

        <UButton
          variant="ghost"
          to="tel:4786970721"
          color="primary"
          block
          class="mt-3"
          icon="i-heroicons-phone"
        >
          Call Now to Book
        </UButton>
      </UCard>
    </div>

    <!-- Modals -->
    <RstModal v-model="showRst" />
    <CuppingModal v-model="showCupping" />
    <NrtModal v-model="showNrt" />
  </div>
</template>

<script setup lang="ts">
const showRst = ref(false)
const showNrt = ref(false)
const showCupping = ref(false)
</script>
