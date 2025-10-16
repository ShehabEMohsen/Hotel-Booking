import React from "react";

interface Props {
  testimonial: string;
  name: string;
  role: string;
}

const TestimonalCard: React.FC<Props> = ({ testimonial, name, role }) => {
  return (
    <div className="bg-[#e9efeb] p-4 sm:p-6 h-auto w-full max-w-[600px] rounded-2xl flex flex-col justify-between">
      <div className="flex flex-row gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-current drop-shadow-sm"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <div className="text-sm sm:text-base mb-4">
        `&apos;`{testimonial}`&apos;`
      </div>
      <hr className="my-2" />

      <div className="flex flex-row gap-3 items-center mt-4">
        <img
          src={"https://randomuser.me/api/portraits/men/1.jpg"}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        />
        <div>
          <div className="font-bold text-lg sm:text-xl">{name}</div>
          <div className="text-gray-600 text-sm sm:text-base">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCard;
