export default function MissionGoalsSection() {
  const goals = [
    {
      text: "To create genuine connections between capital and ambition.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      text: "To help founders grow with the right partners.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      text: "To help capital partners uncover businesses that others overlook.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      text: "And to make every introduction count.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="text-center font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide mb-12 lg:mb-16">
          OUR PURPOSE
        </p>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-start gap-4 lg:gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 lg:w-[50px] lg:h-[50px] bg-[#0224e9] rounded-full flex items-center justify-center text-white">
                {goal.icon}
              </div>

              {/* Text */}
              <p className="font-manrope font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[38px] text-[#333333]">
                {goal.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
