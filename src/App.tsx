import React, { useState } from "react";
import { X, Check, Heart, Info, ExternalLink, ArrowRight } from "lucide-react";

const TurtleConservation = () => {
  const [activeTab, setActiveTab] = useState("ocean");
  const [activeCard, setActiveCard] = useState(null);

  const problems = {
    ocean: [
      {
        id: "plastic",
        title: "Plastic Pollution",
        problem:
          "Turtles mistake plastic bags for jellyfish and eat them, causing intestinal blockages and death.",
        solution:
          "Use reusable bags, reduce single-use plastics, and participate in beach cleanups.",
        icon: "🥤",
        color: "bg-blue-500",
      },
      {
        id: "fishing",
        title: "Fishing Nets & Gear",
        problem:
          "Abandoned fishing gear entangles turtles, causing injury, preventing them from feeding, and sometimes drowning them.",
        solution:
          'Support sustainable fishing practices and organizations that clean up "ghost nets" from the ocean.',
        icon: "🎣",
        color: "bg-blue-700",
      },
      {
        id: "boats",
        title: "Boat Strikes",
        problem:
          "Collisions with boats can injure or kill turtles when they surface to breathe.",
        solution:
          "Follow speed restrictions in turtle habitats and watch for turtles when boating.",
        icon: "🚤",
        color: "bg-blue-600",
      },
    ],
    beach: [
      {
        id: "development",
        title: "Coastal Development",
        problem:
          "Construction on nesting beaches destroys habitat and creates light pollution that disorients hatchlings.",
        solution:
          "Support turtle-friendly lighting and protected beach areas for nesting.",
        icon: "🏗️",
        color: "bg-yellow-600",
      },
      {
        id: "nests",
        title: "Nest Disturbance",
        problem:
          "Human activity and predators can damage or destroy turtle nests and eggs.",
        solution:
          "Keep distance from marked turtle nests and participate in nest monitoring programs.",
        icon: "🥚",
        color: "bg-yellow-500",
      },
      {
        id: "lights",
        title: "Light Pollution",
        problem:
          "Artificial lights confuse hatchlings, causing them to crawl away from the ocean instead of toward it.",
        solution:
          "Use turtle-friendly lighting near beaches and close curtains at night during hatching season.",
        icon: "💡",
        color: "bg-yellow-400",
      },
    ],
    climate: [
      {
        id: "warming",
        title: "Rising Temperatures",
        problem:
          "Warmer sand produces more female turtles, disrupting the natural gender balance of populations.",
        solution:
          "Support climate change initiatives and organizations working on turtle conservation.",
        icon: "🌡️",
        color: "bg-red-500",
      },
      {
        id: "habitat",
        title: "Habitat Loss",
        problem:
          "Rising sea levels and stronger storms from climate change erode nesting beaches.",
        solution:
          "Support coastal habitat protection and restoration projects.",
        icon: "🌊",
        color: "bg-red-600",
      },
      {
        id: "coral",
        title: "Coral Reef Damage",
        problem:
          "Climate change damages coral reefs where many turtles feed and find shelter.",
        solution:
          "Reduce your carbon footprint and support marine protected areas.",
        icon: "🪸",
        color: "bg-red-400",
      },
    ],
  };

  const tabColors = {
    ocean: "bg-blue-500",
    beach: "bg-yellow-500",
    climate: "bg-red-500",
  };

  const tabNames = {
    ocean: "Ocean Threats",
    beach: "Beach Dangers",
    climate: "Climate Impacts",
  };

  const actionCards = [
    {
      title: "Reduce Plastic Use",
      description:
        "Bring reusable bags, bottles, and straws to cut down on plastic waste that might end up in the ocean.",
      icon: "♻️",
    },
    {
      title: "Join Beach Cleanups",
      description:
        "Participate in organized beach cleanups to remove harmful debris from turtle habitats.",
      icon: "🧹",
    },
    {
      title: "Support Conservation",
      description:
        "Donate to or volunteer with turtle conservation organizations working to protect turtles.",
      icon: "🐢",
    },
    {
      title: "Spread Awareness",
      description:
        "Share what you've learned about turtle conservation with friends and family.",
      icon: "📢",
    },
  ];

  const funFacts = [
    "Some sea turtles can hold their breath underwater for over 4 hours!",
    "Leatherback turtles can dive deeper than 3,000 feet—deeper than many whales!",
    "Sea turtles have existed for more than 100 million years, surviving the dinosaurs!",
    "Baby turtles can swim for 24-48 hours straight after reaching the ocean!",
    "Sea turtles return to the same beach where they were born to lay their eggs.",
  ];

  const [currentFact, setCurrentFact] = useState(0);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % funFacts.length);
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-cyan-100 to-blue-200 p-6 rounded-xl max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <div className="text-8xl mb-4 animate-bounce">🐢</div>
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          Turtle Troubles & How You Can Help
        </h1>
        <p className="text-lg text-blue-600">
          Explore the challenges turtles face and discover how you can make a
          difference!
        </p>
      </header>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(problems).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-bold text-white transition-all transform ${
              activeTab === tab
                ? `${tabColors[tab]} scale-110 shadow-lg`
                : "bg-gray-400 hover:scale-105"
            }`}
          >
            {tabNames[tab]}
          </button>
        ))}
      </div>

      {/* Problem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {problems[activeTab].map((item) => (
          <div
            key={item.id}
            className={`${item.color} text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer`}
            onClick={() =>
              setActiveCard(activeCard === item.id ? null : item.id)
            }
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <span className="text-3xl">{item.icon}</span>
            </div>
            <p className="mb-3">{item.problem}</p>

            {activeCard === item.id && (
              <div className="mt-4 pt-4 border-t border-white/30 animate-fadeIn">
                <h4 className="font-bold flex items-center mb-2">
                  <Heart className="mr-2" size={18} /> How You Can Help:
                </h4>
                <p>{item.solution}</p>
              </div>
            )}

            {activeCard !== item.id && (
              <button
                className="mt-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(item.id);
                }}
              >
                Learn how to help <ArrowRight size={14} className="ml-1" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* What You Can Do Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-xl mb-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Simple Ways You Can Help Turtles!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actionCards.map((action, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow border-2 border-green-200 transform transition hover:shadow-lg"
            >
              <div className="text-3xl mb-2 text-center">{action.icon}</div>
              <h3 className="text-lg font-bold text-green-700 text-center mb-2">
                {action.title}
              </h3>
              <p className="text-gray-700 text-center">{action.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts Section */}
      <div
        className="bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-xl relative overflow-hidden text-white shadow-lg"
        style={{ minHeight: "120px" }}
      >
        <div className="absolute top-2 right-2">
          <button
            onClick={nextFact}
            className="bg-purple-700 hover:bg-purple-800 text-white rounded-full p-2"
          >
            <Info size={20} />
          </button>
        </div>
        <h2 className="text-xl font-bold mb-3">Turtle Fun Fact:</h2>
        <p className="text-lg italic">"{funFacts[currentFact]}"</p>
        <div className="absolute bottom-0 right-0">
          <div className="w-24 h-24 opacity-10">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 10 C70 10 85 25 85 45 C85 65 70 80 50 80 C30 80 15 65 15 45 C15 25 30 10 50 10 Z"
                fill="#ffffff"
              />
              <circle cx="35" cy="40" r="5" fill="#ffffff" />
              <circle cx="65" cy="40" r="5" fill="#ffffff" />
              <path
                d="M35 60 C40 70 60 70 65 60"
                stroke="#ffffff"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center bg-white/70 p-4 rounded-xl text-blue-800 shadow-md">
        <p>
          Remember: Small actions can make a big difference for turtle
          conservation! 🌊 🐢 🌎
        </p>
      </footer>
    </div>
  );
};

export default TurtleConservation;
