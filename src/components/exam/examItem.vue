<template>
  <div v-if="exam.mon_id == imglink.id" class="">
    <div class="">
      <div class="flex h-24 mr-6 border rounded-lg border-gray-100 mt-5">
        <div
          class="relative h-24 w-24 border rounded-l-lg"
          :style="{ backgroundColor: imglink.colors }"
        >
          <!-- icon -->
          <div
            :style="{ backgroundColor: imglink.colors }"
            class="absolute left-1/3 top-2.5 h-9 w-9 border-2 border-white rounded-full"
          >
            <div
              class="flex justify-center mt-1.5"
              v-html="imglink.icons"
            ></div>
          </div>
          <!-- chữ -->
          <div class="flex w-20 h-auto m-2 mt-14 text-xs font-semibold">
            <p class="flex text-start">
              Khối {{ exam.tenlop }} - {{ exam.tenmon }}
            </p>
          </div>
        </div>
        <!-- tên -->
        <div class="flex items-center w-56 h-auto ml-4 text-sm font-semibold">
          <p class="text-start">{{ exam.name }}</p>
        </div>
        <!-- thời gian -->
        <div class="flex flex-col items-center justify-center w-20 h-auto ml-4">
          <p class="text-sm font-normal">Thời lượng</p>
          <p class="text-sm font-semibold">{{ fomatTime(exam.time) }} phút</p>
        </div>
        <!-- điểm -->
        <div class="flex flex-col w-28 items-start justify-center ml-4">
          <p class="text-sm font-normal">Điểm</p>
          <div
            v-if="exam.point == null"
            class="text-red-600 text-sm font-semibold"
          >
            Chưa thi
          </div>
          <div v-else-if="exam.point" class="flex">
            <p class="text-red-600 text-sm font-semibold">
              {{ exam.point }}
            </p>
            <div v-if="exam.point >= 5">
              <p class="text-green-400 text-sm font-semibold">(Đạt)</p>
            </div>
            <div v-else-if="exam.point < 5">
              <p class="text-[#C83131] text-sm font-semibold">(Chưa đạt)</p>
            </div>
          </div>
        </div>
        <!-- thời gian thi -->
        <div
          class="flex flex-col w-44 h-14 mt-5 justify-center items-center rounded-lg bg-gray-100"
        >
          <p class="text-sm font-normal">Thời gian thi</p>
          <p class="text-sm font-semibold text-blue-500">
            {{ formatDate(exam.open_time, exam.close_time) }}
          </p>
        </div>
        <!-- Tham gia thi -->
        <div class="ml-3 flex flex-col justify-center items-center">
          <div
            v-if="
              isDate(exam.open_time, exam.close_time) === 2 &&
              exam.point == null
            "
          >
            <button
              @click.prevent="clickJoinExam(exam.id)"
              class="flex justify-center items-center mb-1 w-28 h-8 bg-blue-600 rounded-xl"
            >
              <p class="text-sm font-semibold text-white">Tham gia thi</p>
            </button>
          </div>

          <div v-else>
            <button
              type="submit"
              class="flex justify-center items-center mb-1 w-28 h-8 bg-slate-600 rounded-xl"
              disabled
            >
              <p class="text-sm font-semibold text-slate-400">Tham gia thi</p>
            </button>
          </div>
          <!-- Sắp diễn ra -->
          <div
            v-if="isDate(exam.open_time, exam.close_time) === 1"
            class="w-28 h-4 rounded-2xl mt-1"
            style="background-color: #fdecd4"
          >
            <p style="color: #f3a127" class="text-xs font-semibold text-center">
              Sắp diễn ra
            </p>
          </div>
          <!-- đang diễn ra -->
          <div
            v-else-if="isDate(exam.open_time, exam.close_time) === 2"
            class="w-28 h-4 rounded-2xl mt-1"
            style="background-color: #d2e8e0"
          >
            <p style="color: #1d8c64" class="text-xs font-semibold text-center">
              Đang diễn ra
            </p>
          </div>
          <!-- Đã kết thúc -->
          <div
            v-else-if="isDate(exam.open_time, exam.close_time) === 3"
            class="w-28 h-4 rounded-2xl mt-1"
            style="background-color: #f4d6d6"
          >
            <p style="color: #c83131" class="text-xs font-semibold text-center">
              Đã kết thúc
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { getExamTimeStore } from "@/stores/exam/ExamStore.js";
import { storeToRefs } from "pinia";
import { onMounted, onBeforeMount } from "vue";
import { useUserStore } from "@/stores/UserStore";
export default {
  props: ["exam", "imglink"],
  setup() {
    const store = useUserStore();

    const fomatTime = (time) => {
      const timeString = time;
      const [hours, minutes, seconds] = timeString.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      return totalMinutes;
    };
    const formatDate = (openTime, closeTime) => {
      const open = dayjs(openTime).format("HH:mm");
      const close = dayjs(closeTime).format("HH:mm DD/MM/YYYY");
      const dataDate = open + "-" + close;
      return dataDate;
    };
    function isDate(openTime, closeTime) {
      let status = -1;
      const currentDate = new Date();
      if (currentDate < new Date(openTime)) {
        status = 1;
      } else if (
        currentDate >= new Date(openTime) &&
        currentDate <= new Date(closeTime)
      ) {
        status = 2;
      } else {
        status = 3;
      }
      return status;
    }
    //Sự kiện click
    const router = useRouter();
    const clickJoinExam = (examId) => {
      router.push(`/takeExamUser/${examId}`);
    };
    return { fomatTime, formatDate, isDate, clickJoinExam };
  },
};
</script>
