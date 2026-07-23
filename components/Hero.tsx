import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center justify-between gap-12">

        <div className="max-w-2xl">
          <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-bold mb-6">
            نصب تخصصی دوربین مداربسته
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            امنیت کسب‌وکار و منزل
            <br />
            با دیدبان هوشمند
          </h1>

          <p className="text-xl text-blue-100 leading-9 mb-10">
            طراحی، فروش، نصب و پشتیبانی انواع سیستم‌های نظارت تصویری،
            انتقال تصویر روی موبایل و اجرای پروژه‌های حرفه‌ای.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-bold">
              درخواست مشاوره
            </button>

            <button className="border border-white hover:bg-white hover:text-blue-900 transition px-8 py-4 rounded-xl font-bold">
              مشاهده نمونه‌کارها
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
  <Image
    src="/images/hero/camera.png"
    alt="دوربین مداربسته"
    width={600}
    height={600}
    className="rounded-3xl drop-shadow-2xl"
    priority
  />
</div>

      </div>
    </section>
  );
}