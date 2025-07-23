'use client';

import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What is SHPE?",
    answer: "SHPE (Society of Hispanic Professional Engineers) is a national organization that promotes the development of Hispanics in engineering, science, and other technical professions to achieve educational excellence, economic opportunity, and social equity.",
    category: "General"
  },
  {
    id: 2,
    question: "How can I join SHPE at CSUF?",
    answer: "You can join by attending our general meetings, filling out a membership form, and paying the membership dues. We welcome students of all backgrounds who are interested in supporting our mission.",
    category: "Membership"
  },
  {
    id: 3,
    question: "What events does SHPE organize?",
    answer: "We organize professional development workshops, networking events, community service projects, study groups, social events, and participate in the national SHPE convention.",
    category: "Events"
  },
  {
    id: 4,
    question: "Do I need to be Hispanic to join?",
    answer: "No! While SHPE focuses on supporting Hispanic students in STEM, we welcome members of all backgrounds who share our commitment to diversity and inclusion in engineering and technology fields.",
    category: "Membership"
  },
  {
    id: 5,
    question: "What are the membership benefits?",
    answer: "Members receive access to scholarships, networking opportunities, professional development resources, mentorship programs, career fair access, and connections to industry professionals.",
    category: "Membership"
  },
  {
    id: 6,
    question: "When are your meetings?",
    answer: "We hold general meetings every other week during the academic year. Check our calendar for specific dates and times. All meetings are announced on our Discord server.",
    category: "Events"
  }
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(faqData.map(item => item.category))];
  
  const filteredData = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === filteredData.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(filteredData.map(item => item.id)));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Find answers to common questions about SHPE at CSUF
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
        
        {/* Toggle All Button */}
        <button
          onClick={toggleAll}
          className="px-4 py-2 rounded-full text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
        >
          {openItems.size === filteredData.length ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {filteredData.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white border-2 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl ${
              openItems.has(item.id) 
                ? 'border-blue-300 ring-2 ring-blue-100' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: 'fadeInUp 0.5s ease-out forwards'
            }}
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 text-left hover:bg-blue-50 focus:outline-none focus:bg-blue-50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openItems.has(item.id) 
                      ? 'bg-blue-600 text-white rotate-180' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}>
                    {openItems.has(item.id) ? (
                      <FaMinus className="h-4 w-4" />
                    ) : (
                      <FaPlus className="h-4 w-4" />
                    )}
                  </div>
                </div>
              </div>
            </button>

            {/* Answer Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openItems.has(item.id) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 bg-gradient-to-r from-blue-50 to-gray-50">
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No FAQs found for this category.</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}