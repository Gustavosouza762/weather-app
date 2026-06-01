const inputCidade = document.getElementById("inputCidade");
const btnBuscar = document.getElementById("btnBuscar");
const cidadeNome = document.getElementById("cidadeNome");
const temperatura = document.getElementById("temperatura");
const descricao = document.getElementById("descricao");
const erro = document.getElementById("erro");
const loading = document.getElementById("loading");
const imgClima = document.getElementById("imgClima");
const body = document.body;
const weather = document.querySelector(".weather");
const sunContainer = document.querySelector(".sun-container");
const rainyVideo = document.querySelector("#rainyVideo");
const cloudyVideo = document.querySelector("#cloudyVideo");
const clockTimer = document.getElementById("clockTimer");

function atualizarTimer(timezone){
    clearInterval(clockTimer.intervalId);
    clockTimer.intervalId = setInterval(() => {
        const dataAtual= new Date();
        const utc= dataAtual.getTime() + (dataAtual.getTimezoneOffset() * 60000);
        const horarioCidade= new Date(utc + (timezone * 1000));
        const horas= String(horarioCidade.getHours()).padStart(2, "0");
        const minutos= String(horarioCidade.getMinutes()).padStart(2, "0");
        clockTimer.innerHTML= `${horas}:${minutos}`;
        }, 1000);
}

async function buscarClima() {
    const cidade = inputCidade.value.trim();
    if (cidade===""){
        erro.textContent= "Por favor, insira o nome de uma cidade.";
        erro.style.display = "block";
        return;
    }
    erro.style.display = "none";
    loading.style.display = "block";
    btnBuscar.disabled = true;
    const url = `https://weather-app-1-hp0e.onrender.com/clima/${cidade}`;

try {

    const reposta = await fetch(url);
    const dados = await reposta.json();

    if (dados.cod !== 200) {
        erro.textContent = "Cidade não encontrada. Por favor, tente novamente.";
        erro.style.display = "block";
        cidadeNome.textContent = "Cidade: ";
        temperatura.textContent = "Cº: ";
        descricao.textContent = "Descrição indisponível";
        imgClima.src = "";
        return;
}
    const climaAtual= dados.weather[0].main;
    weather.classList.remove("sunny-weather", "cloudy-weather", "rainy-weather");
    body.classList.remove("sunny", "cloudy", "rainy");
    sunContainer.style.opacity = "0";
    rainyVideo.style.opacity = "0";
    cloudyVideo.style.opacity = "0";
     if(climaAtual === "Clear"){
        body.classList.add("sunny");
        weather.classList.add("sunny-weather");
        sunContainer.style.opacity = "1";
    }else if (["Clouds",].includes(climaAtual)){{
        body.classList.add("cloudy");
        weather.classList.add("cloudy-weather");
        cloudyVideo.style.opacity = "1";
    }
    }else if(climaAtual === "Rain"){
        body.classList.add("rainy");
        rainyVideo.style.opacity = "1";
        weather.classList.add("rainy-weather");
    }

cidadeNome.textContent = `${dados.name}`;
localStorage. setItem("cidadeSalva", cidade);
temperatura.textContent = `${dados.main.temp}°C`;
descricao.textContent = ` ${dados.weather[0].description}`;
imgClima.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
atualizarTimer(dados.timezone);

}catch(error) {
    imgClima.src = "";
    console.error("Erro ao buscar dados do clima:", error);
    erro.textContent = "Erro ao se conectar à API.";
    erro.style.display = "block";

}finally{
    inputCidade.value = "";
    loading.style.display = "none";
    btnBuscar.disabled = false;
}
}

btnBuscar.addEventListener("click", buscarClima);

inputCidade.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        buscarClima();
    }
});

 window.addEventListener("load", () => {
   const cidadeSalva = localStorage.getItem("cidadeSalva")
    if (cidadeSalva){
        inputCidade.value= cidadeSalva;
        buscarClima();
    }
 });  

