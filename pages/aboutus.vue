<template>
	<div class="bg-white">
		<!-- Section Hero: Tentang Kami -->
		<Banner src="/aboutus.png" />

		<div class="relative"></div>

		<!-- Pemisah Dekoratif -->
		<Directive v-if="$route" />

		<!-- Section Tentang Kami -->
		<section
			class="py-20 px-3 lg:px-0 bg-[#1abaa6] bg-[url('/flowers.png')]">
			<div class="mx-auto text-center relative">
				<!-- Judul dengan Card Putih -->
				<div class="flex justify-center mb-12">
					<h1
						class="text-4xl sm:text-5xl font-bold bg-white text-[#1abaa6] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300">
						Tentang Kami
					</h1>
				</div>

				<!-- Garis Pemisah Dekoratif -->
				<div
					class="sm:flex hidden flex-col sm:flex-row sm:justify-center mb-12">
					<div
						class="w-32 h-1 bg-gradient-to-r from-white to-transparent rounded-full"></div>
				</div>

				<!-- Konten Utama -->
				<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-3 gap-0">
					<div
						class="ml-2 flex flex-col justify-center items-center col-span-2">
						<!-- Judul dengan Card Putih -->
						<div
							class="flex justify-center sm:justify-start w-full mb-6 px-10">
							<h1
								class="text-md sm:text-4xl font-bold bg-white text-[#1abaa6] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300">
								Sejarah
							</h1>
						</div>
						<div class="flex justify-center mb-12">
							<span
								class="text-sm sm:text-lg text-white px-8 sm:px-20 text-left py-4 rounded-3xl transform transition hover:scale-105 duration-300">
								Maida Skin Clinic didirikan tahun 2019
								akhir,sekitar bulan September - Oktober.Awal
								cuma berdirinya Maida Skin Clinic adalah
								dr.Fifiyana Koswara yang sukses terjun didunia
								klinik kecantikan atau bisa disebut juga dokter
								Aesthetic. dr Fifiyana selaku pendiri utama
								Perusahaan ini.Namun, sekarang Dokter Fifiyana
								tidak di tempatkan di Maida Skin Clinic, karena
								di pindahkan ke tempat lain, namun status nya
								sebagai owner adalah tetap. Saat ini Maida Skin
								Clinic dikelola olah anaknya sendiri yang
								bernama dr.Sherly Florencia.
							</span>
						</div>
					</div>

					<div class="w-full">
						<img
							src="/history.jpg"
							class="w-full h-[629px] rounded-xl sm:rounded-l-full border-8 border-white"
							alt="" />
					</div>
				</div>

				<!-- Pemisah Bawah -->
				<div class="flex justify-center mt-16">
					<div
						class="w-24 h-1 bg-gradient-to-r from-transparent to-white rounded-full"></div>
				</div>
			</div>
		</section>

		<Directive v-if="$route" />

		<section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
			<div class="mx-auto text-center relative">
				<div class="flex justify-center mb-12">
					<h1
						class="text-4xl sm:text-5xl font-bold bg-white text-[#1abaa6] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300">
						Nilai Nilai
					</h1>
				</div>
				<!-- Garis Pemisah Dekoratif -->
				<div
					class="sm:flex hidden flex-col sm:flex-row sm:justify-center mb-12">
					<div
						class="w-32 h-1 bg-gradient-to-r from-white to-transparent rounded-full"></div>
				</div>

				<div class="max-w-4xl mx-auto">
					<hr class="border-[#1abaa6] border-2 my-4" />
					<div class="grid grid-cols-2">
						<div class="my-auto">
							<span
								class="bg-[#1abaa6] font-bold text-2xl text-white px-5 sm:px-20 py-2 rounded-2xl">
								Visi
							</span>
						</div>
						<div class="text-justify">
							<span class="text-[#1abaa6] font-medium text-md">
								Menjadi Klinik kecantikan yang
								inovatif,berkualitas, dan terpercaya dengan
								mengedepankan pelayanan prima dan profesional
							</span>
						</div>
					</div>
				</div>
				<div class="max-w-4xl mx-auto">
					<hr class="border-[#1abaa6] border-2 my-4" />
					<div class="grid grid-cols-2">
						<div class="my-auto">
							<span
								class="bg-[#1abaa6] font-bold text-2xl text-white px-5 sm:px-20 py-2 rounded-2xl">
								Misi
							</span>
						</div>
						<div class="text-justify">
							<ul class="space-y-4 text-[#1abaa6]">
								<li class="flex items-start gap-3">
									<!-- Kotak sebagai bullet -->
									<div
										class="w-3 h-3 bg-[#1abaa6] mt-2 flex-shrink-0"></div>
									<span
										class="font-medium text-md leading-relaxed">
										Mengutamakan kepercayaan dan kepuasan
										pengunjung dengan pelayanan prima yang
										berintegrasi dan terpercaya oleh seluruh
										tim yang berkompeten di bidangnya
									</span>
								</li>

								<li class="flex items-start gap-3">
									<div
										class="w-3 h-3 bg-[#1abaa6] mt-2 flex-shrink-0"></div>
									<span
										class="font-medium text-md leading-relaxed">
										Meningkatkan kualitas SDM sesuai dengan
										kompetensinya
									</span>
								</li>

								<li class="flex items-start gap-3">
									<div
										class="w-3 h-3 bg-[#1abaa6] mt-2 flex-shrink-0"></div>
									<span
										class="font-medium text-md leading-relaxed">
										Memberikan pelayanan sepenuh hati
									</span>
								</li>
								<li class="flex items-start gap-3">
									<div
										class="w-3 h-3 bg-[#1abaa6] mt-2 flex-shrink-0"></div>
									<span
										class="font-medium text-md leading-relaxed">
										Mengikuti perkembangan di dunia estetika
										dalam perawatan maupun teknologi
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
// Animasi akan dihandle oleh CSS
</script>

<style scoped>
/* Animasi Masuk */
@keyframes fade-in-up {
	from {
		opacity: 0;
		transform: translateY(30px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.animate-fade-in-up {
	animation: fade-in-up 1.2s ease-out forwards;
}

.animate-fade-in {
	animation: fade-in 1s ease-out forwards;
}

/* Efek pulse untuk ikon */
.animate-pulse {
	animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
	0%,
	100% {
		opacity: 1;
	}

	50% {
		opacity: 0.7;
	}
}
</style>
