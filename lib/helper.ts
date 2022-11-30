

export default async function getPost(id?: number){
    const res = await fetch("http://localhost:3000/api/posts")
    const posts = await res.json()
    if(id){
        return posts.find((value: { id: number; })=> value.id==id)
    }
    return posts;
}