<template>
  <div>
    <header>
      <headerMain />
    </header>
    <div class="flex justify-center items-center">
      <div
        style="width: 900px; height: 600px; background-color: #fff"
        class="mt-16 border rounded-lg mb-6"
      >
        <div class="mt-3">
          <p class="text-3xl font-semibold text-sky-600">
            Chúc mừng bạn đã hoàn thành xuất sắc bài kiểm tra
          </p>
        </div>
        <div class="flex flex-col ml-5 mt-4 text-lg font-normal">
          <div class="flex">
            <p>Điểm số của bạn là:</p>
            <p>{{ pointUser.userPoint }}</p>
          </div>
          <div class="flex">
            Số câu trả lời đúng: {{ pointUser.totalCorrect }} /
            {{ pointUser.totalQuestion }}
          </div>
        </div>
        <div class="flex ml-5">
          <button
            class="h-10 w-28 bg-[#005FD0] rounded-lg text-white"
            @click="backRouter()"
          >
            Trở về
          </button>
        </div>
      </div>
    </div>
    <footer class="mt-48">
      <footerPage />
    </footer>
  </div>
</template>

<script>
import headerMain from "../../components/headerfooter/headerMain.vue";
import header2 from "../../components/headerfooter/header2.vue";
import footerPage from "../../components/headerfooter/footerPage.vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/UserStore";
import { getExamPointStore } from "@/stores/exam/ExamStore.js";
import { useRoute, useRouter } from "vue-router";
export default {
  components: {
    header2,
    headerMain,
    footerPage,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useUserStore();
    const user_id = store.user.user.id;
    const examId = route.params.examId;
    const data = {
      user_id: user_id,
      cuoc_thi_id: examId,
    };
    const { pointUser } = storeToRefs(getExamPointStore());
    const { fetchExamPoint } = getExamPointStore();
    fetchExamPoint(data);
    console.log(pointUser.value);
    const backRouter = () => {
      router.push(`/userExam`);
    };
    return { pointUser, backRouter };
  },
};
</script>
