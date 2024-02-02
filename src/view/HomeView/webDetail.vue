<template>
  <div class="container">
    <header>
      <headerMain />
      <header2 :folder="title" />
    </header>
    <div class="px-20 mt-6">
      <h1 class="uppercase text-2xl font-semibold">Giới thiệu</h1>
      <div class="mt-5 w-full h-auto border border-gray-500 rounded-xl p-6">
        <p class="text-xl font-semibold">
          Chào mừng bạn đến với MiddleSchoolMinds - Nền tảng Học online cho Học
          sinh Cấp 2
        </p>
        <p class="text-base font-normal">
          Bạn đang tìm kiếm một nguồn học trực tuyến đầy đủ và đa dạng để giúp
          học sinh cấp 2 nắm bắt kiến thức một cách hiệu quả? Hãy đến với
          MiddleSchoolMinds - nơi tập trung những tài liệu giáo trình chất lượng
          và các tài nguyên học tập đa dạng.
        </p>
        <p class="mt-8 text-xl font-semibold">Về chúng tôi</p>
        <p class="mt-1 text-base font-normal">
          <span class="font-semibold"> MiddleSchoolMinds</span> là một trang web
          học trực tuyến được thiết kế đặc biệt cho học sinh cấp 2, với mục tiêu
          chính là tạo ra môi trường học tập trực tuyến thân thiện, linh hoạt và
          đầy đủ. Chúng tôi cam kết mang đến cho học sinh trải nghiệm học tập
          tích cực và hiệu quả, giúp họ phát triển kiến thức và kỹ năng cần
          thiết cho sự thành công trong học vấn và cuộc sống.
        </p>
        <p class="mt-8 text-xl font-semibold">
          Tại sao chọn MiddleSchoolMinds?
        </p>
        <p class="mt-3 text-base font-normal">
          <span class="font-semibold">1. Nội dung đa dạng: </span> Chúng tôi
          cung cấp bài giảng, video, bài tập, và tài liệu học tập phong phú, phủ
          sóng toàn diện các môn học từ toán, văn, khoa học đến xã hội.
        </p>
        <p class="mt-1 text-base font-normal">
          <span class="font-semibold">2. Học theo sở thích: </span> Học sinh có
          thể chọn các chủ đề yêu thích của mình để học, tận dụng các tài nguyên
          đa dạng để tìm hiểu theo cách phù hợp nhất với họ.
        </p>
        <p class="mt-1 text-base font-normal">
          <span class="font-semibold">3. Diễn đàn học tập: </span>
          MiddleSchoolMinds kết nối cộng đồng học sinh cấp 2, tạo nên một diễn
          đàn nơi họ có thể chia sẻ ý kiến, giúp đỡ lẫn nhau và tạo ra môi
          trường học tập tích cực.
        </p>
        <p class="mt-1 text-base font-normal">
          <span class="font-semibold"
            >4. Tương tác nhắn tin với học sinh khác:
          </span>
          Học sinh có thể tương tác, nhắn tin với các học sinh khác qua chat
          hoặc diễn đàn, nhận phản hồi và được hỗ trợ trong quá trình học tập.
        </p>
        <p class="mt-1 text-base font-normal">
          <span class="font-semibold">5. Phát triển kĩ năng toàn diện: </span>
          Chúng tôi không chỉ hướng đến việc truyền đạt kiến thức mà còn tập
          trung vào việc phát triển kỹ năng mềm quan trọng như tư duy logic,
          giao tiếp, và sự sáng tạo.
        </p>
        <p class="mt-8 text-xl font-semibold">Làm thế nào để bắt đầu?</p>
        <p class="mt-3 text-base font-normal">
          <span class="font-semibold">1. Đăng ký tài khoản: </span>
          Học sinh có thể đăng ký tài khoản miễn phí để truy cập vào mọi khóa
          học và tài nguyên trên trang web.
        </p>
        <p class="mt-1 text-base font-normal">
          <span class="font-semibold">2. Tìm kiếm khóa học: </span>
          Tìm kiếm và chọn những khóa học phù hợp với chủ đề và mức độ khó khăn
          mong muốn.
        </p>
        <p class="mt-1 text-base font-normal">
          <span class="font-semibold">3. Học tập và nắm bắt kiến thức: </span>
          Bắt đầu học tập theo lộ trình của bạn, tham gia vào các bài giảng thú
          vị và kiểm tra kiến thức thông qua các bài tập thực hành.
        </p>
        <p class="mt-1 text-base font-normal">
          <span class="font-semibold">4. Tương tác và hỗ trợ: </span>
          Kết nối cộng đồng học sinh, chia sẻ kiến thức và trải nghiệm học tập.
        </p>
        <p class="mt-8 text-base font-normal">
          <span class="text-lg font-semibold">MiddleSchoolMinds </span>
          mang đến cho học sinh cấp 2 không chỉ là kiến thức mà còn là sự hứng
          thú và sự phát triển toàn diện. Hãy đồng hành cùng chúng tôi trên hành
          trình học tập mới!
        </p>
        <p class="mt-8 text-xl font-semibold">Liên hệ với chúng tôi</p>
        <p class="mt-1 text-base font-normal">
          &bull; Website:
          <span class="text-blue-500 underline cursor-pointer"
            >https://www.middleschoolminds.com</span
          >
        </p>
        <p class="mt-1 text-base font-normal">
          &bull; Email Hỗ trợ:
          <span class="text-blue-500 underline cursor-pointer"
            >support@middleschoolminds.com</span
          >
        </p>
        <p class="mt-1 text-base font-normal">
          &bull; Theo dõi chúng tôi trên mạng xã hội:
          <span class="text-blue-500 underline cursor-pointer">Facebook</span> |
          <span class="text-blue-500 underline cursor-pointer">Twitter</span>
        </p>
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
import { ref } from "vue";
export default {
  components: {
    headerMain,
    header2,
    footerPage,
  },
  setup() {
    const title = ref("> Giới thiệu");
    return { title };
  },
};
</script>
