<template>
	<div class="bg-white">
		<Banner src="\banner3.png" />
		<Directive v-if="$route" />
		<section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
			<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
				<div class="w-full">
					<img
						src="/glowing-1.png"
						class="w-full h-[629px] sm:rounded-br-[100px] border-4 border-l-0 border-[#1abaa6] rounded-2xl sm:rounded-tr-[100px]"
						alt="" />
				</div>

				<div
					class="sm:ml-2 flex flex-col justify-center items-start col-span-2">
					<!-- Judul dengan Card Putih -->
					<div class="flex justify-start mb-6 w-full mt-2 sm:mt-0">
						<h1
							class="text-lg sm:text-2xl font-bold text-white bg-[#74cac4] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300">
							Glow Up Treatment
						</h1>
					</div>
					<div class="flex justify-center mb-12 max-w-5xl">
						<span
							class="text-sm sm:text-lg text-[#1abaa6] px-8 py-4 rounded-3xl transform transition hover:scale-105 duration-300">
							Signature Glow Up dan bahkan kulit kamu bersinar
							cerah dari dalam.Perawatan ini dirancang khusus
							untuk menampilkan versi terbaik dari diri kamu
							memberikan tampilan kulit yang sehat ,bercahaya, dan
							penuh percaya diri.Ini bukan sekadar perawatan
							wajah, ini adalah transformasi yang akan membuat
							kamu lebih bersinar
						</span>
					</div>
				</div>
			</div>
		</section>
		<Directive v-if="$route" />
		<section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
			<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
				<div
					class="ml-2 flex flex-col justify-center sm:items-end items-center col-span-2">
					<!-- Judul dengan Card Putih -->
					<div class="flex justify-center mb-6 sm:max-w-2xl">
						<h1
							class="text-xl sm:text-2xl font-bold text-white bg-[#74cac4] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300">
							Flex Treatment
						</h1>
					</div>
					<div
						class="flex sm:justify-end justify-center mb-12 max-w-5xl">
						<span
							class="text-sm sm:text-lg text-[#1abaa6] px-8 py-4 rounded-3xl transform transition hover:scale-105 duration-300 sm:text-end text-center">
							Kulitmu suka berubah ubah ? Maida Flex Treatment
							Jawabannya! Perawatan ini beneran flexible, didesain
							khusus buat kondisi kulitmu yang berbeda-beda tiap
							waktu. Mau butuh hidrasi exstra,kulit lebih kencang,
							cerah, atau ngilangin jerawat? tenang aja, terapis
							ahli kami bakal racikin kombinasi perawatan dan
							teknologi terbaik di setiap sesi biar hasil yang
							kamu mau bisa tercapai, ini dia perawatan pintar
							yang bisa 'ngepas' sesuai kebutuhan kulitmu, bikin
							kamu makin glowing kapanpun
						</span>
					</div>
				</div>
				<div class="w-full">
					<img
						src="/dark-spot.png"
						class="h-[629px] sm:rounded-bl-[100px] border-4 border-r-0 border-[#1abaa6] rounded-2xl sm:rounded-tl-[100px]"
						alt="" />
				</div>
			</div>
		</section>
		<Directive v-if="$route" />
		<section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
			<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
				<div class="w-full">
					<img
						src="/jenis-jenis.png"
						class="w-full h-[629px] sm:rounded-br-[100px] border-4 border-l-0 border-[#1abaa6] rounded-2xl sm:rounded-tr-[100px]"
						alt="" />
				</div>

				<div
					class="sm:ml-2 flex flex-col justify-center items-start col-span-2">
					<!-- Judul dengan Card Putih -->
					<div class="flex justify-start mb-6 w-full mt-2 sm:mt-0">
						<h1
							class="text-lg sm:text-2xl font-bold text-white bg-[#74cac4] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300">
							Skin Booster Treatment
						</h1>
					</div>
					<div class="flex justify-center mb-12 max-w-5xl">
						<span
							class="text-sm sm:text-lg text-[#1abaa6] px-8 py-4 rounded-3xl transform transition hover:scale-105 duration-300">
							Pengen kulit kamu lembap maksimal, kenyal, dan
							glowing dari dalam? Maida Skin Booster Jawabannya!
							Perawatan ini bekerja dengan menyuntikan zat-zat
							baik seperti asam hialuronat langsung ke lapisan
							kulitmu Hasilnya kulit menjadi terhidrasi banget
							terasa lebih kenyal, pori pori tersamarkan dan
							tekstur kulit pun membaik. Rasakan kilau sehat alami
							yang bikin kamu pede tanpa makeup apapun.
						</span>
					</div>
				</div>
			</div>
		</section>
		<Directive v-if="$route" />

		<section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div
                        v-for="(item, index) in 6"
                        :key="index"
                        class="group rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2">
                        <!-- Badge -->
                        <div
                            class="bg-[#1abaa6] text-white font-semibold px-4 py-2 rounded-t-xl text-center">
                            {{ ['Treatment', 'Skincare', 'Makeup', 'Sliming', 'Under Eye', 'Breast'][index] }}
                        </div>
    
                        <!-- Gambar -->
                        <div class="overflow-hidden h-72 w-full mt-4">
                            <img
                                :src="`product${index + 1}.png`"
                                alt="Treatment"
                                class="w-full h-full object-contain rounded-4xl group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
		</section>
	</div>
</template>
