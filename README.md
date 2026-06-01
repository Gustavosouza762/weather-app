🌦 Weather App

Um aplicativo de clima moderno que exibe informações meteorológicas em tempo real com interface dinâmica baseada nas condições climáticas (sol, chuva, nuvens e neblina).

🚀 Demonstração

🔗 Frontend (Vercel)

https://weather-app-xi-virid-16.vercel.app/

🔗 Backend (Render)

[API responsável por buscar dados climáticos em tempo real.](https://weather-app-1-hp0e.onrender.com)

📸 Preview

A interface do aplicativo se adapta automaticamente ao clima da cidade pesquisada:

☀️ Sunny → Céu limpo

☁️ Cloudy → Nublado / Neblina

🌧 Rainy → Chuva / Tempestade

⚙️ Funcionalidades

🔎 Busca de cidades em tempo real

🌡 Exibição da temperatura atual

🌦 Descrição do clima

🕒 Relógio local baseado no fuso horário

🎬 Troca dinâmica de vídeos e estilos conforme o clima

💾 Persistência da última cidade pesquisada (localStorage)

🌍 Integração com API própria no backend

🧠 Lógica do Clima

O sistema padroniza os dados da API externa em três categorias principais:

☀️ sunny
→Clear

☁️ cloudy
→Clouds
→Mist
→Fog
→Haze
→Smoke

🌧 rainy
→Rain
→Drizzle
→Thunderstorm
 👉 Isso garante consistência visual independente da variação da API.


🛠️ Tecnologias utilizadas
Frontend

HTML5

CSS3

JavaScript (Vanilla)

Vercel (deploy)

Backend

Node.js

Express

CORS

Node-Fetch

Render (deploy)

API externa

OpenWeather API


🔧 Como executar localmente
1. Clonar o repositório
git clone https://github.com/seu-usuario/weather-app.git

2. Backend
→cd backend
→npm install
→npm start

3. Configurar variáveis de ambiente
Crie um arquivo .env na pasta backend:

API_KEY=SUA_CHAVE_DA_OPENWEATHER

👉 Você deve gerar sua própria chave em:
https://openweathermap.org/api

4. Frontend

Abra o index.html ou use Live Server.

🌐 Endpoint da API
GET /clima/:cidade

Exemplo:
/clima/Sao Paulo

📌 Melhorias futuras

🌙 Modo noturno automático

📊 Previsão de 7 dias

📍 Geolocalização automática

🎨 Transições suaves entre climas

📱 Otimização mobile 

Autor:
 Gustavo Souza

Projeto desenvolvido com foco em:
 →Integração com APIs
→Frontend dinâmico
→Deploy full stack


📄 Licença

Este projeto está sob a licença MIT.
