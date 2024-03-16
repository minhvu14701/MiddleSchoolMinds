<template>
  <div class="flex flex-col justify-start">
    <div>
      <!-- <textarea
        v-model="inputValue"
        @input="emitValue()"
        name="content"
        id="content"
        class="w-full h-52 bg-gray-200 mt-1 px-4 py-2"
      ></textarea> -->
      <vue-tiptap-katex />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import VueTiptapKatex from "vue3-tiptap-katex";
export default {
  component: {
    VueTiptapKatex,
  },
  setup(props, ctx) {
    const inputValue = ref("");

    const emitValue = () => {
      ctx.emit("update:emitValue", inputValue.value);
    };
    return {
      inputValue,
      emitValue,
    };
  },
};
</script>
