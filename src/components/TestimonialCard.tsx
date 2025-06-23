import React from "react";

const TestimonialCard = ({
  comment = `All I know is that this wouldn’t have been possible without the teachers
        of Matrix. The teachers were not just helping with coaching stuff – they
        were like awesome guides who always supported me. When things got tough,
        their encouraging words made me feel better and helped m...`,
  userImage,
  name,
  designation,
}: {
  comment?: string;
  userImage?: string;
  name?: string;
  designation?: string | null;
}) => {
  return (
    <div className="bg-Secondary-Shade_5  rounded-3xl p-6 max-w-md mx-auto">
      {/* Quote Icon */}
      <img src="/images/quote.png" alt="Quote" className="h-6 mb-10" />

      {/* Testimonial Text */}
      <div className="max-w-max mb-10 min-h-[95px]">
        <p className="text-gray-800 text-sm leading-relaxed line-clamp-4 ">
          {comment}
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center">
        {/* User Image */}
        <img
          src={userImage ?? "https://placehold.co/400"}
          alt="Tanishq"
          className="w-12 h-12 rounded-full border-2 border-green-500"
        />

        {/* User Details */}
        <div className="ml-4">
          <h4 className="font-bold text-gray-800">{name}</h4>
          {designation && (
            <p className="text-gray-600 text-sm line-clamp-1">{designation}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
