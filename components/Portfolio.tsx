import Image from "next/image";

const projects = [
  {
    title: "نصب دوربین فروشگاه",
    location: "شیراز",
    cameras: "4 دوربین",
    image: "/images/projects/shop.jpg",
  },
  {
    title: "نصب دوربین ویلا",
    location: "سپیدان",
    cameras: "5 دوربین",
    image: "/images/projects/villa.jpg",
  },
  {
    title: "نصب دوربین آپارتمان",
    location: "شیراز",
    cameras: "6 دوربین",
    image: "/images/projects/apartment.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
  data-aos="fade-up"
  className="..."
>
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          نمونه پروژه‌ها
        </h2>

        <p className="text-center text-gray-500 mb-14">
          بخشی از پروژه‌های اجرا شده توسط تیم ما
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl shadow-xl relative"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={500}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">

                <h3 className="text-white text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-200">
                  📍 {project.location}
                </p>

                <p className="text-gray-200 mb-5">
                  📷 {project.cameras}
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 rounded-xl py-3 font-bold text-white transition">
                  مشاهده پروژه
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}