"use client";
import data from "../data/music_courses.json";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { HoverEffect } from "./ui/card-hover-effect";
 
export default function UpcomingWebinar() {
    const cources = data.courses

    const renderCourses = cources.map((course) => {
        return{
            title : course.title,
            description : course.description,
            link : course.price
        }
    })
        
    const words = [
        {
          text: "Enhance",
        },
        {
          text: "Your",
        },
        {
          text: "Musical",
        },
        {
          text: "Journey",
         // className: "text-blue-500 dark:text-blue-500",
        },
        {
          text: "With Us",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
    return (
        <div className="w-full rounded-md flex flex-col mx-auto overflow-hidden items-center justify-center relative p-12">
           <h1 className="text-xl md:text-3xl text-teal-400">
            Upcoming Webinar
            </h1> 
            <h1 className="text-2xl md:text-5xl font-bold mt-4 text-black dark:text-white">
                {/* Enhance your Musical Journey */}
                <TypewriterEffectSmooth words={words} />
            </h1>

            <div>
            <HoverEffect items={renderCourses.map((course) => 
              ({title : course.title, description : course.description, link : ""}))} />
            </div>
        </div>
    )
}