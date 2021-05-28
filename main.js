const news_container=document.getElementById('news_container');



const getNews=async id=>{
    const res=await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=39820036b4574f6281fc1be345714b11')
const news=await res.json();
console.log(news);
createnewsCard(news);

}

const createnewsCard= (news) =>{ const {articles,title}=news;
    for(let i=0;i<articles.length;i++)
{
const newsEl=document.createElement('div');
newsEl.classList.add('news');


const newsInnerHTML=`
<span class="title">${news.articles[i].title}</span>
<div class="img-container">
<img src="${news.articles[i].urlToImage}" alt="${title}" class="image"> </div>
<div >

<p class="description"> ${news.articles[i].description}</p>



</div>
`;
newsEl.innerHTML=newsInnerHTML;
news_container.appendChild(newsEl);
}}
getNews();
