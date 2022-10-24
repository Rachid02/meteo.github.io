// let select1 = document.querySelector("#test1");
// let img = document.querySelector("img");

// select1.addEventListener("change", () => {
//   let variable = select1.value;

//   fetch("https://pokeapi.co/api/v2/pokemon/"+variable)
//     .then(rep => {
//       if (rep.ok === true) {
//         rep.json().then((data) => {
//             img.setAttribute("src", data.sprites.front_shiny);
//             // img.setAttribute("src", data.sprites.front_default);
//           }).catch((err) => {
//             console.log("Une erreur est survenue", err);
//           });
//       } else {
//         // Il y a une erreur
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


let ville = document.querySelector("#ville");
let climat = document.querySelector("#climat");
// let imgClimat = document.querySelector("img");
// let imgDiv = document.querySelector("#imgDiv");
let temp = document.querySelector("#temp");

let ressenti = document.querySelector("#ressenti");
let windSpeed = document.querySelector("#windSpeed");
let tMax = document.querySelector("#tMax");
let tMin = document.querySelector("#tMin");
let humidite = document.querySelector("#humidite");

let recherche = document.querySelector("#aRecherche");
let lieu = document.querySelector("#rechercheVille");
let apiCle = `4403b74a922d2e9d88ac091c2cb2e9db`;
// console.log(lieu)

recherche.addEventListener("click", e =>{
  e.preventDefault();
  let search = lieu.value;
  
  // console.log(search)

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiCle}&units=metric&lang=fr`).then(rep => {
    
      console.log(rep)

      if (rep.ok === true) {
        rep.json().then(data => {
            console.log(data);
            
            let icone = data.weather[0].icon;
            ville.innerText = data.name;
            climat.innerText = data.weather[0].description;

            let imgClimat = document.createElement("img");
            console.log(imgClimat);

            imgClimat.src = `https://openweathermap.org/img/wn/${icone}@2x.png`
            imgClimat.setAttribute(`src`, `https://openweathermap.org/img/wn/${icone}@2x.png`);

            temp.innerHTML = "<i class='fas fa-thermometer-half'></i> " + data.main.temp + '°C';
            ressenti.innerHTML = "<i class='fas fa-thermometer-heat'></i> " + data.main.feels_like + '°C';
            tMax.innerHTML = "<i class='fas fa-thermometer-full'></i> " + data.main.temp_max + '°C';
            tMin.innerHTML = "<i class='fas fa-thermometer-empty'></i> " + data.main.temp_min + '°C';
            humidite.innerHTML = "<i class='fas fa-tint'></i> " + data.main.humidity + '%';
            windSpeed.innerHTML = "<i class='fas fa-wind'></i> " + data.wind.speed + 'km/h';


            // let latitudes = data[0].coordinates.latitude;
            // let longitudes = data[0].coordinates.longitude;

            // fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitudes}&longitude=${longitudes}&daily=weathercode,
            //         temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,
            //         windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`).then(reponse => {
    
            //     console.log(reponse)

            //     if (reponse.ok === true) {
            //       reponse.json().then(donnees => {
            //           console.log(donnees);
            //           p1.innerText = donnees.temperature_2m_max;
            //           p2.innerText = donnees.precipitation_sum;
            //           p3.innerText = donnees.rain_sum;
            //         }).catch((err) => {
            //           console.log("Une erreur est survenue", err);
            //         });
            //     } else {
            //       // Il y a une erreur
            //     }
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //   });

          }).catch((err) => {
            console.log("Une erreur est survenue", err);
          });
      } else {
        // Il y a une erreur
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log("ça marche")
})

