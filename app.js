const allDataLoad = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/ai/tools')

    const data = await res.json()

    const curds = data.data.tools;
    // console.log(curds)
    displayAllData(curds)
}

const displayAllData = curds => {
    // console.log(curds)
    const div2 = document.getElementById('div-container');
    div2.textContent='';

    curds.forEach(curd => {
        console.log(curd)
        const div = document.createElement('div')
        div.classList = `card card-compact bg-gray-100 shadow-xl border-2 p-4`
        div.innerHTML = `<figure>
        <img
          src=${curd?.image}
          alt="curd" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Features</h2>
        <h2 class="card-title">1.Natural language processing</h2>
        <h2 class="card-title">2.Contextual understanding</h2>
        <h2 class="card-title">3.Text generation</h2>
        
        
        
          
        
        </div>
      </div>`

      div2.appendChild(div);
    });
}

const btnSearch = () => {
    allDataLoad()
}






