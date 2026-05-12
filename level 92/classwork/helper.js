async function fetchData(user){
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()
    return data
}
export default fetchData;