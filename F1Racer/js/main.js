// function to retrieve ranger data
const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response)
    console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}
// create constant to hold DOM Elements
const rangerList = '.ranger-list'


// Creation of the Ranger List HTML
const createList = (position, givenName, familyName, nationality, name, points) => {
    const html = `<div id=${position} class="card mt-3 mb-3" style="width: 18rem;">
    <ul class="list-group list-group-flush" id=${givenName}>
    <li class="list-group-item">Position: ${position}</li>
    <li class="list-group-item"> Name: ${givenName}, ${familyName}</li>
    <li class="list-group-item">Nationality: ${nationality}</li>
    <li class="list-group-item">Sponser: ${name}</li>
    <li class="list-group-item">Points: ${points}</li>
    
  </ul>
</div>`
    document.querySelector(rangerList).insertAdjacentHTML('beforeend', html)
}
const loadData = async () => {
    let season = document.querySelector("#season").value //coming from form that is build based of the id on that form
    let round = document.querySelector("#round").value
    console.log(season, round)
    const rangers = await getData(season, round)
    rangers.forEach(element => createList(element.position, element.Driver.givenName, element.Driver.familyName, element.Driver.nationality, element.Constructors[0].name, element.points))
}
const clearData = () => {
    document.querySelector(rangerList).innerHTML = '';
}