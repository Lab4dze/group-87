import fetchData from "./helper.js";

const form = document.querySelector("form")
const btn = document.querySelector("#submit")
const mainDiv = document.querySelector("#res")



const render = (user) => {
    
    mainDiv.innerHTML = ""
    const joinedDate = new Date(user.created_at);
    const formattedDate = joinedDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    let bio = user.bio
    if(!bio){
        bio = "This profile has no bio"
    }
    const userDiv = document.createElement("div")
    userDiv.innerHTML = `
        <div class="userDiv">
            <img class="userPfp" src="${user.avatar_url}">
            <div class="txts">
                <div class="mid">
                    <h2>${user.name}</h2>
                    <h3 class="joined">Joined ${formattedDate}</h3>
                </div>
                <h3 class="login">@${user.login}</h3>
                <h3 class="bio">${bio}</h3>
                <div class="darkdiv">
                    <div class="round">
                        <p>Repos</p>
                        <h3>${user.public_repos}</h3>
                    </div>
                    <div class="round">
                        <p>Followers</p>
                        <h3>${user.followers}</h3>
                    </div>
                    <div class="round">
                        <p>Following</p>
                        <h3>${user.following}</h3>
                    </div>
                </div>
                <div class="b">
                    <div class="ac">
                        <h3><img src="./map.png"> ${user.location}</h3>
                        <h3><img src="./link.png"> Not Available</h3>
                    </div>
                    <div class="ac">
                        <h3><img src="./twitter.png"> ${user.twitter_username}</h3>
                        <h3><img src="./company.png"> ${user.company}</h3>
                    </div>
                </div>
            </div>
        </div>
    `
    mainDiv.appendChild(userDiv)
}
form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    const username = form.user.value
    const userData = await fetchData(username)
    if(userData){
        render(userData)
    }
    console.log(userData)
})