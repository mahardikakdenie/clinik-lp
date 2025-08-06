<template>
    <div class="bg-white">
        <Banner src="\banner3.png" />
        <Directive v-if="$route" />
        <section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
            <!-- Judul -->
            <div class="text-center mb-12 sm:mb-24 flex flex-col items-center justify-center sm:px-0 px-5">
                <h2
                    class="text-4xl sm:text-5xl font-bold mb-12 bg-white w-72 sm:w-96 whitespace-nowrap text-[#1abaa6] px-8 pt-9 pb-3 rounded-3xl shadow-md sm:shadow-xl transform transition hover:scale-105 duration-300">
                    Treatment
                </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
                <div class="w-full flex justify-center sm:justify-start">
                    <img src="/glow_up.png"
                        class="h-70 sm:h-full object-cover sm:rounded-br-[100px] border-4 border-l-0 border-[#1abaa6] rounded-2xl sm:rounded-tr-[100px]"
                        alt="" />
                </div>

                <div class="sm:ml-2 flex flex-col justify-center items-start col-span-2 sm:px-10 px-0">
                    <!-- Judul dengan Card Putih -->
                    <div class="flex sm:justify-start justify-center mt-5 mb-6 w-full sm:mt-0">
                        <span
                            class="text-lg sm:text-2xl font-bold text-white bg-[#74cac4] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300 ml-2">
                            Glow Up Treatment
                        </span>
                    </div>
                    <div class="flex justify-center mb-12 max-w-5xl">
                        <span
                            class="text-sm sm:text-lg text-[#1abaa6] px-8 py-4 rounded-3xl transform transition hover:scale-105 duration-300">
                            Signature Glow Up dan bahkan kulit kamu bersinar
                            cerah dari dalam.Perawatan ini dirancang khusus
                            untuk menampilkan versi terbaik dari diri kam
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
                <div class="ml-2 flex flex-col justify-center sm:items-end items-center col-span-2">
                    <!-- Judul dengan Card Putih -->
                    <div class="flex justify-center mb-6 sm:max-w-2xl sm:px-10 px-0">
                        <span
                            class="text-xl sm:text-2xl font-bold text-white bg-[#74cac4] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300">
                            Flex Treatment
                        </span>
                    </div>
                    <div class="flex sm:justify-end justify-center mb-12 max-w-5xl">
                        <span
                            class="text-sm sm:text-lg text-[#1abaa6] sm:px-14 px-0 py-4 rounded-3xl transform transition hover:scale-105 duration-300 sm:text-end text-center">
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
                <div class="w-full sm:justify-start flex justify-center">
                    <img src="/dark-spot.png"
                        class="object-cover h-70 sm:h-full sm:rounded-bl-[100px] border-4 border-r-0 border-[#1abaa6] rounded-2xl sm:rounded-tl-[100px]"
                        alt="" />
                </div>
            </div>
        </section>
        <Directive v-if="$route" />
        <section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
            <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
                <div class="w-full flex justify-center sm:justify-start">
                    <img src="/jenis-jenis.png"
                        class="h-70 sm:h-full object-cover sm:rounded-br-[100px] border-4 border-l-0 border-[#1abaa6] rounded-2xl sm:rounded-tr-[100px]"
                        alt="" />
                </div>

                <div class="sm:ml-2 flex flex-col justify-center items-start col-span-2">
                    <!-- Judul dengan Card Putih -->
                    <div class="flex sm:justify-start justify-center mb-6 w-full mt-5 sm:mt-0 sm:ml-7 ml-0">
                        <span
                            class="text-lg sm:text-2xl font-bold text-white bg-[#74cac4] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300 ">
                            Skin Booster Treatment
                        </span>
                    </div>
                    <div class="flex justify-center mb-12 max-w-5xl px-6">
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
                    <div v-for="(item, index) in 6" :key="index"
                        class="group rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2">
                        <!-- Badge -->
                        <div
                            class="bg-[#1abaa6] sm:text-2xl text-lg text-white font-semibold px-4 py-2 rounded-t-xl text-center">
                            {{
                                [
                                    'Acne & Scar',
                                    'Hair',
                                    'Face Contour',
                                    'Sliming',
                                    'Under Eye',
                                    'Breast',
                                ][index]
                            }}
                        </div>

                        <!-- Gambar -->
                        <div class="overflow-hidden h-72 w-full mt-4">
                            <img :src="`product${index + 1}.png`" alt="Treatment"
                                class="w-full h-full object-contain rounded-4xl group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Directive v-if="$route" />
        <section class="py-20 px-3 lg:px-0 bg-[#1abaa6] bg-[url('/flowers.png')]">
            <div class="flex justify-center mb-12">
                <h2
                    class="text-4xl sm:text-5xl font-bold bg-white  whitespace-nowrap text-[#1abaa6] px-8 py-2 rounded-3xl shadow-md sm:shadow-xl transform transition hover:scale-105 duration-300 mb-6">
                    Skincare</h2>
            </div>
            <div class="max-w-5xl mx-auto">
                <div class="p-4 flex justify-center w-full">
                    <img src="/skincare.png" class="w-96 h-full rounded-4xl" alt="" />
                </div>

                <div class="max-w-4xl mx-auto">
                    <hr class="border-white border-2 my-4" />
                    <div class="grid grid-cols-12">
                        <div class="my-auto col-span-5">
                            <div class="my-5 max-w-2xl">
                                <span
                                    class="bg-white font-bold text-center whitespace-nowrap block max-w-md sm:text-2xl text-lg text-[#1abaa6] sm:px-20 px-5 py-2 rounded-2xl">
                                    Facial Wash
                                </span>
                            </div>
                            <div class="">
                                <ul class="space-y-4 text-white">
                                    <li class="flex items-start gap-3">
                                        <!-- Kotak sebagai bullet -->
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg leading-relaxed">
                                            dr.F Facial Wash NTO (Normal To Oily)
                                        </span>
                                    </li>

                                    <li class="flex items-start gap-3">
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg leading-relaxed">
                                            dr.F Facial Wash NTD (Normal To Dry)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="border-l-white border-l-4 flex justify-center col-span-2 mx-auto"></div>
                        <div class="my-auto col-span-5 h-full">
                            <div class="my-5 max-w-2xl">
                                <span
                                    class="bg-white font-bold text-center whitespace-nowrap block max-w-md  sm:text-2xl text-lg text-[#1abaa6] sm:px-20 px-5 py-2 rounded-2xl">
                                    Moisturizer
                                </span>
                            </div>
                            <div class="">
                                <ul class="space-y-4 text-white flex">
                                    <li class="flex gap-3">
                                        <!-- Kotak sebagai bullet -->
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg leading-relaxed">
                                            dr.F Skin Moisturizer
                                        </span>
                                    </li>
                                    <li class="flex gap-3">
                                        <!-- Kotak sebagai bullet -->
                                        <!-- <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div> -->
                                        <!-- <span class="font-medium text-md leading-relaxed">
                                            dr.F Skin Moisturizer
                                        </span> -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="border-white border-2 my-4" />
                    <div class="grid grid-cols-12">
                        <div class="my-auto col-span-5">
                            <div class="my-5 max-w-2xl">
                                <span
                                    class="bg-white font-bold text-center whitespace-nowrap block  sm:text-2xl text-lg text-[#1abaa6] sm:px-20 px-5 py-2 rounded-2xl">
                                    Sunscreen
                                </span>
                            </div>
                            <div class="">
                                <ul class="space-y-4 text-white">
                                    <li class="flex items-start gap-3">
                                        <!-- Kotak sebagai bullet -->
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg sm:text-md leading-relaxed">
                                            dr.F Acne Sunscreen
                                        </span>
                                    </li>

                                    <li class="flex items-start gap-3">
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg sm:text-md leading-relaxed">
                                            dr.F 88 Day Cream/Sunscreen
                                        </span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg sm:text-md leading-relaxed">
                                            dr.F 88 Sunscreen White SPF 50
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="border-l-white border-l-4 flex justify-center col-span-2 mx-auto"></div>
                        <div class="my-auto col-span-5 h-full">
                            <div class="my-5 max-w-2xl">
                                <span
                                    class="bg-white font-bold text-center whitespace-nowrap block max-w-md  sm:text-2xl text-lg text-[#1abaa6] sm:px-20 px-5 py-2 rounded-2xl">
                                    Cream
                                </span>
                            </div>
                            <div class="">
                                <ul class="space-y-4 text-white">
                                    <li v-for="text in ['dr. F BB Day Cream SPF40', 'dr. F BB Day Cream SPF40', 'dr. F Whitening Night Cream']"
                                        class="flex items-start gap-3">
                                        <!-- Kotak sebagai bullet -->
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg leading-relaxed">
                                            {{ text }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="border-white border-2 my-4" />
                    <div class="grid grid-cols-12">
                        <div class="my-auto col-span-5">
                            <div class="my-5 max-w-2xl">
                                <span
                                    class="bg-white font-bold text-center whitespace-nowrap block max-w-md  sm:text-2xl text-lg text-[#1abaa6] sm:px-20 px-5 py-2 rounded-2xl">
                                    Toner
                                </span>
                            </div>
                            <div class="">
                                <ul class="space-y-4 text-white">
                                    <li v-for="text in toners" class="flex items-start gap-3">
                                        <!-- Kotak sebagai bullet -->
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg leading-relaxed">
                                            {{ text }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="border-l-white border-l-4 flex justify-center col-span-2 mx-auto" />
                        <div class="my-auto col-span-5 h-full">
                            <div class="my-5 max-w-2xl">
                                <span
                                    class="bg-white font-bold text-center whitespace-nowrap block max-w-md  sm:text-2xl text-lg text-[#1abaa6] sm:px-20 px-5 py-2 rounded-2xl">
                                    Serum
                                </span>
                            </div>
                            <div class="">
                                <ul class="space-y-4 text-white">
                                    <li v-for="text in serums" class="flex items-start gap-3">
                                        <!-- Kotak sebagai bullet -->
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg leading-relaxed">
                                            {{ text }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="border-white border-2 my-4" />
                    <div class=" flex justify-center">
                        <div class="my-auto col-span-5">
                            <div class="my-5 max-w-2xl">
                                <span
                                    class="bg-white font-bold text-center whitespace-nowrap block max-w-md w-full sm:w-96 sm:text-2xl text-lg text-[#1abaa6] sm:px-20 px-5 py-2 rounded-2xl">
                                    Lainnya
                                </span>
                            </div>
                            <div class="flex justify-center">
                                <ul class="space-y-4 flex justify-center flex-col items-center text-white">
                                    <li v-for="text in others" class="flex items-start text-start gap-3 w-full">
                                        <!-- Kotak sebagai bullet -->
                                        <div class="w-3 h-3 bg-white mt-2 flex-shrink-0"></div>
                                        <span class="font-medium text-sm sm:text-lg leading-relaxed text-left">
                                            {{ text }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Directive v-if="$route" />
        <section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
            <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
                <div class="w-full justify-center sm:justify-start flex">
                    <img src="/cushion.png"
                        class="h-70 sm:h-full object-cover  sm:rounded-br-[100px] border-4 border-l-0 border-[#1abaa6] rounded-2xl sm:rounded-tr-[100px]"
                        alt="" />
                </div>

                <div class="sm:ml-2 flex flex-col justify-center items-start col-span-2 sm:px-10 md:px-3 px-0">
                    <!-- Judul dengan Card Putih -->
                    <div class="flex sm:justify-start justify-center mb-6 w-full mt-5 sm:mt-0 ">
                        <span
                            class="text-lg sm:text-2xl font-bold text-white bg-[#74cac4] px-8 py-4 rounded-3xl shadow-xl transform transition hover:scale-105 duration-300">
                            BB Cushion
                        </span>
                    </div>
                    <div class="flex justify-center mb-12 max-w-5xl">
                        <span
                            class="text-sm sm:text-lg text-[#1abaa6] px-8 py-4 rounded-3xl transform transition hover:scale-105 duration-300">
                            {{ desc }}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
const toners = ref([" dr. F Brightening Toner", "dr. F Brightening Face Toner", "dr. F Pore Tightening Toner", "dr. F Rose Brightening Toner"]);
const serums = ref(["dr. F Soothing Serum",
    "dr. F Glow Up Serum",
    "dr. F Eye Serum"]);
const others = ref(["dr. F Soothing Serum",
    "dr. F Glow Up Serum",
    "dr. F Eye Serum"])
// bb-cushion.json{
const desc = ref("Pengen tampilan kulit sempurna tanpa ribet? Kenalan yuk sama Maida BB Cushion! Ini bukan cuma alas bedak biasa, lho. Dengan formula 5-in-1 yang inovatif, BB Cushion ini jago banget menutup noda hitam dan ketidaksempurnaan lain di wajah. Plus, kulitmu bakal tetap lembab sepanjang hari, dengan hasil akhir yang super natural dan glowing. Yang paling penting, kulitmu juga terindungi dari bahaya sinar UVA dan UVB! Praktis, cantik, dan terlindungi dalam satu langkah mudah.");

</script>
