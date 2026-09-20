# Elysian Translations 🌐

Traductor de voz y texto en tiempo real, con soporte para más de 20 idiomas. Detecta el idioma de origen automáticamente, traduce mientras escribes, y puede leer la traducción en voz alta.

## Características

- 🎙️ **Reconocimiento de voz**: habla y se transcribe automáticamente (Web Speech API)
- 🔊 **Lectura en voz alta**: escucha la traducción con un clic
- 🌍 **+20 idiomas**: inglés, español, italiano, francés, alemán, portugués, japonés, chino, ruso, árabe y más
- ⚡ **Traducción en tiempo real**: se traduce mientras escribes, sin necesidad de botones
- 🔄 **Detección automática de idioma de origen**, con opción de elegirlo manualmente

## Tecnologías usadas

- **Frontend**: HTML, CSS y JavaScript puro
- **Backend**: Node.js + Express (como intermediario seguro con la API de DeepL)
- **Traducción**: [API de DeepL](https://www.deepl.com/pro-api)
- **Voz**: Web Speech API del navegador (reconocimiento de voz y síntesis de voz)

## Cómo correrlo localmente

1. Clona el repositorio:

git clone https://github.com/Isaac-927/traductor-elysian.git
cd traductor-elysian


2. Instala las dependencias:

npm install


3. Crea un archivo .env en la raíz del proyecto con tu propia API key gratuita de [DeepL](https://www.deepl.com/pro-api):

DEEPL_API_KEY=tu_key_aqui


4. Corre el servidor:

node server.js


5. Abre http://localhost:3000 en tu navegador (recomendado: Chrome, para mejor soporte de reconocimiento de voz).

## Por qué un backend intermediario

La API de DeepL no permite llamadas directas desde el navegador por motivos de seguridad (CORS). Por eso el frontend le habla a un pequeño servidor propio en Node/Express, que es quien se comunica con DeepL usando la API key de forma segura (nunca expuesta en el código del cliente).

## Autor

Isaac — Tecnólogo en Análisis y Desarrollo de Software, SENA (Barranquilla)
