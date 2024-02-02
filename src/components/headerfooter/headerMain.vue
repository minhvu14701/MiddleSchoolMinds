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
      <!-- cụm trang chủ -->
      <div class="flex ml-40">
        <router-link :to="`/`">
          <div class="ml-16 cursor-pointer">
            <p class="text-base font-normal">Trang chủ</p>
          </div>
        </router-link>
        <div class="ml-16">
          <p class="text-base font-normal">Khóa học</p>
        </div>
        <router-link :to="`userExam`">
          <div class="ml-16">
            <p class="text-base font-normal">Kì thi</p>
          </div>
        </router-link>
        <div class="ml-16">
          <p class="text-base font-normal">Diễn đàn</p>
        </div>
      </div>
      <div class="ml-16 w-[1px] h-5 bg-slate-700"></div>
      <div class="ml-16">
        <img
          src="../../assets/vietnam.jpg"
          width="50px"
          height="50px"
          alt="viet nam"
        />
      </div>
      <!-- cụm đăng nhập -->
      <div class="absolute right-20 flex items-center justify-end">
        <div class="ml-7">
          <img
            class="rounded-full"
            src="../../assets/avatar.jpg"
            width="40px"
            alt="avatar"
          />
        </div>
        <div class="ml-3">
          <p class="text-lg font-normal">Vũ Tấn Minh</p>
        </div>
        <div class="ml-3">
          <img
            class="cursor-pointer"
            src="../../assets/down.png"
            width="20px"
            alt="mui ten"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
