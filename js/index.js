// http://api.weatherapi.com/v1/forecast.json?key=87a17ada3dbd4d22b6f61549243006&q=07112&days=3 // API link

let realTimeSearch = document.getElementById('input');
let rowData = document.getElementById('rowData');


async function wether(search) {

    let http = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=87a17ada3dbd4d22b6f61549243006&q=${search}&days=3`, { method: 'GET' });
    let response = await http.json();
    if (!response.error) {
        display(response);
    }
}

realTimeSearch.addEventListener('input', function () {
    wether(realTimeSearch.value);
})

wether('Cairo');

function display(DAY) {
    var dataDay = new Date(DAY.forecast.forecastday[0].date);


    rowData.innerHTML = `<div id="card-1" class="col-md-6 col-xl-4">
                        <div class="card h-100  rounded-start-4  rounded-0">
                            <div class="card-header d-flex justify-content-between">
                                <span>${dataDay.toLocaleDateString("en-US", { weekday: "long" })}</span>
                                <span>${dataDay.getDate() + ' ' + dataDay.toLocaleDateString('en-US', { month: 'long' })}</span>
                            </div>
                            <div class="card-body text-light">
                                <span>${DAY.location.name}</span>
                                <p>${DAY.current.temp_c} c</p>
                                <img src="https:${DAY.current.condition.icon}" width="100" alt="">
                                <span class="text-info d-block">${DAY.current.condition.text}</span>
                                <div class="d-flex justify-content-evenly mt-3">
                                    <span><img src="photo/icon-umberella@2x.png" alt="" width="21"
                                            height="21"> ${DAY.current.humidity}%</span>
                                    <span><img src="photo/icon-wind@2x.png" alt="" width="21" height="21"> ${DAY.current.wind_kph} km/h</span>
                                    <span><img src="photo/icon-compass@2x.png" alt="" width="21" height="21"> ${DAY.current.wind_dir}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="card-2" class="col-md-6 col-xl-4">
                        <div id="card-2" class="card h-100  rounded-0">
                            <div class="card-header text-center">
                                <span>${new Date(DAY.forecast.forecastday[1].date).toLocaleDateString("en-US", { weekday: "long" })}</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <img src="https:${DAY.forecast.forecastday[1].day.condition.icon}" alt="">
                                <span class="fs-4 m-2">${DAY.forecast.forecastday[1].day.maxtemp_c}c</span>
                                <span class="mb-2">${DAY.forecast.forecastday[1].day.mintemp_c}</span>
                                <span class="text-info ">${DAY.forecast.forecastday[1].day.condition.text}</span>
                            </div>
                        </div>
                    </div>
                    <div id="card-3" class="col-md-6 col-xl-4">
                        <div class="card h-100  rounded-end-4  rounded-0">
                            <div class="card-header text-center">
                                <span>${new Date(DAY.forecast.forecastday[2].date).toLocaleDateString("en-US", { weekday: "long" })}</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center flex-column">
                                <img src="https:${DAY.forecast.forecastday[2].day.condition.icon}" alt="">
                                <span class="fs-4 m-2">${DAY.forecast.forecastday[2].day.maxtemp_c}c</span>
                                <span class="mb-2">${DAY.forecast.forecastday[2].day.mintemp_c}</span>
                                <span class="text-info ">${DAY.forecast.forecastday[2].day.condition.text}</span>
                            </div>
                        </div>
                    </div>`
}





