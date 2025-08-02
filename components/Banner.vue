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
					class="text-white text-sm sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:mb-6 animate-fade-in-up my-4 gap-6">
					<span
						class="text-[#1abaa6] text-master bg-white bg-opacity-95 px-2 py-0 sm:px-5 md:py-2 rounded-xl shadow-lg font-extrabold my-2"
						>Perawatan</span
					>
					<br class="" />
					<span
						class="text-[#1abaa6] text-master bg-white bg-opacity-95 px-2 py-0 sm:px-5 md:py-2 rounded-xl shadow-lg font-extrabold">
						Cantik Alami
					</span>
					<br class="my-2" />
					<span
						class="text-[#1abaa6] text-master bg-white bg-opacity-95 px-2 py-0 sm:px-5 md:py-2 rounded-xl shadow-lg font-extrabold">
						Bebas
					</span>
					<br class="my-2" />
					<span
						class="text-[#1abaa6] text-master bg-white bg-opacity-95 px-2 py-0 sm:px-5 md:py-2 rounded-xl shadow-lg font-extrabold"
						>Ketergantungan</span
					>
				</h1>
			</div>
		</div>

		<!-- Teks Overlay -->
		<div
			v-if="$route.fullPath === '/contact'"
			class="relative z-10 flex items-center px-6 sm:px-8 md:px-12 lg:px-20 h-full left-0 sm:left-60">
			<div class="max-w-xl sm:max-w-2xl w-full flex">
				<h1
					class="text-white text-sm sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:mb-6 animate-fade-in-up my-4">
					<span
						class="text-[#1abaa6] bg-white bg-opacity-95 px-2 py-0 sm:px-5 md:py-2 rounded-xl shadow-lg font-extrabold">
						Hubungi Kami
					</span>
				</h1>
				<img
					src="/hubungi-row.png"
					class="h-50 w-50 hidden sm:block"
					alt="" />
			</div>
		</div>

		<div
			v-if="$route.fullPath === '/threatment-product'"
			class="absolute z-10 flex items-center justify-start px-6 sm:px-8 md:px-12 lg:px-20 h-1/2 right-60 sm:left-96 mt-5">
			<span
				class="shadow bg-white text-[#1abaa6] font-bold px-10 sm:text-2xl text-xs rounded-2xl py-2">
				Alami
			</span>
			<img
				src="/alami-row.png"
				class="h-40 w-40 hidden md:block"
				alt="" />
		</div>
		<div
			v-if="$route.fullPath === '/threatment-product'"
			class="absolute z-10 flex items-end justify-start px-6 sm:px-8 md:px-12 lg:px-20 h-1/2 right-60 sm:left-96 mt-5">
			<span
				class="shadow bg-white text-[#1abaa6] font-bold px-10 sm:text-2xl text-xs rounded-2xl py-2">
				Mulus
			</span>
			<img
				src="/mulus-row.png"
				class="h-30 w-30 hidden md:block"
				alt="" />
		</div>
		<div
			v-if="$route.fullPath === '/threatment-product'"
			class="absolute z-10 flex items-center justify-end px-6 sm:px-8 md:px-12 lg:px-20 h-1/2 left-60 sm:right-96 mt-5">
			<img
				src="/cerah-row.png"
				class="h-30 w-30 hidden md:block"
				alt="" />
			<span
				class="shadow bg-white text-[#1abaa6] font-bold px-10 sm:text-2xl text-xs rounded-2xl py-2">
				Cerah
			</span>
		</div>
		<div
			v-if="$route.fullPath === '/threatment-product'"
			class="absolute z-10 flex items-end justify-end px-6 sm:px-8 md:px-12 lg:px-20 h-1/2 left-60 sm:right-96 mt-5">
			<img src="/aman-row.png" class="h-30 w-30 hidden md:block" alt="" />
			<span
				class="shadow bg-white text-[#1abaa6] font-bold px-10 sm:text-2xl text-xs rounded-2xl py-2">
				Aman
			</span>	
		</div>
	</section>
</template>

<script lang="ts" setup>
const props = defineProps<{
	src: string;
}>();
</script>

<style scoped>
@keyframes fade-in-left {
	from {
		opacity: 0;
		transform: translateX(-30px) translateY(-50%);
	}
	to {
		opacity: 1;
		transform: translateX(0) translateY(-50%);
	}
}

@keyframes fade-in-right {
	from {
		opacity: 0;
		transform: translateX(30px) translateY(-50%);
	}
	to {
		opacity: 1;
		transform: translateX(0) translateY(-50%);
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
		transform: translate(-50%, 20px);
	}
	to {
		opacity: 1;
		transform: translate(-50%, 0);
	}
}

.animate-fade-in-left {
	animation: fade-in-left 0.8s ease-out forwards;
}

.animate-fade-in-right {
	animation: fade-in-right 0.8s ease-out forwards;
}

.animate-fade-in {
	animation: fade-in 1s ease-out forwards;
}
</style>
