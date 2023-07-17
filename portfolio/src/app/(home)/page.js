import { client } from "@/util/sanity.client";
import Home from "../component/home/home";
import { groq } from "next-sanity";







const getProjects = async () => {

    const query = groq`*[_type == "project"]{
        description,
        slug,
        title,
        "main_image":all_images[0],
        year_created,
    }`
    const data = await client.fetch(query)
    return data
}

export default async function HomePage(prop) {
    const projects = await getProjects()



    return (
        <Home projects={projects} />
    )

}
