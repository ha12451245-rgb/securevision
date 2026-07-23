import SectionTitle from "./SectionTitle";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "محمد رضایی",
    job: "مالک فروشگاه",
    text: "نصب بسیار تمیز انجام شد و انتقال تصویر بدون هیچ مشکلی راه‌اندازی شد. از کیفیت کار کاملاً راضی هستیم.",
  },
  {
    name: "احمد کریمی",
    job: "مدیر ساختمان",
    text: "تیم بسیار خوش‌قول و حرفه‌ای بود. همه تجهیزات با دقت نصب شدند و آموزش کامل هم ارائه شد.",
  },
  {
    name: "سعید محمدی",
    job: "مالک ویلا",
    text: "کیفیت تصویر دوربین‌ها عالی است و هر زمان نیاز داشتیم پشتیبانی سریع پاسخگو بوده است.",
  },
];

export default function Testimonials() {
  return (
    <section
  data-aos="fade-up"
  className="..."
>
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
title="اعتماد مشتریان، افتخار ما"
subtitle="بخشی از تجربه مشتریانی که امنیت مجموعه خود را به دیدبان هوشمند سپرده‌اند."
/>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
            >

              <Quote
                className="text-blue-700 mb-6"
                size={42}
              />

              <div className="flex gap-1 mb-5">

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

              </div>

              <p className="text-gray-600 leading-8 mb-8">
                {item.text}
              </p>

              <div className="border-t pt-5">

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.job}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}