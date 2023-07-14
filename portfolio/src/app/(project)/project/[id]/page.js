
import Project from '@/app/component/Projects/Projects'
import { client } from '@/util/sanity.client'
import { groq } from "next-sanity";

const myData = async () => {
    const query = groq`*[_type == "project"]`
    const data = await client.fetch(query)
    console.log(data)
    return data
}

function project({ params: { id } }) {
    const data = myData()

    return (<Project />)
}

export default project