<template>
  <div class="w-screen">
    <header>
      <headerMain />
      <header2 />
    </header>
    <div class="px-20 mt-10">
      <!-- vùng 1 -->
      <div class="flex">
        <div class="w-1/2 pr-14">
          <p class="text-2xl font-semibold uppercase">
            Chào mừng bạn đến với MiddleSchoolMinds - Nền tảng Học online cho
            Học sinh Cấp 2
          </p>
          <p>
            Bạn đang tìm kiếm một nguồn học trực tuyến đầy đủ và đa dạng để giúp
            học sinh cấp 2 nắm bắt kiến thức một cách hiệu quả? Hãy đến với
            MiddleSchoolMinds - nơi tập trung những tài liệu giáo trình chất
            lượng và các tài nguyên học tập đa dạng.
          </p>
          <router-link :to="`/detail`">
            <button
              class="mt-6 w-40 h-10 border border-[#005FD0] text-[#005FD0] text-sm font-semibold rounded-xl hover:bg-sky-300 duration-300"
            >
              Xem chi tiết
            </button>
          </router-link>
        </div>
        <div class="w-1/2">
          <div class="flex justify-evenly">
            <div class="flex flex-col">
              <div>
                <div
                  class="flex justify-center items-center w-20 h-20 rounded-full border-4 border-[#F7F7F7] shadow-md bg-[#EAFFEB]"
                >
                  <img class="" src="../../assets/iconStudent.png" alt="" />
                </div>
                <p class="mt-5 text-4xl font-bold text-center">300</p>
                <p class="mt-1 text-base font-semibold text-center">Học sinh</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <div
                  class="flex justify-center items-center w-20 h-20 rounded-full border-4 border-[#F7F7F7] shadow-md bg-[#FFEDF1]"
                >
                  <img class="" src="../../assets/iconBook.png" alt="" />
                </div>
                <p class="mt-5 text-4xl font-bold text-center">30</p>
                <p class="mt-1 text-base font-semibold text-center">Học liệu</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <div
                  class="flex justify-center items-center w-20 h-20 rounded-full border-4 border-[#F7F7F7] shadow-md bg-[#FAEBFF]"
                >
                  <img class="" src="../../assets/iconExam.png" alt="" />
                </div>
                <p class="mt-5 text-4xl font-bold text-center">30</p>
                <p class="mt-1 text-base font-semibold text-center">Cuộc thi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <footerPage />
    </footer>
  </div>
</template>
<script>
import { socket } from "../../socket";
import headerMain from "../../components/headerfooter/headerMain.vue";
import header2 from "../../components/headerfooter/header2.vue";
import footerPage from "../../components/headerfooter/footerPage.vue";
import { useUserStore } from "@/stores/UserStore";
import { storeToRefs } from "pinia";
export default {
  components: {
    headerMain,
    header2,
    footerPage,
  },
  setup() {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    console.log(user);
    socket.connect();
    return {};
  },
};
</script>
