<template>
    <div class="bg-white">
        <Banner src="/banner4.png" />
        <Directive v-if="$route" />
        <section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')] h-full">
            <div class="max-w-5xl mx-auto">
                <div class="flex justify-center sm:mb-24 mb-12">
                    <h1 class="text-4xl sm:text-5xl font-bold bg-white whitespace-nowrap text-[#1abaa6] px-8 py-2 rounded-3xl shadow-md sm:shadow-xl transform transition hover:scale-105 duration-300">
                        Kontak Kami
                    </h1>
                </div>

                <div class="grid grid-cols-2 mt-5 gap-4">
                    <div class="flex flex-col items-center justify-center">
                        <a class="bg-[#1abaa6] text-md sm:text-2xl rounded-2xl sm:px-20 px-5 py-3 text-white">
                            Whatsapp
                        </a>

                        <div class="flex items-center sm:mr-20 mr-8">
                            <img src="/icon-whatsapp.png" class="sm:w-20 sm:h-20 w-10 h-10" alt="">
                            <a class="text-[#1abaa6] text-sm sm:text-lg hover:underline" href="https://wa.me/6282211776167" target="_blank">
                                0822-1177-6167
                            </a>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <span class="bg-[#1abaa6] text-md text-center sm:text-2xl rounded-2xl sm:px-20 px-5 py-3 text-white w-[285px]">
                            Shopee
                        </span>
                         <div class="flex items-center">
                            <img src="/icon-shopee.png" class="sm:w-20 sm:h-20 w-10 h-10" alt="">
                            <a class="text-[#1abaa6] text-sm sm:text-lg hover:underline" href="https://shopee.co.id/drf.skincare" target="_blank">
                                @DrF Skincare
                            </a>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col mx-3">
                        <span class="bg-[#1abaa6] text-md sm:text-2xl rounded-2xl sm:px-20 px-5 py-3 text-white">
                            Instagram
                        </span>
                         <div class="flex items-center">
                            <img src="/icon-instagram.png" class="sm:w-20 sm:h-20 w-10 h-10" alt="">
                            <a class="text-[#1abaa6] text-sm sm:text-lg hover:underline" href="https://www.instagram.com/maidaskinclinic.bandung/" target="_blank">
                                @maidaskinclinic.bandung
                            </a>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <span class="bg-[#1abaa6] text-md sm:text-2xl rounded-2xl sm:px-20 px-5 py-3 text-white">
                            Tokopedia
                        </span>
                         <div class="flex items-center">
                            <img src="/icon-tokopedia.png" class="sm:w-20 sm:h-20 w-10 h-10" alt="">
                            <a class="text-[#1abaa6] text-sm sm:text-lg hover:underline" href="https://www.tokopedia.com/drfskincare" target="_blank">
                                @DrF Skincare
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
