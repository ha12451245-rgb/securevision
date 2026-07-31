import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-400 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* متن */}

          <div>

            <span className="inline-flex items-center bg-blue-600/20 border border-blue-400 px-5 py-2 rounded-full text-sm font-bold mb-8">

              فروشگاه تخصصی تجهیزات نظارتی

            </span>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-8">

              خرید دوربین مداربسته
              <br />

              <span className="text-cyan-300">
                با بهترین قیمت
              </span>

            </h1>

            <p className="text-xl leading-9 text-slate-200 mb-10">

              فروش انواع دوربین مداربسته، دستگاه DVR و NVR،
              هارد، سوئیچ شبکه، تجهیزات انتقال تصویر،
              خدمات نصب و راه‌اندازی پروژه‌های نظارتی در سراسر ایران.

            </p>

            {/* جستجو */}

            <div className="flex flex-col md:flex-row gap-4 mb-10">

              <input
                type="text"
                placeholder="جستجوی کالا..."
                className="flex-1 rounded-xl px-5 py-4 text-gray-900 outline-none"
              />

              <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 rounded-xl font-bold">

                جستجو

              </button>

            </div>

            {/* دکمه‌ها */}

            <div className="flex flex-wrap gap-4 mb-12">

              <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-bold">

                ورود به فروشگاه

              </button>

              <button className="border border-white hover:bg-white hover:text-blue-900 transition px-8 py-4 rounded-xl font-bold">

                درخواست مشاوره

              </button>

            </div>

            {/* آمار */}

            <div className="grid grid-cols-3 gap-6">

              <div>

                <div className="text-4xl font-black text-cyan-300">

                  +500

                </div>

                <div className="text-sm text-slate-300">

                  محصول

                </div>

              </div>

              <div>

                <div className="text-4xl font-black text-cyan-300">

                  +1500

                </div>

                <div className="text-sm text-slate-300">

                  مشتری

                </div>

              </div>

              <div>

                <div className="text-4xl font-black text-cyan-300">

                  +10

                </div>

                <div className="text-sm text-slate-300">

                  سال تجربه

                </div>

              </div>

            </div>

          </div>

          {/* تصویر */}

          <div className="flex justify-center">

            <div className="relative">

              <Image
                src="/images/hero/camera.png"
                alt="دوربین مداربسته"
                width={650}
                height={650}
                priority
                className="drop-shadow-[0_0_60px_rgba(0,200,255,.45)]"
              />

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-900 rounded-2xl shadow-xl px-8 py-5">

                <div className="text-center">

                  <div className="text-3xl font-black text-blue-700">

                    DIGILAN

                  </div>

                  <div className="text-sm text-gray-500">

                    فروشگاه تخصصی تجهیزات امنیتی

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}