let apikey = '0ce2619d6a0f4297bea6ec60dee034a9'

let input = document.querySelector('.block__input')
let acceptButton = document.querySelector('.button__block')
let prevPageButton = document.querySelector('.prev__page')
let list = document.querySelector('.block__news')
let currentPage = document.querySelector('.current__page')
let nextPageButton = document.querySelector('.next__page')


let page = 1

let apiURL = 'https://newsapi.org/v2/everything'

function fetchNews(){
   let url = `${apiURL}?q=${input}&page=${page}&pageSize=5&apiKey=${apikey}`
   fetch(url, {method: 'GET'})

   .then(response => response.json())
    /* .then(answer => console.log(answer))  */
   .then(value => {
      value.articles.forEach(element => {
         let li = document.createElement('li')
         li.innerHTML `<a href="${element.url}" target="_blank" rel="noopener noreferrer">
         <article>
           <img src="${element.urlToImage || 'https://via.placeholder.com/480'}" alt="${element.title}">
           <h2>${element.title}</h2>
           <p>Posted by: ${element.author || 'Unknown'}</p>
           <p>${element.description || 'No description available'}</p>
         </article>
       </a>`;
       list.appendChild(li)
      });
      if(value.articles.lenght === 0){
         li.innerHTML = `<li></li>`
      }
   })
}



searchButton.addEventListener('click', function(){
   let inputValue = input.value
   if(inputValue !== news){
      news = inputValue
      
   }
   fetchNews()
}) 



nextPageButton.addEventListener('click', function(){
   page++
   fetchNews()
})

prevPageButton.addEventListener('click', function(){
   if(page > 1){
      page--
      fetchNews()
   }
})

function pagination(){
   let totalPages = Math.ceil(totalResults / 20)
   currentPage.textContent = `Page ${page} of ${totalPages}`

   nextBtn.disabled = page >= totalPages;
   prevBtn.disabled = page <= totalPages;
}