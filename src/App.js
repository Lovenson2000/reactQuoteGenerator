import { useState } from "react";

const url = "https://type.fit/api/quotes";

let customQuote = "A man should not have more than one priority at once. Because, when we try to handle too many things at the same time, we're highly likely to handle each of them less effectively.";
let customAuthor = "Lovenson Beaucicot";

export default function App () {
  return (
    <div class="h-screen">
      <Logo />
      <Quote />
    </div>
  );
}

function Logo () {
  return (
    <div class="w-full h-16 flex items-center justify-between shadow-lg">
      <h1 class="text-transparent bg-gradient-to-tr from-indigo-700 to-blue-500 ml-6 font-semibold bg-clip-text text-2xl md:text-4xl">Wizdom</h1>
      <img class="mr-6 w-8" src="https://cdn-icons-png.flaticon.com/128/6314/6314351.png" alt="logo-img"></img>
    </div>
  );
}

function Quote() {

  const [quote, setQuote] =useState(customQuote);
  const [author, setAuthor] =useState(customAuthor);
    
  async function fetchingData(url) {

    const response = await fetch(url);
    const data = await response.json();

    let randomIndex = Math.floor(Math.random() * data.length);

    setQuote(data[randomIndex].text);

    if(data[randomIndex].author.includes(", type.fit")) {
      let index = data[randomIndex].author.indexOf(", type");
      setAuthor(data[randomIndex].author.slice(0, index));
    }
  }

  return(
    <div class="shadow-2xl bg-slate-80 text-center rounded-lg my-28 sm1:my-12 sm2:my-28 sm3:my-32 mx-4 py-8 px-3 md:w-96 md:mx-auto">
      <p class="text-lg"> <span class="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-blue-500 font-black">"</span> {quote} <span class="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-blue-500 font-black">"</span></p>
      <h2 class="text-xl mt-4 font-medium">{`-${author}`}</h2>
      <button class="bg-gradient-to-tr from-indigo-600 to to-blue-600 text-white my-6 text-lg py-1.5 px-5 rounded-sm"
      onClick={ () => {fetchingData(url)}}
      >Next quote</button>
    </div>
  );
}
