
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


const DEEPL_API_KEY = process.env.DEEPL_API_KEY;

if (!DEEPL_API_KEY) {
  console.error("ERROR: No se encontró DEEPL_API_KEY. Revisa tu archivo .env");
  process.exit(1);
}


const DEEPL_URL = DEEPL_API_KEY.endsWith(":fx")
  ? "https://api-free.deepl.com/v2/translate"
  : "https://api.deepl.com/v2/translate";

app.post("/traducir", async (req, res) => {
  const { texto, idiomaDestino, idiomaOrigen } = req.body;

  if (!texto) {
    return res.status(400).json({ error: "Falta el texto a traducir" });
  }

  if (!idiomaDestino) {
    return res.status(400).json({ error: "Falta el idioma de destino" });
  }

  const cuerpo = {
    text: [texto],
    target_lang: idiomaDestino, 
  };
  if (idiomaOrigen) {
    cuerpo.source_lang = idiomaOrigen; 
  }

  try {
    const response = await fetch(DEEPL_URL, {
      method: "POST",
      headers: {
        "Authorization": `DeepL-Auth-Key ${DEEPL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cuerpo),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Error de DeepL:", response.status, errorBody);
      return res.status(response.status).json({ error: "Error al traducir", detalle: errorBody });
    }

    const data = await response.json();
    const traduccion = data.translations[0].text;
    res.json({ traduccion });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});