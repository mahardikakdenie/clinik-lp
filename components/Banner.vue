<template>
    <!-- Section Tentang Kami -->
		<section
			class="relative h-64 sm:h-96 md:h-[500px] lg:h-[800px] overflow-hidden">
			<!-- Background Image -->
			<div class="absolute inset-0">
				<img
					:src="src"
					alt="Sejarah"
					class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
					loading="eager" />
				<!-- Overlay gelap untuk baca teks -->
				<div class="absolute inset-0 bg-opacity-30"></div>
			</div>

			<!-- Teks Overlay -->
			<div
                v-if="$route.fullPath === '/'"
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
</template>

<script lang="ts" setup>
const props = defineProps<{
    src: string;
}>()
</script>
