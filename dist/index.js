var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("JS carregado");
const form = document.querySelector("#form-localizacao");
console.log("FORM:", form);
const input = document.querySelector("#input-localizacao");
const sectionTempoInfo = document.querySelector("#tempo-info");
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    alert("Submit disparado");
    if (!input || !sectionTempoInfo)
        return;
    const localizacao = input.value.trim();
    if (localizacao.length < 3) {
        alert("O local precisa ter pelo menos, 3 letras.");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=e06329eac585b1d59cc630ab7f7b4729&lang=pt_br&units=metric`);
        if (!response.ok) {
            throw new Error("Cidade não encontrada");
        }
        const dados = yield response.json();
        sectionTempoInfo.innerHTML = `
            <div class="tempo-dados">
                <h2>${dados.name}</h2>
                <span>${Math.round(dados.main.temp)}°C</span>
            </div>

            <img src="http://openweathermap.org/img/wn/${dados.weather[0].icon}.png"/>
        `;
    }
    catch (err) {
        alert("Erro ao buscar dados do clima.");
    }
}));
export {};
//# sourceMappingURL=index.js.map