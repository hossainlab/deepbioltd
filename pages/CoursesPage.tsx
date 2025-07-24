
import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import PageHero from '../components/common/PageHero.tsx';
import { ClockIcon, BookOpenIcon } from '../components/icons/Icons.tsx';
import { Course } from '../types.ts';
import { allCourses } from '../data/coursesData.ts';

interface CoursesPageProps {
    setSelectedCourse: (course: Course) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ setSelectedCourse }) => {
    return (
        <div className="font-sans bg-white">
            <PageHero
                title="Courses & Workshops"
                subtitle="Enhance your skills with our expert-led programs."
            />
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Our Courses & Workshops" subtitle="Enhance your skills in bioinformatics, AI, and public health informatics with our expert-led programs." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allCourses.map((course) => (
                            <div 
                                key={course.id} 
                                className="bg-light-gray rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col"
                                onClick={() => setSelectedCourse(course)}
                            >
                                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" loading="lazy" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold font-heading mb-2 text-primary">{course.title}</h4>
                                    <p className="text-light-text text-sm mb-4 flex-grow">{course.description}</p>
                                    <div className="flex justify-between items-center text-sm text-gray-600 mt-auto pt-4 border-t border-gray-200">
                                        <span className="flex items-center"><BookOpenIcon className="inline-block mr-1" /> {course.level}</span>
                                        <span className="flex items-center"><ClockIcon size={16} className="inline-block mr-1" /> {course.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesPage;