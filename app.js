let weather = prompt("Enter your area's weather", "use lowercase")

if (weather == "sunny") {
    document.write(`<div class="card m-auto w-50 h-50 shadow-lg bg-body-tertiary rounded" style="width: 18rem;">` + `<img src="../sunny.png"` + ` class="card-img-top" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">Sunny` + `</h1>` + `</div>` + `</div>`)
} else if (weather == "rainy") {
    document.write(`<div class="card m-auto w-50 h-50 shadow-lg bg-body-tertiary rounded" style="width: 18rem;">` + `<img src="./rain.png"` + ` class="card-img-top" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">Rainy` + `</h1>` + `</div>` + `</div>`)
} else if (weather == "cloudy") {
    document.write(`<div class="card m-auto w-50 h-50 shadow-lg bg-body-tertiary rounded" style="width: 18rem;">` + `<img src="./cloudy.png"` + ` class="card-img-top" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">Cloudy` + `</h1>` + `</div>` + `</div>`)
} else if (weather == "windy") {
    document.write(`<div class="card m-auto w-50 h-50 shadow-lg bg-body-tertiary rounded" style="width: 18rem;">` + `<img src="./cloudy.png"` + ` class="card-img-top" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">Windy` + `</h1>` + `</div>` + `</div>`)
} else if (weather == "snowy") {
    document.write(`<div class="card m-auto w-50 h-50 shadow-lg bg-body-tertiary rounded" style="width: 18rem;">` + `<img src="./snow.png"` + ` class="card-img-top" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">` + `Snowy` + `</h1>` + `</div>` + `</div>`)
} else if (weather == "stormy") {
    document.write(`<div class="card m-auto w-50 h-50 shadow-lg bg-body-tertiary rounded" style="width: 18rem;">` + `<img src="./stormy.png"` + ` class="card-img-top" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">` + `Stormy` + `</h1>` + `</div>` + `</div>`)
}
else {
    document.write(`<div class="card m-auto w-50 h-50 shadow-lg bg-body-tertiary rounded" style="width: 18rem;">` + `<img src="./emoji.png"` + ` class="card-img-top h-25 w-50 mx-auto my-auto" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">Are you kidding` + `</h1>` + `</div>` + `</div>`)
}