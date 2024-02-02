<template>
  <div class="flex items-center justify-center h-screen">
    <!-- khung -->
    <div class="flex w-[860px] h-[500px] border border-slate-300 rounded-lg">
      <!-- trái -->
      <div class="w-[430px] h-full bg-[#F2F3F5]">
        <div class="px-9 pt-11">
          <!-- tiêu đề -->
          <div class="flex justify-center items-center">
            <div>
              <img
                src="../../assets/logoRemoveBg.png"
                alt="logo"
                width="150px"
                height="150px"
              />
            </div>
            <div>
              <p class="text-lg font-semibold text-black uppercase">
                nền tảng học trực tuyến MiddleSchoolMinds
              </p>
            </div>
          </div>
          <!-- mô tả -->
          <div class="mt-6">
            <p class="text-sm font-normal text-[#878CA8]">
              Hệ thống học trực tuyến MiddleSchoolMinds là công cụ trợ giúp đắc
              lực cho các bậc phụ huynh và học sinh trong việc học thêm kiến
              thức trực tuyến. Hãy đăng nhập ngay để khám phá những giờ học
              tuyệt vời với MiddleSchoolMinds.
            </p>
          </div>
          <!-- hướng dẫn -->
          <div
            class="mt-10 w-full h-[142px] border-2 border-[#F38020] rounded-xl bg-[#F2E7E0]"
          >
            <div class="pl-4 pt-4">
              <p class="text-[#F38020] text-sm font-semibold">
                Hướng dẫn đăng nhập
              </p>
            </div>
            <div>
              <div class="ml-6 mt-3 flex items-baseline">
                <div class="h-1.5 w-2.5 bg-black rounded-full"></div>
                <p class="ml-2 text-xs font-semibold">
                  Nếu có tài khoản MiddleSchoolMinds vui lòng nhập tên tài khoản
                  và mật khẩu tương ứng
                </p>
              </div>
              <div class="ml-6 mt-2 flex items-center">
                <div class="h-1.5 w-1.5 bg-black rounded-full"></div>
                <p class="ml-2 text-xs font-semibold">
                  Hoặc đăng nhập bằng tài khoản google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- phải -->
      <div class="w-[430px] h-full">
        <div class="relative px-9 pt-11">
          <div class="">
            <p class="text-3xl font-semibold">Đăng nhập</p>
          </div>
          <div class="flex mt-4">
            <p class="text-sm font-normal">Chưa có tài khoản?</p>
            <router-link :to="`/register`">
              <p
                class="ml-3 text-sm font-semibold text-[#005FD0] cursor-pointer"
              >
                Tạo tài khoản
              </p>
            </router-link>
          </div>
          <!-- đăng nhập -->
          <form @submit.prevent="loginFunction()">
            <div class="relative mt-8">
              <div class="">
                <input
                  class="w-full h-10 pl-2 border border-gray-500 rounded-md"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Tên đăng nhập"
                  v-model="dataLogin.username"
                  required
                />
              </div>
              <div class="relative mt-5">
                <input
                  class="w-full h-10 pl-2 border border-gray-500 rounded-md"
                  :type="isShowPassword ? 'text' : 'password'"
                  id="password"
                  name="password"
                  v-model="dataLogin.password"
                  placeholder="Mật khẩu"
                  required
                />
                <div
                  v-if="isShowPassword === true"
                  class="absolute right-2 bottom-2.5 cursor-pointer"
                >
                  <img
                    @click="showPassword()"
                    width="20px"
                    src="../../assets/eye.png"
                    alt=""
                  />
                </div>
                <div
                  v-if="isShowPassword === false"
                  class="absolute right-2 bottom-2.5 cursor-pointer"
                >
                  <img
                    @click="showPassword()"
                    width="20px"
                    src="../../assets/eyeHide.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!-- quên mạt khẩu -->
            <div class="relative mt-9 flex items-center">
              <div>
                <p class="text-[#005FD0] text-sm font-semibold">
                  Quên mật khẩu?
                </p>
              </div>
              <div class="absolute right-0">
                <button
                  type="submit"
                  class="w-32 h-12 bg-[#005FD0] text-white rounded-xl font-bold text-base"
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </form>
          <!-- hoặc -->
          <div class="mt-10 w-full h-0.5 bg-slate-400"></div>
          <div class="mt-2">
            <p class="text-sm font-normal text-[#505673]">
              Hoặc đăng nhập bằng
            </p>
          </div>
          <div class="mt-2 cursor-pointer ml-20">
            <img src="../../assets/google.png" alt="gg" width="200px" />
          </div>
          <div class="absolute right-2 top-2">
            <router-link :to="{ name: 'HomeNoLogin', params: {} }">
              <button
                class="w-24 h-8 bg-amber-300 text-white rounded-xl font-bold text-base"
              >
                Back
              </button>
            </router-link>
          </div>
          <div
            v-if="usernameExist"
            class="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-50"
          >
            <div
              class="px-10 w-[350px] h-[150px] bg-white rounded-2xl text-center"
            >
              <div class="flex flex-col items-center">
                <div class="mt-6">
                  <p class="text-lg font-semibold">
                    Tên đăng nhập không tồn tại
                  </p>
                </div>
                <div
                  class="mt-3 w-12 h-10 bg-emerald-400 flex justify-center items-center rounded-xl"
                >
                  <button
                    class="text-white text-base font-semibold"
                    @click="handleOk2()"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="passwordNot"
            class="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-50"
          >
            <div
              class="px-10 w-[350px] h-[150px] bg-white rounded-2xl text-center"
            >
              <div class="flex flex-col items-center">
                <div class="mt-6">
                  <p class="text-lg font-semibold">Mật khẩu không chính xác</p>
                </div>
                <div
                  class="mt-3 w-12 h-10 bg-emerald-400 flex justify-center items-center rounded-xl"
                >
                  <button
                    class="text-white text-base font-semibold"
                    @click="handleOk1()"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useUserStore } from "@/stores/UserStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
export default {
  setup() {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    const router = useRouter();
    const usernameExist = ref(false);
    const passwordNot = ref(false);
    const dataLogin = reactive({
      username: "",
      password: "",
    });
    const isShowPassword = ref(false);
    const showPassword = () => {
      isShowPassword.value = !isShowPassword.value;
    };
    const loginFunction = async () => {
      await userStore.addUser(dataLogin);
      if (user.value == 1) {
        usernameExist.value = true;
      } else if (user.value == 2) {
        passwordNot.value = true;
      } else {
        router.push("/");
      }
    };
    const handleOk2 = () => {
      usernameExist.value = false;
    };
    const handleOk1 = () => {
      passwordNot.value = false;
    };
    return {
      showPassword,
      dataLogin,
      isShowPassword,
      loginFunction,
      usernameExist,
      handleOk2,
      passwordNot,
      handleOk1,
    };
  },
};
</script>
