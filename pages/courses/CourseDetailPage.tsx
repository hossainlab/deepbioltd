
import React from 'react';
import { Course } from '../../types.ts';
import { ChevronLeftIcon, CheckCircleIcon, BookOpenIcon, ClockIcon } from '../../components/icons/Icons.tsx';
import Accordion from '../../components/common/Accordion.tsx';

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, onBack }) => {
  // #205E92 in RGB is 32, 94, 146
  const primaryColorRgb = '32, 94, 146';

  return (
    <div className="font-sans bg-white animate-fade-in">
      <section 
        className="relative bg-cover bg-center py-24 px-8 text-white"
        style={{ backgroundImage: `linear-gradient(rgba(${primaryColorRgb}, 0.8), rgba(${primaryColorRgb}, 0.8)), url(${course.image})` }}
      >
        <div className="max-w-7xl mx-auto">
            <button
                onClick={onBack}
                className="flex items-center text-lg mb-4 hover:underline"
            >
                <ChevronLeftIcon className="mr-2" /> Back to Courses
            </button>
            <h1 className="text-5xl font-bold font-heading mb-2">{course.title}</h1>
            <p className="text-xl max-w-3xl">{course.description}</p>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-2">
            <div className="bg-light-gray p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold font-heading mb-4 text-primary">What you will learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {course.whatYouWillLearn.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircleIcon className="text-green mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold font-heading mb-4 text-primary">Course Description</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{course.longDescription}</p>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold font-heading mb-4 text-primary">Syllabus</h2>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    {course.syllabus.map((module, index) => (
                        <Accordion key={index} title={module.title}>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {module.content.map((lesson, lessonIndex) => (
                                    <li key={lessonIndex}>{lesson}</li>
                                ))}
                            </ul>
                        </Accordion>
                    ))}
                </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg sticky top-28 space-y-6">
                <div>
                    <h3 className="text-xl font-bold font-heading mb-4 text-primary">Instructor</h3>
                    <div className="flex items-center gap-4">
                        <img src={course.instructor.image} alt={course.instructor.name} className="w-20 h-20 rounded-full object-cover" loading="lazy" />
                        <div>
                            <p className="font-semibold text-lg">{course.instructor.name}</p>
                            <p className="text-sm text-gray-500">{course.instructor.bio}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold font-heading mb-4 text-primary">Course Details</h3>
                    <div className="space-y-3 text-gray-700">
                        <div className="flex items-center">
                            <BookOpenIcon className="mr-3 text-primary" size={20} />
                            <span><strong>Level:</strong> {course.level}</span>
                        </div>
                        <div className="flex items-center">
                            <ClockIcon className="mr-3 text-primary" size={20} />
                            <span><strong>Duration:</strong> {course.duration}</span>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold font-heading mb-4 text-primary">Prerequisites</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {course.prerequisites.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <button 
                        className="w-full py-3 px-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg" 
                        style={{ backgroundColor: course.color }}
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;