<template>
	<div class="bg-white">

		<!-- Section Tentang Kami -->
		<Banner src="/banner.png" />

		<!-- Pemisah Dekoratif -->
		<Directive />

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
			<Directive />
		</section>

		<!-- Section Layanan Kami -->
		<section class="py-16 px-6 lg:px-0 bg-[url('/flowers.png')]">
			<div class="max-w-6xl mx-auto">
				<!-- Judul -->
				<div class="text-center mb-12 flex flex-col items-center justify-center sm:px-0 px-5">
					<h2
						class="text-4xl sm:text-5xl font-bold bg-white w-72 sm:w-96 whitespace-nowrap text-[#1abaa6] px-8 pt-9 pb-3 rounded-3xl shadow-md sm:shadow-xl transform transition hover:scale-105 duration-300">
						Layanan Kami
					</h2>
					<p class="text-[#1abaa6] max-w-xl mx-auto text-sm sm:text-lg">
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
						<div class=" overflow-hidden">
							<img
								:src="`page${index + 1}.png`"
								alt="Treatment"
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
						</div>

						<!-- Deskripsi (opsional) -->
						<div class="p-5 bg-white">
							<p class="text-[#1abaa6] text-sm sm:text-lg mt-1">
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
