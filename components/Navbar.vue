<template>
	<header
		class="bg-gradient-to-r from-[#1abaa6] to-[#16a085] text-white shadow-lg sticky top-0 z-50">
		<nav class="mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<!-- Logo -->
				<div class="flex items-center space-x-2">
					<img
						src="/logo-clinic.jpg"
						alt="Logo"
						class="rounded-2xl shadow-md w-30 h-8 object-cover transition-transform duration-300 hover:scale-105" />
				</div>

				<!-- Desktop Menu -->
				<div class="hidden md:flex space-x-8">
					<nuxt-link
						to="/"
						:class="{ 'text-yellow-100': $route.fullPath === '/' }"
						class="nav-link font-medium transition-all duration-300 hover:text-yellow-100">
						HOME
					</nuxt-link>
					<nuxt-link
						to="/aboutus"
						:class="{
							'text-yellow-100': $route.fullPath === '/aboutus',
						}"
						class="nav-link font-medium transition-all duration-300 hover:text-yellow-100">
						Tentang Kami
					</nuxt-link>
					<nuxt-link
						to="/threatment-product"
						:class="{
							'text-yellow-100':
								$route.fullPath === '/threatment-product',
						}"
						class="nav-link font-medium transition-all duration-300 hover:text-yellow-100">
						Treatment & Produk
					</nuxt-link>
					<nuxt-link
						to="/contact"
						:class="{
							'text-yellow-100': $route.fullPath === '/contact',
						}"
						class="nav-link font-medium transition-all duration-300 hover:text-yellow-100">
						Kontak
					</nuxt-link>
				</div>

				<!-- Mobile Menu Button -->
				<div class="md:hidden flex items-center">
					<button
						@click="mobileMenuOpen = !mobileMenuOpen"
						class="text-white focus:outline-none">
						<svg
							v-if="!mobileMenuOpen"
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						<svg
							v-else
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu Dropdown -->
			<transition
				enter-active-class="transition ease-out duration-200"
				enter-from-class="opacity-0 transform -translate-y-2"
				enter-to-class="opacity-100 transform translate-y-0"
				leave-active-class="transition ease-in duration-150"
				leave-from-class="opacity-100 transform translate-y-0"
				leave-to-class="opacity-0 transform -translate-y-2">
				<div
					v-show="mobileMenuOpen"
					class="md:hidden bg-white text-[#1abaa6] rounded-lg shadow-lg mt-2 overflow-hidden">
					<div class="px-4 py-2 space-y-2">
						<!-- <a
							href="#"
							class="block nav-link-mobile py-3 border-b border-gray-100"
							@click="mobileMenuOpen = false">
							HOME
						</a>
						<a
							href="#"
							class="block nav-link-mobile py-3 border-b border-gray-100"
							@click="mobileMenuOpen = false">
							Tentang Kami
						</a>
						<a
							href="#"
							class="block nav-link-mobile py-3 border-b border-gray-100"
							@click="mobileMenuOpen = false">
							Treatment & Produk
						</a>
						<a
							href="#"
							class="block nav-link-mobile py-3"
							@click="mobileMenuOpen = false">
							Kontak
						</a> -->
						<nuxt-link
							to="/"
							:class="{
								'border-b border-gray-100': $route.fullPath === '/',
							}"
							class="block nav-link-mobile text-slate-500 py-3 border-b border-gray-100">
							HOME
						</nuxt-link>
						<nuxt-link
							to="/aboutus"
							:class="{
								'border-b border-gray-100':
									$route.fullPath === '/aboutus',
							}"
							class="block nav-link-mobile text-slate-500 py-3 border-b border-gray-100">
							Tentang Kami
						</nuxt-link>
						<nuxt-link
							to="/threatment-product"
							:class="{
								'border-b border-gray-100':
									$route.fullPath === '/threatment-product',
							}"
							class="block nav-link-mobile text-slate-500 py-3 border-b border-gray-100">
							Treatment & Produk
						</nuxt-link>
						<nuxt-link
							to="/contact"
							:class="{
								'border-b border-gray-100':
									$route.fullPath === '/contact',
							}"
							class="block nav-link-mobile text-slate-500 py-3 border-b border-gray-100">
							Kontak
						</nuxt-link>
					</div>
				</div>
			</transition>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// State untuk mobile menu
const mobileMenuOpen = ref(false);
</script>

<style scoped>
/* Animasi Underline untuk Desktop */
.nav-link {
	position: relative;
	padding-bottom: 4px;
}

.nav-link::after {
	content: '';
	position: absolute;
	width: 0;
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: white;
	transition: width 0.3s ease;
	border-radius: 1px;
}

.nav-link:hover::after {
	width: 100%;
}

/* Style untuk Mobile Menu */
.nav-link-mobile {
	font-weight: 500;
	position: relative;
	padding-bottom: 2px;
}

.nav-link-mobile::after {
	content: '';
	position: absolute;
	width: 0;
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #1abaa6;
	transition: width 0.3s ease;
}

.nav-link-mobile:hover::after,
.nav-link-mobile:focus::after {
	width: 40px;
}
</style>
