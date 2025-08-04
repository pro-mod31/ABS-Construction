'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type ProjectDetails = {
  id: string;
  image: string;
  category: string;
};

type ProjectCategory = {
  category: string;
  items: Omit<ProjectDetails, 'category'>[];
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const projectCategories: ProjectCategory[] = [
    {
      category: 'Remodelling',
      items: [
        { id: '1', image: '/image1.jpg' },
        { id: '2', image: '/img2.jpg' },

      ],
    },
    {
      category: 'Construction',
      items: [
        { id: '3', image: '/img3.jpg' },
        { id: '4', image: '/img4.jpg' },
      ],
    },
    {
      category: 'Repairs',
      items: [
        { id: '5', image: '/img5.jpg' },
        { id: '6', image: '/img6.jpg' },
      ],
    },
    {
      category: 'Design',
      items: [
        { id: '7', image: '/img7.jpg' },
        { id: '8', image: '/img2.jpg' },
        { id: '9', image: '/img3.jpg' },

      ],
    },
  ];

  const allItems = projectCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.category,
    }))
  );

  const categories = ['All', ...projectCategories.map((c) => c.category)];

  const filteredItems =
    activeCategory === 'All'
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  return (
    <div className="h-auto bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium transition duration-200 rounded-md ${activeCategory === category
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-cente  transition"
            >
              <div className="relative w-full h-56   overflow-hidden">
                <Image
                  src={item.image}
                  alt="image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

            </div>
          ))}
        </div>

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No items found in this category
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
