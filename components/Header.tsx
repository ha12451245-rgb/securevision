export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
            D
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">
              DIGILAN
            </h1>
            <p className="text-xs text-gray-500">
              فروشگاه تجهیزات نظارتی
            </p>
          </div>
        </a>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">

          <a href="#" className="hover:text-blue-700 transition">
            خانه
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            فروشگاه
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            خدمات نصب
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            پروژه‌ها
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            وبلاگ
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            تماس با ما
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="text-2xl">
            🔍
          </button>

          <button className="text-2xl">
            🛒
          </button>

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition">
            ورود
          </button>

        </div>

      </div>
    </header>
  );
}