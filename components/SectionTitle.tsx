type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-14">

      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">

        {title}

      </h2>

      {subtitle && (

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-8">

          {subtitle}

        </p>

      )}

      <div className="w-24 h-1 bg-blue-700 rounded-full mx-auto mt-6"></div>

    </div>
  );
}