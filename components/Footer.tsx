import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-gray-300 pt-24 pb-8 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl shadow-lg">

                <Shield
                  className="text-white"
                  size={26}
                />

              </div>

              <div>

                <h3 className="text-3xl font-extrabold text-white tracking-wide">
                  DIGILAN
                </h3>

                <p className="text-sm text-gray-400">
                  فروشگاه تخصصی تجهیزات نظارتی
                </p>

              </div>

            </div>

            <p className="leading-8 text-gray-400">
              دیجی‌لن مرجع تخصصی فروش تجهیزات نظارتی، دوربین‌های مداربسته،
              سیستم‌های امنیتی، تجهیزات شبکه، خدمات نصب، انتقال تصویر و
              پشتیبانی در سراسر ایران است.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-white font-bold text-xl mb-6">
              دسترسی سریع
            </h4>

            <ul className="space-y-4">

              <li className="hover:text-blue-400 hover:-translate-x-1 transition-all duration-300 cursor-pointer">
                خانه
              </li>

              <li className="hover:text-blue-400 hover:-translate-x-1 transition-all duration-300 cursor-pointer">
                فروشگاه
              </li>

              <li className="hover:text-blue-400 hover:-translate-x-1 transition-all duration-300 cursor-pointer">
                خدمات نصب
              </li>

              <li className="hover:text-blue-400 hover:-translate-x-1 transition-all duration-300 cursor-pointer">
                پروژه‌ها
              </li>

              <li className="hover:text-blue-400 hover:-translate-x-1 transition-all duration-300 cursor-pointer">
                وبلاگ
              </li>

              <li className="hover:text-blue-400 hover:-translate-x-1 transition-all duration-300 cursor-pointer">
                تماس با ما
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-white font-bold text-xl mb-6">
              اطلاعات تماس
            </h4>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Phone
                  size={20}
                  className="text-blue-500"
                />

                <a
                  href="tel:09121234567"
                  className="hover:text-blue-400 transition-colors"
                >
                  0912 123 4567
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={20}
                  className="text-blue-500"
                />

                <a
                  href="mailto:info@digilan.ir"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@digilan.ir
                </a>

              </div>

              <div className="flex items-center gap-3">

                <MapPin
                  size={20}
                  className="text-blue-500"
                />

                <span>
                  شیراز
                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="text-white font-bold text-xl mb-6">
              ما را دنبال کنید
            </h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-slate-800 hover:bg-blue-700 p-5 rounded-full transition"
                title="واتساپ"
              >
                <Phone />
              </a>

              <a
                href="#"
                className="bg-slate-800 hover:bg-blue-700 p-5 rounded-full transition"
                title="تلگرام"
              >
                <Send />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-500 text-sm">

          © 2026 DIGILAN | تمامی حقوق محفوظ است.

        </div>

      </div>

    </footer>
  );
}