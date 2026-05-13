const fetchData = async (crypto) =>{
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`)
    const data = await res.json()
    return data
}


const form = document.querySelector("form")
const parentDiv = document.querySelector("div")
const value = form.input.value
const data = await fetchData(value)

let newDiv = document.createElement("div")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    newDiv.innerHTML = ""
    
    
    newDiv.innerHTML += `
        <div class="main">
            <div class="section">
                <p>Logo:</p>
                <img class="img" src="${data.image}">
            </div>
            <div class="section"></div>
            <div class="section"></div>
            <div class="section"></div>
            <div class="section"></div>
        </div>
    `


    parentDiv.appendChild(newDiv)
})