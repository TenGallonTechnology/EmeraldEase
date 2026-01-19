<template>
  <div class="bg-white">
    <!-- Navbar -->
    <header class="bg-gray-50 border-b border-gray-200">
      <UContainer>
        <nav class="flex items-center justify-between py-4">
          <NuxtLink to="/" class="shrink-0">
            <NuxtImg
              src="/logo.png"
              alt="Emerald Ease Logo"
              width="150"
              height="150"
              class="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
            />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-6">
            <UButton
              to="https://www.vagaro.com/emeraldease/book-now"
              external
              target="_blank"
              color="primary"
              variant="ghost"
            >
              Book Appointment
            </UButton>
            <UButton
              to="https://www.google.com/search?q=emerald+ease+dublin#lrd=0x88f12182c794d1c3:0xb9e39778f5cf7a28,1,,,"
              external
              target="_blank"
              color="primary"
              variant="ghost"
            >
              Reviews
            </UButton>
            <UButton to="#services" color="primary" variant="ghost">
              Services
            </UButton>
            <UButton to="#contact" color="primary" variant="ghost">
              Contact
            </UButton>
          </div>

          <!-- Mobile Menu Button -->
          <UButton
            icon="i-heroicons-bars-3"
            color="neutral"
            variant="ghost"
            class="lg:hidden"
            @click="isMenuOpen = !isMenuOpen"
          />
        </nav>

        <!-- Mobile Navigation -->
        <div v-if="isMenuOpen" class="lg:hidden pb-4 space-y-2">
          <UButton
            to="https://www.vagaro.com/emeraldease/book-now"
            external
            target="_blank"
            color="primary"
            variant="ghost"
            block
          >
            Book Appointment
          </UButton>
          <UButton
            to="https://www.google.com/search?q=emerald+ease+dublin#lrd=0x88f12182c794d1c3:0xb9e39778f5cf7a28,1,,,"
            external
            target="_blank"
            color="primary"
            variant="ghost"
            block
          >
            Reviews
          </UButton>
          <UButton
            to="#services"
            color="primary"
            variant="ghost"
            block
            @click="isMenuOpen = false"
          >
            Services
          </UButton>
          <UButton
            to="#contact"
            color="primary"
            variant="ghost"
            block
            @click="isMenuOpen = false"
          >
            Contact
          </UButton>
        </div>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-900 text-white overflow-hidden mt-12">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
          <div class="text-center md:text-left">
            <small>©Emerald Ease 2021</small>
          </div>
          <div class="text-center">
            <small class="block mb-2">Follow Us!</small>
            <UButton
              to="https://www.facebook.com/Emeraldeasemassage/"
              external
              target="_blank"
              icon="i-lucide-facebook"
              color="primary"
              variant="link"
              size="lg"
            >
              Facebook
            </UButton>
          </div>
          <div class="flex justify-center md:justify-end items-center">
            <a href="https://www.tengallon.tech" target="_blank" class="w-16">
              <NuxtImg
                src="/TenGallonTech.png"
                alt="Ten Gallon Tech Logo"
                width="60"
                height="60"
              />
            </a>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>
