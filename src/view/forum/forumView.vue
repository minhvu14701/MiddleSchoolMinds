<template>
  <div>
    <header>
      <headerMain />
      <header2 :folder="title" />
    </header>
    <!-- Tổng -->
    <div
      class="bg-[#fff] mx-20 my-10 border border-zinc-400 rounded-lg min-h-28"
    >
      <!-- trong -->
      <div class="px-20 py-5 container">
        <!-- tìm kiếm -->
        <div class="flex items-center justify-between">
          <div class="relative flex flex-row justify-center items-center">
            <label for="search">Tìm kiếm: </label>
            <img
              class="absolute left-[120px] top-3 h-4 w-4"
              src="../../assets/search.png"
              alt=""
            />
            <input
              type="text"
              id="search"
              name="search"
              class="h-9 w-60 ml-10 pl-9 text-gray-500 border border-gray-300 rounded-3xl"
              placeholder="Nhập từ khóa"
            />
          </div>
          <!-- chọn môn -->
          <div class="">
            <label for="subject">Chọn môn:</label>
            <select
              name="subject"
              v-model="subjectValue"
              style="width: 180px; height: 42px"
              class="ml-9 px-3 border bg-[#f1f1f1] rounded-lg"
            >
              <option value="0">Tất cả</option>
              <option v-for="sub in subjects" :key="sub.id" :value="sub.id">
                {{ sub.tenmon }}
              </option>
            </select>
          </div>
          <div>
            <button
              @click="addQuestion()"
              class="bg-[#005fd0] text-white text-base font-semibold px-6 py-2.5 rounded-lg"
            >
              Đặt câu hỏi
            </button>
          </div>
        </div>
        <!-- câu hỏi -->
        <div v-for="ques in questions" :key="ques.id">
          <questionItem :info="ques" />
        </div>
      </div>
    </div>
    <div
      v-if="isAddQuestion"
      class="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-black bg-opacity-40"
    >
      <div class="relative w-[600px] min-h-8 bg-white p-5 rounded-lg">
        <!-- dấu X -->
        <div class="absolute right-[-25px] top-[-25px]">
          <img
            @click="addQuestion()"
            class="h-6 w-6 cursor-pointer"
            src="../../assets/exit.png"
            alt="Dấu X"
          />
        </div>
        <form @submit.prevent="actionAddQues()">
          <div class="flex flex-row items-center">
            <label class="text-base font-medium" for="subject">Chọn môn:</label>
            <select
              name="subject"
              v-model="dataAddQues.id_mon"
              style="width: 120px; height: 36px"
              class="ml-6 px-3 border bg-[#f1f1f1] rounded-lg"
            >
              <option v-for="sub in subjects" :key="sub.id" :value="sub.id">
                {{ sub.tenmon }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mt-3">
            <label class="text-base font-medium" for="question"
              >Câu hỏi của bạn:</label
            >
            <inputQuestion
              v-model:emitValue="dataAddQues.content"
            ></inputQuestion>
            <!-- <textarea
              class="bg-[#F1F1F1] mt-2"
              name="question"
              id="question"
              cols="30"
              rows="10"
              v-model="dataAddQues.content"
            ></textarea> -->
          </div>
          <div class="flex items-center justify-center">
            <button
              class="px-4 py-2.5 text-white bg-sky-500 rounded-lg mt-3"
              type="submit"
            >
              Gửi câu hỏi
            </button>
          </div>
        </form>
        <div
          v-if="isSuccess"
          class="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-black bg-opacity-40"
        >
          <div
            class="flex flex-col justify-center items-center w-auto min-h-8 bg-white p-5 rounded-lg"
          >
            <div class="flex justify-center items-center">
              <img src="../../assets/check.png" width="60px" alt="" />
              <p class="ml-3 text-lg font-normal">Đặt câu hỏi thành công !</p>
            </div>
            <div class="mt-4">
              <button
                @click="actionSuccess()"
                class="px-3 py-2 rounded-lg bg-blue-400"
              >
                OK
              </button>
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
import headerMain from "@/components/headerfooter/headerMain.vue";
import header2 from "@/components/headerfooter/header2.vue";
import footerPage from "@/components/headerfooter/footerPage.vue";
import questionItem from "@/components/forum/questionItem.vue";
import inputQuestion from "@/components/forum/inputQuestion.vue";
import { useUserStore } from "../../stores/UserStore.js";

import { storeToRefs } from "pinia";
import { getSubject } from "../../stores/otherStore.js";
import { getListQues, addQuestions } from "../../stores/forumStore.js";
import { reactive, ref } from "vue";
export default {
  components: {
    headerMain,
    header2,
    footerPage,
    questionItem,
    inputQuestion,
  },
  setup() {
    const title = ref("> Diễn Đàn");
    const subjectValue = ref(0);
    const { subjects } = storeToRefs(getSubject());
    const { fetchSubject } = getSubject();
    fetchSubject();
    const { questions } = storeToRefs(getListQues());
    const { fetchQuestion } = getListQues();
    // fetchQuestion();
    const fetchData = async () => {
      await fetchQuestion();
      console.log(questions.value);
    };
    fetchData();
    //Add
    const isAddQuestion = ref(false);
    const isSuccess = ref(false);
    const addQuestion = () => {
      isAddQuestion.value = !isAddQuestion.value;
    };
    const store = useUserStore();
    const user_id = store.user.user.id;
    const { addQues } = storeToRefs(addQuestions());
    const { fetchAddQuestion } = addQuestions();
    const dataAddQues = reactive({
      id_user: user_id,
      id_mon: "",
      content: "",
    });

    const actionAddQues = async () => {
      console.log(dataAddQues);
      await fetchAddQuestion(dataAddQues);
      if (addQues.value == true) {
        console.log("add successfully");
        isSuccess.value = true;
      }
    };
    const actionSuccess = () => {
      window.location.reload();
    };

    return {
      title,
      subjectValue,
      subjects,
      questions,
      isAddQuestion,
      addQuestion,
      dataAddQues,
      actionAddQues,
      isSuccess,
      actionSuccess,
    };
  },
};
</script>
