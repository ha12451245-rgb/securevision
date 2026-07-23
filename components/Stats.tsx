export default function Stats() {
  const stats = [
    {
      number: "350+",
      title: "پروژه انجام شده",
    },
    {
      number: "1200+",
      title: "دوربین نصب شده",
    },
    {
      number: "15+",
      title: "سال تجربه",
    },
    {
      number: "98%",
      title: "رضایت مشتری",
    },
  ];

  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((item) => (
            <div key={item.title}>

              <h2 className="text-5xl font-extrabold text-orange-400 mb-4">
                {item.number}
              </h2>

              <p className="text-xl">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}