
import { client } from "@/util/sanity.client";

import { groq } from "next-sanity";
import LandingPage from "../component/home/LandingPage";
import Contact from "../component/home/Contact";
import ProjectAndBlogPage from "../component/home/ProjectAndBlogPage";


const getProjects = async () => {

    const query = groq`*[_type == "project"]|order(project_order desc){
        description,
        slug,
        title,
        "main_image":all_images[0],
        year_created,
    }`
    const data = await client.fetch(query)
    return data
}

export default async function HomePage() {


    const projects = await getProjects()
    // console.log(projects)



    return (
        <main id='main_page' className='h-screen w-screen tall:snap-none tall:overflow-visible snap-mandatory overflow-auto overflow-x-hidden snap-y '>

            <a className='fixed top-0 z-50 m-2'>V2</a>
            <section id='home' className='snap-start  tall:snap-none min h-screen min-h-[600px] bg-blue-400 inline-block relative w-screen '>
                <LandingPage className={'relative w-full h-full'} />
            </section>
            {/* section two  */}

            <section id='my-projects' className='snap-start tall:snap-none h-screen min-h-[600px] w-screen relative' >
                <ProjectAndBlogPage projects={projects} className={'w-full h-full bg-[#CFF469] text-[#503658] z-40 absolute flex flex-col items-center justify-center min-h-[700px]'} />
            </section>


            {/* contact  */}
            <Contact id='contact' className='snap-start tall:snap-none h-screen min-h-[600px] z-10 relative  flex flex-col w-screen' />

        </main >
    )

}
