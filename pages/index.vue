<template>
	<div class="bg-white">

		<!-- Section Tentang Kami -->
		<section
			class="relative h-64 sm:h-96 md:h-[500px] lg:h-[800px] overflow-hidden">
			<!-- Background Image -->
			<div class="absolute inset-0">
				<img
					src="/banner.png"
					alt="Sejarah"
					class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
					loading="eager" />
				<!-- Overlay gelap untuk baca teks -->
				<div class="absolute inset-0 bg-opacity-30"></div>
			</div>

			<!-- Teks Overlay -->
			<div
				class="relative z-10 flex items-center px-6 sm:px-8 md:px-12 lg:px-20 h-full">
				<div class="max-w-xl sm:max-w-2xl w-full">
					<h1
						class="text-white text-sm sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:mb-6 animate-fade-in-up my-4">
						Perawatan <br class="my-2" />
						<span
							class="text-[#1abaa6] bg-white bg-opacity-95 px-2 py-0 sm:px-5 md:py-2 rounded-xl shadow-lg font-extrabold">
							Cantik Alami
						</span>
						<br />
						Bebas <br />
						Ketergantungan
					</h1>
				</div>
			</div>
		</section>

		<!-- Pemisah Dekoratif -->
		<div class="flex justify-center my-12">
			<div class="flex items-center space-x-4 text-[#1abaa6]">
				<svg
					class="w-6 h-6 animate-pulse"
					fill="currentColor"
					viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="8" opacity="0.3" />
					<circle cx="12" cy="12" r="4" />
				</svg>
				<div
					class="w-20 h-0.5 bg-gradient-to-r from-[#1abaa6] to-transparent"></div>
				<svg
					class="w-6 h-6 animate-pulse"
					fill="currentColor"
					viewBox="0 0 24 24">
					<path
						d="M7 22c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2 1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2zm10-10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2s2 .9 2 2v6c0 1.1-.9 2-2 2zm-5-5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
				</svg>
			</div>
		</div>

		<!-- Section Nilai-Nilai -->
		<section class="py-16 px-6 lg:px-0 bg-[url('/flowers.png')]">
			<div class="max-w-4xl mx-auto text-center">
				<div
					class="bg-white rounded-2xl p-8 md:p-10 transition-all duration-300 transform hover:scale-[1.01]">
					<p
						class="text-[#1abaa6] text-lg md:text-xl leading-relaxed font-medium animate-fade-in">
						Maida Skin Clinic percaya kalau setiap orang punya
						kebutuhan kulit yang berbeda, makanya semua perawatan
						kulit disesuaikan langsung sama kondisi kulit kamu.
						Pakai bahan alami dan teknologi yang aman, hasilnya
						kulit menjadi sehat, cerah, terawat — tanpa takut efek
						samping atau ketergantungan.
					</p>
				</div>
			</div>

			<!-- Pemisah Bawah -->
			<div class="flex justify-center mt-16">
				<div
					class="w-24 h-1 bg-gradient-to-r from-transparent to-[#1abaa6] rounded-full"></div>
			</div>
		</section>

		<!-- Section Layanan Kami -->
		<section class="py-16 px-6 lg:px-0 bg-[url('/flowers.png')]">
			<div class="max-w-6xl mx-auto">
				<!-- Judul -->
				<div class="text-center mb-12">
					<h2
						class="text-3xl font-bold text-[#1abaa6] mb-4 animate-fade-in">
						Layanan Kami
					</h2>
					<p class="text-[#1abaa6] max-w-xl mx-auto text-sm">
						Temukan perawatan yang sesuai dengan kebutuhan kulitmu
					</p>
				</div>

				<!-- Grid Layanan -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
					<div
						v-for="(item, index) in 3"
						:key="index"
						class="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
						<!-- Badge -->
						<div
							class="bg-[#1abaa6] text-white font-semibold px-4 py-2 rounded-t-xl text-center">
							{{ ['Treatment', 'Skincare', 'Makeup'][index] }}
						</div>

						<!-- Gambar -->
						<div class="h-72 overflow-hidden">
							<img
								:src="`page${index + 1}.png`"
								alt="Treatment"
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
						</div>

						<!-- Deskripsi (opsional) -->
						<div class="p-5 bg-white">
							<p class="text-[#1abaa6] text-sm mt-1">
								{{
									[
										'Treatment Maida Skin Clinic menawarkan solusi perawatan kulit personal dengan teknologi modern, dirancang untuk mengatasi masalah kulit dan mengembalikan keremajaanmu',
										'Rangkaian skincare Maida Skin Clinic diformulasikan dengan bahan bahan alami pilihan untuk menutrisi dan menjaga kesehatan kulitmu dari dalam, memancarkan kilauan alami setiap hari',
										'Lengkapi tampilan cantikmu dengan koleksi makeup Maida Skin Clinic yang ringan, aman dan diformulasikan untuk menonjolkan kecantikan naturalmu tanpa menyumbat pori pori',
									][index]
								}}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Maida Skin Clinic - Cantik Alami, Bebas Ketergantungan',
	description:
		'Perawatan kulit personalisasi dengan bahan alami dan teknologi aman.',
});
</script>

<style scoped>
@keyframes fade-in-up {
	from {
		opacity: 0;
		transform: translateY(40px);
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

img {
	image-rendering: -webkit-optimize-contrast;
	image-rendering: crisp-edges;
	backface-visibility: hidden;
	will-change: transform;
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
