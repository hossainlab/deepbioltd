import React from 'react';

const teamMembers = [
  {
    name: "Md. Jubayer Hossain",
    role: "CEO & Founder",
    image: "/images/team/jubayer.png"
  },
  {
    name: "Muhibullah Shahjahan",
    role: "Bioinformatics Analyst",
    image: "/images/team/muhib.png"
  },
  {
    name: "Muntasim Fuad",
    role: "Bioinformatics Analyst",
    image: "/images/team/fuad.png"
  },
  {
    name: "Pritom Kundu",
    role: "CADD Scientist I",
    image: "/images/team/pritom.png"
  },
  {
    name: "Musab Shahriar",
    role: "CADD Scientist I",
    image: "/images/team/musab.png"
  },
  {
    name: "Nishat Mim",
    role: "Program Coordinator",
    image: "/images/management/nishat.png"
  },
  {
    name: "Tajrian Rahman",
    role: "Finance Manager",
    image: "/images/management/tajrian.png"
  },
  {
    name: "Najnin Suktara",
    role: "Academic Operations Manager",
    image: "/images/management/suktara.png"
  }
];

export const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {teamMembers.map((member, i) => (
          <div key={i} className="bg-white border border-gray-200 group cursor-pointer">
            <div className="w-full aspect-[5/6] overflow-hidden relative" style={{ backgroundColor: '#8B8B8B' }}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                style={{ mixBlendMode: 'normal' }}
              />
            </div>
            <div className="p-5 bg-white">
              <h3 className="text-base font-bold text-black mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};