<template>
  <div
    class="min-h-screen bg-[linear-gradient(135deg,rgb(209_250_229/0.22)_0%,rgb(255_255_255)_16%,rgb(255_255_255)_100%)]"
  >
    <!-- Navbar -->
    <header class="border-b border-primary-100">
      <UContainer>
        <nav class="flex items-center justify-between py-3">
          <ULink to="/" class="shrink-0" aria-label="Emerald Ease Home">
            <NuxtImg
              src="/logo.png"
              alt="Emerald Ease Logo"
              width="100"
              height="100"
              class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </ULink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-6">
            <ULink
              to="https://www.vagaro.com/emeraldease/book-now"
              external
              target="_blank"
              class="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Book Appointment
            </ULink>
            <ULink
              to="https://www.google.com/search?q=emerald+ease+dublin#lrd=0x88f12182c794d1c3:0xb9e39778f5cf7a28,1,,,"
              external
              target="_blank"
              class="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Reviews
            </ULink>
            <ULink to="/#services" :class="navLinkClass('/#services')">
              Services
            </ULink>
            <ULink
              to="/code-of-ethics"
              :class="navLinkClass('/code-of-ethics')"
            >
              Code of Ethics
            </ULink>
            <ULink to="/#contact" :class="navLinkClass('/#contact')">
              Contact
            </ULink>
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
          <ULink
            to="https://www.vagaro.com/emeraldease/book-now"
            external
            target="_blank"
            class="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors"
            @click="isMenuOpen = false"
          >
            Book Appointment
          </ULink>
          <ULink
            to="https://www.google.com/search?q=emerald+ease+dublin#lrd=0x88f12182c794d1c3:0xb9e39778f5cf7a28,1,,,"
            external
            target="_blank"
            class="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors"
            @click="isMenuOpen = false"
          >
            Reviews
          </ULink>
          <ULink
            to="/#services"
            :class="mobileLinkClass('/#services')"
            @click="isMenuOpen = false"
          >
            Services
          </ULink>
          <ULink
            to="/code-of-ethics"
            :class="mobileLinkClass('/code-of-ethics')"
            @click="isMenuOpen = false"
          >
            Code of Ethics
          </ULink>
          <ULink
            to="/#contact"
            :class="mobileLinkClass('/#contact')"
            @click="isMenuOpen = false"
          >
            Contact
          </ULink>
        </div>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer
      class="bg-default overflow-hidden mt-12 border-t border-primary-100"
    >
      <UContainer>
        <div class="grid grid-cols-3 items-center gap-4 py-6">
          <div class="text-left">
            <small>©Emerald Ease 2021</small>
          </div>
          <div class="text-center">
            <small class="hidden sm:block mb-2">Follow Us!</small>
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
          <div class="flex justify-end items-center">
            <a
              href="https://www.tengallontechnology.com"
              target="_blank"
              class="w-16"
            >
              <NuxtImg
                class="bg-black rounded-full"
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
const isMenuOpen = ref(false);

const route = useRoute();

const navBaseClass =
  "text-sm font-medium text-gray-700 hover:text-primary transition-colors";
const navActiveClass = "text-primary underline underline-offset-8";

const mobileBaseClass =
  "block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors";
const mobileActiveClass = "bg-primary-50 text-primary";

const isActiveLink = (to: string) => {
  if (to === "/code-of-ethics") return route.path === "/code-of-ethics";

  if (to.startsWith("/#")) {
    const hash = `#${to.split("#")[1] || ""}`;
    return route.path === "/" && route.hash === hash;
  }

  return false;
};

const navLinkClass = (to: string) =>
  [navBaseClass, isActiveLink(to) ? navActiveClass : ""].join(" ");

const mobileLinkClass = (to: string) =>
  [mobileBaseClass, isActiveLink(to) ? mobileActiveClass : ""].join(" ");
</script>
