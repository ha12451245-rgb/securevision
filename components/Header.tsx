export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
        <h1 className="text-3xl font-bold">
          دیدبان هوشمند
        </h1>

        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-orange-400 duration-300">
            خانه
          </a>

          <a href="#" className="hover:text-orange-400 duration-300">
            خدمات
          </a>

          <a href="#" className="hover:text-orange-400 duration-300">
            پروژه‌ها
          </a>

          <a href="#" className="hover:text-orange-400 duration-300">
            آموزش
          </a>

          <a href="#" className="hover:text-orange-400 duration-300">
            تماس با ما
          </a>
        </nav>
      </div>
    </header>
  );
}