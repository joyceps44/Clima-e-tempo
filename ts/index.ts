const form = document.querySelector<HTMLFormElement>("#form-localizacao");
console.log("FORM:", form);

const input: HTMLInputElement | null = document.querySelector("#input-localizacao");

const sectionTempoInfo = document.querySelector("#tempo-info");


form?.addEventListener('submit', async (event) => {
    event.preventDefault();


    if (!input || !sectionTempoInfo) return;

    const localizacao = input.value.trim();

    if (localizacao.length < 3) {
        alert("O local precisa ter pelo menos, 3 letras.");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=e06329eac585b1d59cc630ab7f7b4729&lang=pt_br&units=metric`);

        if(!response.ok){
            throw new Error("Cidade não encontrada");
        }

        const dados = await response.json();


        sectionTempoInfo.innerHTML = `
            <div class="tempo-dados">
                <h2>${dados.name}</h2>
                <span>${Math.round(dados.main.temp)}°C</span>
            </div>

            <img src="http://openweathermap.org/img/wn/${dados.weather[0].icon}.png"/>
        `;


    } catch (err) {
        alert("Erro ao buscar dados do clima.");
    }

});


