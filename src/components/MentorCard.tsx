import Image from "next/image";
import React from "react";

interface MentorCardProps {
  name: string;
  qualifications: string[];
  image: string;
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  qualifications,
  image,
}) => {
  return (
    <div className=" text-Black max-w-xs mx-auto">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          height={320}
          width={275}
          className="w-full h-full rounded-3xl  object-cover border-4 border-white"
        />
      </div>

      {/* Name Section */}
      <h3 className="mt-4 text-lg font-bold text-center md:text-start">{name}</h3>

      {/* Qualifications Section */}
      <p className="mt-2 text-sm text-Grey-Shade_1 text-center md:text-start">
        {qualifications.map((qualification, index) => (
          <span key={index} className="block">
            {qualification} •
          </span>
        ))}
      </p>
    </div>
  );
};

export default MentorCard;
