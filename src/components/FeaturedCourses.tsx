"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import data from "../data/music_courses.json";
export default function FeaturedCourses() {
    const courses = data.courses;
    // console.log(courses)
    return (
        <div className="bg-gray-900 w-full flex flex-col justify-center items-center pt-8 bg-custom-gradient pb-8">
           <h1 className="text-2xl md:text-5xl font-bold">
             Featured Courses
            </h1>

            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-center mt-10">
            {
                courses && courses.map((course) => 
                    <div key={course.id} className="flex flex-col items-center mx-8 md:mx-2">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center">
                            <p className="flex text-center text-lg md:text-xl lg:text-3xl font-semibold mb-4">{course.title}</p>
                            <p className="flex text-center mb-6 text-sm md:text-xl">{course.description}</p>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">Learn More</button>
                            </BackgroundGradient>
                    </div>
                    
                )
               }
            </div>
        
        </div>
        );
}