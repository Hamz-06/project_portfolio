
import Project from '@/app/component/Projects/Projects'
import { client } from '@/util/sanity.client'
import { groq } from "next-sanity";


const myData = async ({ param }) => {

    const query = groq`*[_type == "project"&&slug.current=="${param}"][]`
    const data = await client.fetch(query)

    return data
}

async function project({ params: { id } }) {

    const data = await myData({ param: id })

    if (data.length === 0) {
        return (
            <h1>
                Not Found
            </h1>
        )
    }

    return (<Project data={data} />)
}

export default project