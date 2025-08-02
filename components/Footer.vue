<template>
  <footer class="bg-[#1abaa6] text-white py-8 px-6">
    <!-- Container -->
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <!-- Copyright -->
      <p class="text-sm md:text-base mb-4 md:mb-0">
        © 2025 Maida Skin Clinic All Rights Reserved
      </p>

      <!-- Informasi Kontak -->
      <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <!-- Lokasi -->
        <img src="/icon-lokasi.png" class="w-10 h-10" alt="">

        <!-- Alamat -->
        <address class="text-sm md:text-base">
          <p>Jl. Subang No.60, Antapani Tengah, Kec. Antapani, Kota Bandung, Jawa Barat 40229</p>
        </address>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Animasi Masuk */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>
