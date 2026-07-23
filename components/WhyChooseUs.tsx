import Image from "next/image";
import {
  CheckCircle,
  ShieldCheck,
  Headphones,
  Camera,
} from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    "بیش از ۱۵ سال سابقه",
    "اجرای بیش از ۳۵۰ پروژه",
    "ضمانت کیفیت نصب",
    "تجهیزات اورجینال",
    "پشتیبانی سریع",
    "انتقال تصویر حرفه‌ای",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative">
          <Image
            src="/images/technician.jpg"
            alt="Technician"
            width={700}
            height={600}
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute -bottom-8 -left-8 bg-blue-700 text-white rounded-2xl p-6 shadow-xl">

            <div className="flex items-center gap-3">
              <ShieldCheck size={38} />
              <div>
                <div className="text-3xl font-bold">
                  +350
                </div>
                <div>
                  پروژه موفق
                </div>
              </div>
            </div>

          </div>

        </div>

        <div>

          <span className="text-orange-500 font-bold">
            WHY CHOOSE US
          </span>

          <h2 className="text-5xl font-extrabold mt-4 mb-8">
            چرا مشتریان ما را انتخاب می‌کنند؟
          </h2>

          <p className="text-gray-600 leading-9 mb-10">
            ما با استفاده از تجهیزات باکیفیت، تیم متخصص و پشتیبانی سریع،
            امنیت خانه و کسب‌وکار شما را تضمین می‌کنیم.
          </p>

          <div className="grid gap-5">

            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle className="text-green-500" size={26} />

                <span className="text-lg font-semibold">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}