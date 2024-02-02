<template>
  <div class="container">
    <div class="w-full h-20 flex items-center relative">
      <!-- tên lớp -->
      <div class="flex items-center justify-start ml-20">
        <div>
          <img
            src="../../assets/logo.jpg"
            alt="logo"
            width="50px"
            height="50px"
          />
        </div>
        <div class="">
          <p class="font-semibold text-sm uppercase">
            Học cùng MiddleSchoolMinds
          </p>
        </div>
      </div>
      <!-- cụm đăng nhập -->
      <div class="absolute right-20 flex items-center justify-end">
        <div>
          <img
            src="../../assets/vietnam.jpg"
            width="50px"
            height="50px"
            alt="viet nam"
          />
        </div>
        <div class="ml-8">
          <button
            class="w-32 h-12 bg-[#FFF] border border-[#005FD0] text-[#005FD0] rounded-xl font-bold text-base"
          >
            Đăng ký
          </button>
        </div>
        <div class="ml-5">
          <button
            @click="login()"
            class="w-32 h-12 bg-[#005FD0] text-white rounded-xl font-bold text-base"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
    <div class="w-full h-[1px] bg-slate-500"></div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const login = () => {
      router.push(`/login`);
    };
    return { login };
  },
};
</script>
