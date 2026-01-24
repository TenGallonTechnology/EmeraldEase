<template>
  <UContainer class="py-6">
    <!-- Business Hours Banner -->
    <UCard
      class="mt-5 mb-5 bg-emerald-100/70 border-emerald-200/70 backdrop-blur-sm"
    >
      <div class="text-center">
        <p class="mb-2">
          <strong>Business Hours:</strong> Monday-Friday, 8:30 am-6:00 pm
        </p>
        <p class="mb-2">Book Your Appointment Now!</p>
        <UButton
          to="https://www.vagaro.com/emeraldease/book-now"
          external
          target="_blank"
          color="primary"
          variant="outline"
          icon="i-heroicons-calendar-days"
        >
          Schedule
        </UButton>
      </div>
    </UCard>

    <!-- Our Team Section -->
    <OurTeam />

    <!-- Services Section -->
    <Services />

    <!-- Location and Directions Section -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-default mt-8 pt-4"
    >
      <!-- Our Location -->
      <div class="text-gray-900">
        <h3
          class="text-2xl mb-4 text-center flex items-center justify-center gap-2"
        >
          Our Location
          <Icon
            name="heroicons:building-office-2"
            class="w-6 h-6 text-primary"
          />
        </h3>
        <div class="p-6 rounded-lg mb-4">
          <p class="text-gray-700">
            We are located at
            <UButton
              to="https://maps.google.com/maps?key=AIzaSyDaa0FdAfpQzAF1c7Twg7QyIZZ_iFHthto&daddr=306%20Academy%20Avenue,%20101,Dublin,Georgia,31021&saddr=&hl=en"
              external
              target="_blank"
              color="primary"
              variant="link"
              class="p-0 align-baseline"
            >
              306 Academy Avenue, Suite 101, Dublin, GA 31021
            </UButton>
            in the Fred Roberts downtown.
          </p>
        </div>
        <NuxtImg
          src="/fredRoberts.jpg"
          alt="Fred Roberts Building"
          class="rounded-lg w-full"
          loading="lazy"
        />
      </div>

      <!-- Directions -->
      <div>
        <h3
          class="text-2xl mb-4 text-center flex items-center justify-center gap-2"
        >
          Directions
          <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary" />
        </h3>
        <div class="relative w-full pt-[100%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.5341875752633!2d-82.90960588482402!3d32.53858578104461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f12182c794d1c3%3A0xb9e39778f5cf7a28!2sEmerald%20Ease!5e0!3m2!1sen!2sus!4v1634331159520!5m2!1sen!2sus"
            class="absolute top-0 left-0 w-full h-3/4 border-0 rounded-lg"
            allowfullscreen
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="border-t-2 border-gray-100 mt-8 pt-4 mb-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div class="lg:col-span-6 text-center lg:text-left">
          <h3 class="text-2xl">How to reach us</h3>
        </div>
        <div class="lg:col-span-3">
          <UButton
            to="mailto:emeraldease@gmail.com"
            color="primary"
            variant="soft"
            block
            icon="i-heroicons-envelope"
          >
            emeraldease@gmail.com
          </UButton>
        </div>
        <div class="lg:col-span-3">
          <UButton
            to="tel:4786970721"
            color="primary"
            variant="soft"
            block
            icon="i-heroicons-phone"
          >
            478-697-0721
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Emerald Ease",
  description:
    "Andrea Craft, Licensed Massage Practitioner in Dublin, GA, specializes in relaxing and therapeutic massage modalities including Swedish, maternity, Myofascial Release, sports/orthopedic, hot stone, chair massage, and bodywork. Book your appointment today!",
  ogTitle: "Emerald Ease",
  ogDescription:
    "Andrea Craft, Licensed Massage Practitioner in Dublin, GA, specializes in relaxing and therapeutic massage modalities including Swedish, maternity, Myofascial Release, sports/orthopedic, hot stone, chair massage, and bodywork. Book your appointment today!",
});
</script>
