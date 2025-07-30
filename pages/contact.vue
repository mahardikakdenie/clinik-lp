<template>
    <div class="bg-white">
        <Banner src="/banner4.png" />
        <Directive v-if="$route" />
        <section class="py-20 px-3 lg:px-0 bg-white bg-[url('/flowers.png')]">
            <div class="max-w-5xl mx-auto">
                <div class="flex justify-center">
                    <span class="text-2xl font-bold text-[#1abaa6]">
                        Kontak Kami
                    </span>
                </div>

                <div class="grid grid-cols-2 mt-5 gap-4">
                    <div class="flex flex-col items-center justify-center">
                        <span class="bg-[#1abaa6] text-master text-md sm:text-2xl rounded-2xl sm:px-20 px-5 py-3 text-white">
                            Whatsapp
                        </span>

                        <div class="flex items-center">
                            <img src="/icon-whatsapp.png" class="sm:w-20 sm:h-20 w-10 h-10" alt="">
                            <span class="text-[#1abaa6] text-sm">
                                0822-1177-6167
                            </span>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <span class="bg-[#1abaa6] text-master text-md sm:text-2xl rounded-2xl sm:px-20 px-5 py-3 text-white">
                            Shopee
                        </span>
                         <div class="flex items-center">
                            <img src="/icon-shopee.png" class="sm:w-20 sm:h-20 w-10 h-10" alt="">
                            <span class="text-[#1abaa6] text-sm">
                                @DrF Skincare
                            </span>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col mx-3">
                        <span class="bg-[#1abaa6] text-master text-md sm:text-2xl rounded-2xl sm:px-20 px-5 py-3 text-white">
                            Instagram
                        </span>
                         <div class="flex items-center">
                            <img src="/icon-instagram.png" class="sm:w-20 sm:h-20 w-10 h-10" alt="">
                            <span class="text-[#1abaa6] text-sm">
                                @maidaskinclinic.bandung
                            </span>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <span class="bg-[#1abaa6] text-master text-md sm:text-2xl rounded-2xl sm:px-20 px-5 py-3 text-white">
                            Tokopedia
                        </span>
                         <div class="flex items-center">
                            <img src="/icon-tokopedia.png" class="sm:w-20 sm:h-20 w-10 h-10" alt="">
                            <span class="text-[#1abaa6] text-sm">
                                @DrF Skincare
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
