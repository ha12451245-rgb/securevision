import SectionTitle from "./SectionTitle";
import { Camera, Smartphone, Wrench } from "lucide-react";
export default function Services() {
  const services = [
  {
    title: "نصب دوربین مداربسته",
    description:
      "نصب انواع دوربین‌های مداربسته برای منازل، فروشگاه‌ها، کارخانه‌ها و شرکت‌ها.",
    icon: Camera,
  },
  {
    title: "انتقال تصویر",
    description:
      "انتقال تصویر روی موبایل، تبلت و کامپیوتر با امنیت بالا.",
    icon: Smartphone,
  },
  {
    title: "سرویس و پشتیبانی",
    description:
      "عیب‌یابی، تعمیر، سرویس و نگهداری انواع DVR و NVR.",
    icon: Wrench,
  },
];

  return (
    <section
  data-aos="fade-up"
  className="py-20 bg-slate-100"
>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
title="خدمات ما"
subtitle="ارائه خدمات تخصصی نصب، انتقال تصویر و پشتیبانی سیستم‌های نظارت تصویری"
/>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-6">
  <service.icon
    size={56}
    className="text-blue-700"
    strokeWidth={1.8}
  />
</div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}