import React from "react";

const Marquee = () => {
  const items = ["Java", "JavaScript", "PHP", "Kotlin", "Dart", "XML", "Flutter", "Android Studio", "Laravel"];

  return (
    <div className="relative overflow-hidden w-full bg-accent py-1 mt-14">
      {/* Wrapper untuk animasi */}
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {/* Item pertama */}
        {items.map((item, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center text-white text-2xl font-extrabold mx-4"
          >
            {/* Icon < */}
            <span className="mx-2 text-primary">{`< >`}</span>
            {/* Text */}
            <span className="mx-2">{item}</span>
            {/* Icon > */}
            <span className="mx-2 text-primary">{`< >`}</span>
          </div>
        ))}
        {/* Duplikasi item untuk efek looping */}
        {items.map((item, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center text-white text-2xl font-extrabold mx-4"
          >
            <span className="mx-2 text-primary">{`< >`}</span>
            <span className="mx-2">{item}</span>
            <span className="mx-2 text-primary">{`< >`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
