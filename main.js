const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const secondStr = '&limit=25&q='

const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

const SearchGiphy = async(e) => {
    e.preventDefault()
    let text = input.value
    let url = API + KEY + secondStr + text
    let request = await fetch(url)
    let response = await request.json()
    input.value = ''
    output.innerHTML = ''
    renderGiphy(response.data)
    console.log(response.data)
}

const renderGiphy = (arr) => {
    arr.forEach(el => {
        let div = document.createElement('div')
        let iframe = document.createElement('iframe')
        let h3 = document.createElement('h3')
        iframe.src = el.embed_url
            //h3.innerHTML = el.title
        output.append(div)
        div.append(h3, iframe)
    })
}


btn.addEventListener('click', SearchGiphy)