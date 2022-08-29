// const loadCountryList = () =>{
//     fetch('https://www.thesportsdb.com/api/v1/json/2/all_countries.php')
//     .then(res => res.json())
//     .then(data => displayCountry(data.countries))
// }


// const displayCountry = data =>{
//     // console.log(countries)
//     const countryContainer = document.getElementById('country-list')
//     for(const country of data){
//         const countryDiv = document.createElement('div')
//         countryDiv.classList.add('col')
//         countryDiv.innerHTML = `
//         <div class="card">
//         <button onclick="countryNameCollect('${country.name_en}')">${country.name_en}</button>
//          </div>
//         `

//         countryContainer.appendChild(countryDiv)
//     }

// }

// const countryNameCollect = (name) =>{
//    console.log(name)
// }
const loadSports = ()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => sportDisplay(data.sports))
}

const sportDisplay = sport =>{
    console.log(sport);
    const sportsContainer = document.getElementById('sports-container')
    sportsContainer.innerHTML = ``
    for(const sports of sport){
        const sportsDiv = document.createElement('div')
        sportsDiv.classList.add('col');
        sportsDiv.innerHTML = `
        <div class="card">
            <img src="${sports.strSportThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${sports.strSport}</h5>
                 <p class="card-text">${sports.strSportDescription.slice(0 , 200)}</p>
                 </div>
         </div>
        `
    sportsContainer.appendChild(sportsDiv)
    
    }

}



const loadleague = (search) =>{
   const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${search}`
   console.log(url)
   fetch(url)
   .then(res => res.json())
   .then(data => displayLegue(data.teams))
}

const displayLegue = (teams) =>{
     console.log(teams)
    const legueContainer = document.getElementById('sports-container')
     legueContainer.innerHTML = ``;
    for(const legue of teams){
        console.log(legue)
        const legueDiv = document.createElement('div')
        legueDiv.innerHTML =``
        legueDiv.classList.add('col');
        legueDiv.innerHTML = `
        
        <div class="card">
            <img src="${legue.strStadiumThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${legue.strLeague}</h5>
                 <p class="card-text">${legue.strDescriptionEN.slice(0, 200)}</p>
                 <h4 >Sport: ${legue.strSport} <span class="m-3">Stadium: ${legue.strStadium}</span>  </h4> 
                 </div>
         </div>
        `
        legueContainer.appendChild(legueDiv)
    
    }
}
const searchLeague = () =>{
    const searchField = document.getElementById('search-league')
    const searchText = searchField.value;
    console.log(searchText);
    loadleague(searchText);
    searchField.value = ''
}



// loadCountryList();
loadSports();

// {/*  */}


// <div class="col">
//                       <div class="card">
//                         <img src="..." class="card-img-top" alt="...">
//                         <div class="card-body">
//                           <h5 class="card-title">Card title</h5>
//                           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                         </div>
//                       </div>
//                     </div>