import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
  data-aos="fade-up"
  className="..."
>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            تماس با ما
          </h2>

          <p className="text-gray-400">
            برای دریافت مشاوره رایگان یا ثبت سفارش با ما در ارتباط باشید.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* اطلاعات تماس */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">

              <Phone
                className="text-blue-500"
                size={34}
              />

              <div>

                <h3 className="font-bold text-xl">
                  تلفن تماس
                </h3>

                <p className="text-gray-400">
                  0912 123 4567
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <Mail
                className="text-blue-500"
                size={34}
              />

              <div>

                <h3 className="font-bold text-xl">
                  ایمیل
                </h3>

                <p className="text-gray-400">
                  info@example.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <MapPin
                className="text-blue-500"
                size={34}
              />

              <div>

                <h3 className="font-bold text-xl">
                  آدرس
                </h3>

                <p className="text-gray-400">
                  شیراز
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <Clock
                className="text-blue-500"
                size={34}
              />

              <div>

                <h3 className="font-bold text-xl">
                  ساعات کاری
                </h3>

                <p className="text-gray-400">
                  شنبه تا پنجشنبه
                  <br />
                  ۸ صبح تا ۸ شب
                </p>

              </div>

            </div>

          </div>

          {/* فرم */}

          <form className="bg-white rounded-3xl p-8 text-black shadow-2xl">

            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              placeholder="شماره تماس"
              className="w-full border rounded-xl p-4 mb-5 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows={6}
              placeholder="پیام شما..."
              className="w-full border rounded-xl p-4 mb-6 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-xl py-4 font-bold flex items-center justify-center gap-3 transition"
            >

              <Send size={22} />

              ارسال پیام

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}