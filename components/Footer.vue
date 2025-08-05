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
          <a class="hover:underline" href="https://www.google.com/maps/place/Jl.+Subang+No.60,+Antapani+Tengah,+Kec.+Antapani,+Kota+Bandung,+Jawa+Barat+40291/@-6.9156794,107.6518528,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e7ef836440e7:0x7a4c63d517a39c71!8m2!3d-6.9156847!4d107.6544277!16s%2Fg%2F11ghpvds6c?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Jl. Subang No.60, Antapani Tengah, Kec. Antapani, Kota Bandung, Jawa Barat 40229</a>
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
