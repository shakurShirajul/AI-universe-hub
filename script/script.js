const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data.tools)
    loadDataToPage(data.data.tools)
}


// Create Div For Article

// const createElement = () => {

//     return divElement;
// }

// Load Data To Page

const loadDataToPage = (array) => {
    const articleContainer = document.getElementById('article-container');
    array.forEach(array => {
        const divElement = document.createElement('div');
        divElement.className = "card bg-base-100 border-2";
        divElement.innerHTML = `<figure class="px-10 pt-10"> <img src="${array.image}" alt="Shoes" class="rounded-xl" /></figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>`
        articleContainer.appendChild(divElement)
    })
}

loadData();