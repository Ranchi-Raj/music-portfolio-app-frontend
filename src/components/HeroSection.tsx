import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
export default function HeroSection() {
    return(
        <div className="w-full md:min-h-[100vh] h-full rounded-md flex flex-col mx-auto overflow-hidden items-center justify-center relative p-12">
            <Spotlight
            className="-top-10 left-0 md:left-60 md:-top-20"
            fill="pink"
            />
            <div className="relative w-full text-center top-20 pb-20">
                <h1 className="text-3xl md:text-7xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-900">Master The Art of Music
                </h1>
                
                <p className="text-neutral-400 font-normal mt-8 text-sm md:text-lg max-w-3xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis aliquam, asperiores hic nam eos tempora sit sint velit natus beatae repellat molestiae explicabo necessitatibus fugiat totam quia? Magnam, ea blanditiis? Ex, dolores itaque vitae adipisci quibusdam molestias nam, error voluptas impedit dignissimos facere nesciunt, deleniti temporibus architecto labore voluptate.
                </p>

            <div className="mt-10 rounded-lg">
                <Link href={"/courses"}>
            <Button
                borderRadius="1.75rem"
                className="bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800 font-semibold "
                >
                EXPLORE COURSES
            </Button>
                </Link>
            </div>
                </div>
        </div>
    )
}