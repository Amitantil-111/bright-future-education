import React from 'react';

const featuresData = [
  {
    title: 'Interactive Learning',
    description: 'Engage with hands-on projects and quizzes to master React quickly.',
  },
  {
    title: 'Expert Mentors',
    description: 'Learn from industry professionals with years of experience.',
  },
  {
    title: 'Flexible Schedule',
    description: 'Learn anytime, anywhere at your own pace.',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
