<template>
  <div class="container">
    <div>
      <div class="relative w-full h-[230px]">
        <!-- backGround -->
        <img
          class="w-full h-full object-cover"
          src="../../assets/header2.jpg"
          alt=""
        />
        <!-- mờ back ground -->
        <div class="absolute flex inset-0 bg-white opacity-80">
          <div class="flex flex-col px-20 pt-6">
            <div class="flex">
              <img
                class="object-contain"
                src="../../assets/home.png"
                width="16px"
                height="16px"
                alt="main"
              />
              <p class="text-[#005FD0] ml-2 text-sm font-medium">Trang chủ</p>
              <p class="text-[#05113A] ml-2 text-sm font-medium">
                {{ folder }}
              </p>
            </div>
            <div class="mt-10">
              <p class="text-xl font-medium text-black">
                Chào mừng bạn đến với nền tảng học online cho học sinh cấp 2
              </p>
              <p class="mt-3 ml-20 text-3xl font-semibold text-black">
                MIDDLESCHOOLMINDS
              </p>
            </div>
          </div>
        </div>
        <div class="absolute w-[600px] h-[230px] top-7 right-20 bottom-0">
          <img
            class="w-full h-full object-cover"
            src="../../assets/stydyImage.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["folder"],
  setup() {
    return {};
  },
};
</script>
