import React from "react";
import Card from "./Card";

const Comp = () => {
  const cards = [
    {
      title: "24/7 Access",
      description:
        "Gain exclusive access to our innovation hub round the clock for four months, providing you with the space and resources",
    },
    {
      title: "Expert Mentorship",
      description:
        "Connect with former mentors and founders and domain experts who offer valuable guidance and insights curated to your start-up journey, helping you navigate challenges and seize opportunities effectively.",
    },
    {
      title: "Team Building",
      description:
        "Find potential partners within the cohort, building a strong team for collaborations and partnerships that can elevate your ideas.",
    },
    {
      title: "Founder Ecosystem",
      description:
        "Join the ecosystem of fellow founders, creating opportunities for collaboration, knowledge sharing, and collective growth, as you learn from each other’s experiences and perspectives.",
    },
    {
      title: "Investor Networking",
      description:
        "Engage with a diverse range of investors, from venture capitalists to angel investors, gaining insights into their investment criteria and thought processes. This interaction will help define initial metrics and refining the pitch.",
    },
    {
      title: "Access to Funding",
      description:
        "Opportunity to secure pre-seed/seed investments of up to $250,000 from the PedalStart network.",
    },
  ];

  return (
    <div className="container mx-auto px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Comp;
