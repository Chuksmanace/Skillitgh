import React from "react";
import {
  HiOutlineGlobeAlt,
  HiOutlinePencilAlt,
  HiOutlineHeart,
  HiOutlineCode,
  HiOutlineChartBar,
  HiOutlinePhotograph,
} from "react-icons/hi";

type CourseCard = {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const cards: CourseCard[] = [
  {
    id: 1,
    Icon: HiOutlineGlobeAlt,
    title: "Language Learning",
    desc: "Courses teaching languages such as English, Spanish, French, Mandarin and more.",
  },
  {
    id: 2,
    Icon: HiOutlinePencilAlt,
    title: "Creative Arts & Design",
    desc: "Graphic design, digital art, photography and video editing courses for creatives.",
  },
  {
    id: 3,
    Icon: HiOutlineHeart,
    title: "Health & Fitness",
    desc: "Nutrition, fitness training, yoga, meditation and wellness coaching courses.",
  },
  {
    id: 4,
    Icon: HiOutlineCode,
    title: "Web Development",
    desc: "HTML, CSS, JavaScript, React and backend fundamentals to build real projects.",
  },
  {
    id: 5,
    Icon: HiOutlineChartBar,
    title: "Digital Marketing",
    desc: "SEO, social media, ads, analytics and growth strategies for marketers.",
  },
  {
    id: 6,
    Icon: HiOutlinePhotograph,
    title: "Photography & Visuals",
    desc: "Photo fundamentals, editing, composition and visual storytelling.",
  },
];

const ExploreCourses: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Faded background text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <h2 className="text-8xl md:text-[140px] lg:text-[220px] font-extrabold text-gray-100 opacity-100 tracking-tight select-none leading-none">
          <img src="public/Skillitgh_ (1).png" alt="Skillitgh logo" />
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h3 className="text-sm text-gray-500 font-medium">Explore Our Courses</h3>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
            Discover skills to level up your career
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map(({ id, Icon, title, desc }) => (
            <article
              key={id}
              className="relative bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-900">{title}</h4>
                  <p className="text-sm text-gray-500 mt-2">{desc}</p>

                  <div className="mt-3">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                    >
                      View Category →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;
