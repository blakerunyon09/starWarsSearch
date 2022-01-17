import search from './utils/search.js'
import Card from './component/Card.js'

let { results: charData, count } = await search()
let pageCount = 1;
let lastSearch = '';
let apiPageCount = count;
const grid = document.querySelector('#charsGrid')
const searchButton = document.querySelector('#searchButton')
const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')
const layoutButton = document.querySelector('#layoutButton')

Grid(charData)

searchButton.addEventListener('click', async () => {
  grid.innerHTML = ''
  grid.classList.remove('column')
  grid.classList.add('row')
  layoutButton.innerText = "List"
  const searchInput = document.querySelector('#searchInput')
  lastSearch = searchInput.value
  let { results: charData, count } = await search(searchInput.value)
  apiPageCount = count;
  Grid(charData)
})

prevButton.addEventListener('click', async () => {
let previousCount = pageCount;
  pageCount === 1 ? 1 : pageCount --
  if(previousCount !== pageCount){
    grid.innerHTML = ""
    let { results: charData, count } = await search(lastSearch, pageCount)
    apiPageCount = count;
    Grid(charData)
  }
})

nextButton.addEventListener('click', async () => {
  let previousCount = pageCount;
  apiPageCount === pageCount ? apiPageCount : pageCount ++
  if(previousCount !== pageCount){
    grid.innerHTML = ""
    let { results: charData, count } = await search(lastSearch, pageCount)
    apiPageCount = count;
    Grid(charData)
  }
})

layoutButton.addEventListener('click', () => {
  grid.classList.toggle('row')
  grid.classList.toggle('column')
  layoutButton.innerText === "List" ? 
    layoutButton.innerText = "Grid" :
    layoutButton.innerText = "List"

  grid.childNodes.forEach((card) => {
    card.classList.toggle('card')
    card.classList.toggle('short-card')
  })
})

function Grid(characters){
  characters.forEach((char) => {
    grid.append(Card(char))
  })
}
