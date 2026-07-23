import { Phone, ArrowLeft } from "lucide-react";

export default function CTA() {
  return (
    <section
  data-aos="zoom-in"
  className="py-24 bg-gradient-to-r from-blue-700 to-slate-900 text-white"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            امنیت مجموعه خود را به ما بسپارید
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-9 mb-10">
            همین امروز برای دریافت مشاوره رایگان، بازدید از محل و انتخاب
            بهترین سیستم نظارت تصویری با کارشناسان دیدبان هوشمند تماس بگیرید.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="tel:09123456789"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition duration-300"
            >
              <Phone size={20} />
              تماس با ما
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-800 transition duration-300"
            >
              دریافت مشاوره رایگان
              <ArrowLeft size={20} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}