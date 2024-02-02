<template>
  <div>
    <header>
      <headerMain />
    </header>
    <div class="flex">
      <!-- đề thi -->
      <div
        style="width: 870px; height: auto; background-color: #fff"
        class="relative ml-32 mt-14 border rounded-lg mb-6"
      >
        <!-- tổng -->
        <div class="mx-7">
          <!-- tiêu đề -->
          <div class="flex mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="32"
                viewBox="0 0 26 32"
                fill="none"
              >
                <path
                  d="M10.213 13.4395L11.2073 15.9995H9.21875L10.213 13.4395Z"
                  fill="#005FD0"
                />
                <path
                  d="M22.2143 0H3.92857C3.01926 0 2.14719 0.361224 1.50421 1.00421C0.861224 1.64719 0.5 2.51926 0.5 3.42857V28.5714C0.5 29.4807 0.861224 30.3528 1.50421 30.9958C2.14719 31.6388 3.01926 32 3.92857 32H16.5V26.2857C16.5 25.3764 16.8612 24.5043 17.5042 23.8613C18.1472 23.2184 19.0193 22.8571 19.9286 22.8571H25.6429V3.42857C25.6429 2.51926 25.2816 1.64719 24.6387 1.00421C23.9957 0.361224 23.1236 0 22.2143 0ZM14.6257 21.6343C14.4953 21.6883 14.3554 21.7155 14.2143 21.7143C13.9841 21.7136 13.7594 21.6434 13.5698 21.5129C13.3801 21.3824 13.2343 21.1976 13.1514 20.9829L12.1 18.2857H8.32857L7.27714 20.9829C7.23142 21.1333 7.15514 21.2727 7.05309 21.3923C6.95105 21.5119 6.82542 21.6091 6.68406 21.678C6.54271 21.7468 6.38867 21.7857 6.23159 21.7923C6.0745 21.7989 5.91775 21.773 5.77112 21.7163C5.6245 21.6595 5.49117 21.5731 5.37946 21.4625C5.26776 21.3518 5.18008 21.2193 5.12191 21.0733C5.06375 20.9272 5.03635 20.7707 5.04143 20.6136C5.04651 20.4564 5.08395 20.302 5.15143 20.16L9.15143 9.87429C9.23568 9.66112 9.38208 9.47821 9.57162 9.34931C9.76116 9.22042 9.98507 9.1515 10.2143 9.1515C10.4435 9.1515 10.6674 9.22042 10.857 9.34931C11.0465 9.47821 11.1929 9.66112 11.2771 9.87429L13.9286 16.7314L15.2771 20.16C15.3854 20.4419 15.3776 20.7553 15.2556 21.0315C15.1335 21.3078 14.9071 21.5245 14.6257 21.6343ZM19.9286 11.4286H18.7857V12.5714C18.7857 12.8745 18.6653 13.1652 18.451 13.3796C18.2367 13.5939 17.946 13.7143 17.6429 13.7143C17.3398 13.7143 17.0491 13.5939 16.8347 13.3796C16.6204 13.1652 16.5 12.8745 16.5 12.5714V11.4286H15.3571C15.054 11.4286 14.7633 11.3082 14.549 11.0938C14.3347 10.8795 14.2143 10.5888 14.2143 10.2857C14.2143 9.98261 14.3347 9.69192 14.549 9.47759C14.7633 9.26327 15.054 9.14286 15.3571 9.14286H16.5V8C16.5 7.6969 16.6204 7.40621 16.8347 7.19188C17.0491 6.97755 17.3398 6.85714 17.6429 6.85714C17.946 6.85714 18.2367 6.97755 18.451 7.19188C18.6653 7.40621 18.7857 7.6969 18.7857 8V9.14286H19.9286C20.2317 9.14286 20.5224 9.26327 20.7367 9.47759C20.951 9.69192 21.0714 9.98261 21.0714 10.2857C21.0714 10.5888 20.951 10.8795 20.7367 11.0938C20.5224 11.3082 20.2317 11.4286 19.9286 11.4286ZM18.7857 26.2857V31.3371L24.98 25.1429H19.9286C19.6255 25.1429 19.3348 25.2633 19.1204 25.4776C18.9061 25.6919 18.7857 25.9826 18.7857 26.2857Z"
                  fill="#005FD0"
                />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-2xl font-semibold">
                {{ questions.title.titleName }}
              </p>
            </div>
          </div>
          <!-- Thời gian và câu hỏi -->
          <div class="flex mt-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
              >
                <path
                  d="M9.66667 4.16699C7.85367 4.16699 6.08139 4.70461 4.57394 5.71185C3.06649 6.7191 1.89158 8.15074 1.19777 9.82573C0.503972 11.5007 0.322441 13.3438 0.676139 15.122C1.02984 16.9001 1.90288 18.5335 3.18486 19.8155C4.46684 21.0974 6.10018 21.9705 7.87834 22.3242C9.6565 22.6779 11.4996 22.4964 13.1746 21.8026C14.8496 21.1087 16.2812 19.9338 17.2885 18.4264C18.2957 16.9189 18.8333 15.1467 18.8333 13.3337C18.8333 10.9025 17.8676 8.57093 16.1485 6.85185C14.4294 5.13276 12.0978 4.16699 9.66667 4.16699ZM14.25 14.2503H8.75V8.75032H10.5833V12.417H14.25V14.2503Z"
                  fill="#9DA6BA"
                />
                <path d="M13.3333 0.5H6V2.33333H13.3333V0.5Z" fill="#9DA6BA" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-base font-normal">
                Thời gian làm bài là: {{ fomatTime(questions.title.time) }} phút
              </p>
            </div>
            <div class="ml-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M10.5 0.5C4.98583 0.5 0.5 4.98583 0.5 10.5C0.5 16.0142 4.98583 20.5 10.5 20.5C16.0142 20.5 20.5 16.0142 20.5 10.5C20.5 4.98583 16.0142 0.5 10.5 0.5ZM10.0833 16.3333C9.39333 16.3333 8.83333 15.7733 8.83333 15.0833C8.83333 14.3933 9.39333 13.8333 10.0833 13.8333C10.7733 13.8333 11.3333 14.3933 11.3333 15.0833C11.3333 15.7733 10.7733 16.3333 10.0833 16.3333ZM13.6758 8.93917C13.4183 9.35167 12.9292 9.815 12.2075 10.33C11.04 11.1933 11.0717 11.385 11.0717 12.1667H9.02417C9.02417 11.5558 9.01083 11.0867 9.34083 10.5158C9.55167 10.15 9.93833 9.76083 10.5 9.34917C11.1742 8.8675 11.8292 8.40333 11.8292 7.595C11.8292 6.8375 11.1808 6.5675 10.4233 6.5675C9.65083 6.5675 8.77 6.82 7.78083 7.325L6.93833 5.63333C8.73583 4.62583 11.5725 4.17 13.1233 5.4325C14.2617 6.36 14.2683 7.99083 13.6758 8.93917Z"
                  fill="#9DA6BA"
                />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-base font-normal">
                Số câu hỏi : {{ questions.data.length }}
              </p>
            </div>
            <div class="absolute right-7 flex">
              <p class="text-base font-normal text-end mr-2">Môn học:</p>
              <p class="text-xl font-semibold -mt-1" style="color: #005fd0">
                {{ questions.title.tenmon }}
              </p>
            </div>
          </div>
          <!-- thanh ngang -->
          <div
            style="background-color: #dadef2; height: 1px; width: auto"
            class=""
          ></div>
          <!-- Câu hỏi -->
          <div
            v-for="(ques, index) in questions.data"
            :key="ques.id"
            class="flex flex-col text-start"
          >
            <div class="relative flex mt-5">
              <div class="mr-48">
                <p class="text-sm font-semibold">
                  Câu {{ index + 1 }}: {{ ques.noi_dung }}
                </p>
              </div>
              <div class="absolute right-0">
                <p class="text-sm font-normal">Đánh dấu</p>
              </div>
            </div>
            <div class="text-sm font-normal mt-3">
              <div class="flex mb-3">
                <div>
                  <input
                    class="w-5 h-5 rounded-full"
                    type="radio"
                    :name="ques.id"
                    :id="index + 'a'"
                    value="0"
                    :checked="savedAnswers[index] == 0 ? true : false"
                    v-model="selectedAnswers[index]"
                    @change="
                      autoSaveAnswer(index),
                        savedAnswers[index] === null
                          ? saveAnswerToDB(index, ques.id)
                          : updateAnswerToDB(index, ques.id)
                    "
                  />
                </div>
                <div class="ml-3 mr-48">
                  <label :for="index + 'a'">A. {{ ques.answer1 }}</label>
                </div>
              </div>
              <div class="flex mb-3">
                <div>
                  <input
                    class="w-5 h-5"
                    type="radio"
                    :name="ques.id"
                    :id="index + 'b'"
                    value="1"
                    v-model="selectedAnswers[index]"
                    @change="
                      autoSaveAnswer(index),
                        savedAnswers[index] === null
                          ? saveAnswerToDB(index, ques.id)
                          : updateAnswerToDB(index, ques.id)
                    "
                    :checked="savedAnswers[index] == 1 ? true : false"
                  />
                </div>
                <div class="ml-3 mr-48">
                  <label :for="index + 'b'">B. {{ ques.answer2 }}</label>
                </div>
              </div>
              <div class="flex mb-3">
                <div>
                  <input
                    class="w-5 h-5 rounded-full"
                    type="radio"
                    :name="ques.id"
                    :id="index + 'c'"
                    value="2"
                    v-model="selectedAnswers[index]"
                    @change="
                      autoSaveAnswer(index),
                        savedAnswers[index] === null
                          ? saveAnswerToDB(index, ques.id)
                          : updateAnswerToDB(index, ques.id)
                    "
                    :checked="savedAnswers[index] == 2 ? true : false"
                  />
                </div>
                <div class="ml-3 mr-48">
                  <label :for="index + 'c'">C. {{ ques.answer3 }}</label>
                </div>
              </div>
              <div class="flex mb-3">
                <div>
                  <input
                    class="w-5 h-5 rounded-full"
                    type="radio"
                    :name="ques.id"
                    :id="index + 'd'"
                    value="3"
                    v-model="selectedAnswers[index]"
                    @change="
                      autoSaveAnswer(index),
                        savedAnswers[index] === null
                          ? saveAnswerToDB(index, ques.id)
                          : updateAnswerToDB(index, ques.id)
                    "
                    :checked="savedAnswers[index] == 3 ? true : false"
                  />
                </div>
                <div class="ml-3 mr-48">
                  <label :for="index + 'd'">D. {{ ques.answer4 }}</label>
                </div>
              </div>
            </div>
            <div
              style="background-color: #dadef2; height: 1px; width: auto"
              class="mt-4"
            ></div>
          </div>
        </div>
      </div>
      <!-- thời gian -->
      <div>
        <countdownTimer
          :exam_id="examId"
          :countAnswer="questions.data"
          :checkAnswerPick="savedAnswers"
          :submitButton="calPoint"
          :timeExam="fomatTime(questions.title.time)"
        ></countdownTimer>
      </div>
    </div>
    <footer>
      <footerPage />
    </footer>
  </div>
</template>

<script>
import headerMain from "../../components/headerfooter/headerMain.vue";
import footerPage from "../../components/headerfooter/footerPage.vue";
import countdownTimer from "@/components/exam/countdownTimer.vue";
import axios from "axios";
import { takeExamStore } from "@/stores/exam/ExamStore.js";
import { socket } from "../../socket";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/UserStore";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, onBeforeMount } from "vue";
export default {
  components: {
    headerMain,
    footerPage,
    countdownTimer,
  },
  setup() {
    //Lấy thông tin câu hỏi trong đề thi

    const store = useUserStore();
    const takeStore = takeExamStore();
    const route = useRoute();
    const router = useRouter();
    const examId = route.params.id;
    const user_id = store.user.user.id;
    const username = store.user.user.username;
    const data = {
      quesId: examId,
    };
    const accessToken = store.user.accessToken;
    const { questions, getData } = storeToRefs(takeStore);
    takeStore.fetchTakeExamUser(data, accessToken);
    console.log(questions.value);
    //lấy số phút
    const fomatTime = (time) => {
      const timeString = time;
      const [hours, minutes, seconds] = timeString.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      return totalMinutes;
    };
    //socket
    socket.auth = {
      username: store.user.user.username,
      exam_id: examId,
    };
    socket.connect();
    //lưu trạng thái đáp án
    const selectedAnswers = ref(Array(60).fill(null)); //array.fill: Điền tất cả giá trị mảng bằng null
    const savedAnswers = ref(Array(60).fill(null));
    const autoSaveAnswer = async (questionIndex) => {
      try {
        const dataAnswer = selectedAnswers.value[questionIndex];
        //Lưu dữ liệu vào redis để reload trang
        const dataSaveAnwers = {
          userQues: user_id + "-" + examId,
          answer: dataAnswer,
        };
        const response = await axios.post(
          `http://localhost:5000/api/exam/saveAnswer/${questionIndex}`,
          dataSaveAnwers
        );
        console.log(response);
        // Cập nhật giá trị đã lưu để hiển thị
        savedAnswers.value[questionIndex] = dataAnswer;
        //Gửi thông báo vào server
        const keyEmitSelectAns = "Exam-" + examId + "-username-" + username;
        console.log(keyEmitSelectAns);
        socket.emit(`${keyEmitSelectAns}`, {
          selected: dataAnswer,
          index: questionIndex,
        });
      } catch (error) {
        console.error(
          `Error saving answer for question ${questionIndex + 1}:`,
          error
        );
      }
    };
    //Lưu dữ liệu vào database để tính điểm
    const saveAnswerToDB = async (questionIndex, questionId) => {
      try {
        const dataAnswer = selectedAnswers.value[questionIndex];
        const dataInsert = {
          user_id: user_id,
          question_id: questionId,
          answer: dataAnswer,
        };
        const insertRes = await axios.post(
          `http://localhost:5000/api/exam/saveSelectAnswer`,
          dataInsert
        );
        console.log(insertRes);
      } catch (error) {
        console.error(`Error save answer to DB ${questionIndex + 1}:`, error);
      }
    };
    //Update answer trong database
    const updateAnswerToDB = async (questionIndex, questionId) => {
      try {
        const dataAnswer = selectedAnswers.value[questionIndex];
        const dataUpdate = {
          user_id: user_id,
          question_id: questionId,
        };
        const updateRes = await axios.post(
          `http://localhost:5000/api/exam/updateAnswerData/${dataAnswer}`,
          dataUpdate
        );
        console.log(updateRes);
      } catch (error) {
        console.error(`Error update answer to DB ${questionIndex + 1}:`, error);
      }
    };
    //chuyển sang tag thông báo điểm
    const calPoint = async () => {
      if (confirm("Bạn muốn nộp bài ngay bây giờ?")) {
        router.push(`/calPoint/${examId}`);
        //xóa data trong redis
        for (let i = 0; i < getData.value.length; i++) {
          try {
            const dataDelAnswer = {
              userQues: user_id + "-" + examId,
            };
            const response = await axios.post(
              `http://localhost:5000/api/exam/delAnswer/${i}`,
              dataDelAnswer
            );
            console.log(response);
          } catch (error) {
            console.error(
              `Error getting saved answer for question ${i + 1}:`,
              error
            );
          }
        }
      }
    };
    // Lấy trạng thái đã lưu khi component được mounte
    onMounted(async () => {
      console.log(questions.value);
      for (let i = 0; i < getData.value.length; i++) {
        try {
          const dataGetAnswer = {
            userQues: user_id + "-" + examId,
          };
          const response = await axios.post(
            `http://localhost:5000/api/exam/getAnswer/${i}`,
            dataGetAnswer
          );
          savedAnswers.value[i] = response.data.answer;
        } catch (error) {
          console.error(
            `Error getting saved answer for question ${i + 1}:`,
            error
          );
        }
      }
    });
    return {
      questions,
      fomatTime,
      examId,
      autoSaveAnswer,
      selectedAnswers,
      savedAnswers,
      saveAnswerToDB,
      updateAnswerToDB,
      calPoint,
    };
  },
};
</script>
