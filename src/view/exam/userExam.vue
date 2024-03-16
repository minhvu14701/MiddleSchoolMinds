<template>
  <div>
    <header>
      <headerMain />
      <header2 :folder="title" />
      <Sidebar />
    </header>
    <div>
      <div class="ml-80 mt-12 bg-[#FFF]">
        <!-- nút bấm -->
        <!-- vùng hiển thị 1-->
        <div
          style="width: auto; height: auto; position: relative"
          class="w-full h-auto mr-64 rounded-lg bg-bgCourse border-2 border-gray-300"
        >
          <div class="mt-6 ml-8">
            <!-- tìm kiếm -->
            <div class="container flex flex-row">
              <div
                class="grid grid-cols-3 gap-x-10 justify-center items-center text-sm font-normal"
              >
                <!-- thanh tìm kiếm -->

                <div class="flex justify-center items-center">
                  <label class="" for="iSearch">Tìm kiếm:</label>
                  <div class="flex justify-center items-center ml-6">
                    <div class="absolute mr-36">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M8.52344 3.33398C11.561 3.33398 14.0234 5.79642 14.0234 8.83398C14.0234 10.0823 13.6076 11.2335 12.9068 12.1566L17.0538 16.3037C17.3467 16.5965 17.3467 17.0714 17.0538 17.3643C16.7875 17.6306 16.3708 17.6548 16.0772 17.4369L15.9931 17.3643L11.846 13.2173C10.9229 13.9181 9.77176 14.334 8.52344 14.334C5.48587 14.334 3.02344 11.8716 3.02344 8.83398C3.02344 5.79642 5.48587 3.33398 8.52344 3.33398ZM8.52344 4.83398C6.3143 4.83398 4.52344 6.62485 4.52344 8.83398C4.52344 11.0431 6.3143 12.834 8.52344 12.834C10.7326 12.834 12.5234 11.0431 12.5234 8.83398C12.5234 6.62485 10.7326 4.83398 8.52344 4.83398Z"
                          fill="#7E8CAC"
                        />
                      </svg>
                    </div>
                    <input
                      id="iSearch"
                      type="text"
                      class="h-9 w-48 pl-9 text-gray-600 border border-gray-300 rounded-3xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Nhập từ khóa"
                    />
                  </div>
                </div>

                <!-- chọn môn -->
                <div class="flex justify-center items-center">
                  <label for="subject">Chọn môn:</label>
                  <select
                    name="subject"
                    style="width: 180px; height: 42px"
                    class="ml-3 px-3 border bg-stone-300 rounded-lg"
                  >
                    <option value="">Tất cả</option>
                  </select>
                </div>
                <!-- trạng thái -->
                <div class="flex justify-center items-center">
                  <label for="status">Trạng thái:</label>
                  <select
                    name="status"
                    style="width: 180px; height: 42px"
                    class="ml-3 px-3 border bg-stone-300 rounded-lg"
                  >
                    <option value="">Tất cả</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- hiển thị -->
            <div class="flex flex-col mt-2">
              <div v-for="exam in exams" :key="exam.id" class="">
                <div v-for="imglink in getLinkImages" :key="imglink.id">
                  <examItem :exam="exam" :imglink="imglink"> </examItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-48">
      <footerPage />
    </footer>
  </div>
</template>

<script>
import headerMain from "@/components/headerfooter/headerMain.vue";
import header2 from "@/components/headerfooter/header2.vue";
import footerPage from "@/components/headerfooter/footerPage.vue";
import examItem from "@/components/exam/examItem.vue";
import { getExamStore } from "../../stores/exam/ExamStore.js";
import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores/UserStore.js";
import { reactive, ref } from "vue";
import { PUBLIC_IMAGE } from "../../others/constaint.js";
export default {
  components: {
    header2,
    headerMain,
    footerPage,
    examItem,
  },
  setup() {
    //title
    const title = ref("> Kì thi");
    //Lấy thông tin kì thi
    const store = useUserStore();
    const user_id = store.user.user.id;
    console.log(user_id);
    const data = {
      userId: user_id,
    };
    const accessToken = store.user.accessToken;
    console.log(accessToken);
    const { exams } = storeToRefs(getExamStore());
    const { fetchExamUser } = getExamStore();
    fetchExamUser(data, accessToken);
    console.log(exams);

    //Lấy ảnh
    const getLinkImages = reactive(PUBLIC_IMAGE);
    return { exams, getLinkImages, title };
  },
};
</script>
