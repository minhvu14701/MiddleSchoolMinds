<template>
  <div
    class="bg-[#f2f3f5] mt-6 p-3 border border-[#dadef2] rounded-lg min-h-10"
  >
    <!-- tên -->
    <div class="flex flex-col mb-1">
      <div class="relative flex flex-row items-center">
        <p class="text-2xl font-semibold">{{ info.fullname }}</p>
        <img class="ml-7 w-4 h-4" src="../../assets/subject.png" alt="" />
        <p class="ml-2 text-base font-medium text-[#e0761e]">
          {{ info.tenmon }}
        </p>
        <div class="absolute right-3">
          <p class="ml-2 text-sm font-normal">
            {{ info.SumAnswer }} câu trả lời
          </p>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <img class="w-4 h-4" src="../../assets/clock.png" alt="" />
        <p class="ml-2 text-sm font-medium text-[#116cd4]">
          {{ formatDate(info.date_ques) }}
        </p>
      </div>
    </div>
    <div class="w-60 h-[1px] bg-slate-300"></div>
    <!-- nội dung -->
    <div class="mx-5 mt-3">
      <div v-html="formattedContent()"></div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: ["info"],
  setup(props) {
    const formatDate = (newDay) => {
      const close = dayjs(newDay).format("HH:mm DD/MM/YYYY");
      return close;
    };
    const formattedContent = () => {
      return props.info.content.replace(/\n/g, "<br>");
    };
    return { formatDate, formattedContent };
  },
};
</script>
