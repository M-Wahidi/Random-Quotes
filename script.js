let results = [
    {
     author:'Charles LindBergh',
     text:'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.'
},
{
    author:'Claude Louis Hector De Villars',
    text:'God save me from my friends. I can protect myself from my enemies.'
},
{
    author:'Tyne Daly',
    text:'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.'
},
{
    author:'John Kenneth Galbraith',
    text:'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all.'
},
{
    author:'Life',
    text:'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that weve got.'
},
{
    author:'David Thoreau',
    text:'The price of anything is the amount of life you exchange for it.'
}
];
const randomButton = document.getElementById('generate');
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
function getQutoes(data){
    const item = results[data]
    quote.innerHTML =  'test ' + item.text
    author.innerHTML = item.author
}
randomButton.addEventListener('click',function(){
    let random = Math.floor(Math.random() * results.length)
    getQutoes(random)
})