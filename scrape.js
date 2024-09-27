import puppeteer from "puppeteer";

const scraping = async () => {
  try {
    // Inicia o navegador
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navega até a página desejada
    await page.goto("https://ituiutaba.sagatechbrasil.com.br/");

    // Aguarda o seletor específico
    await page.waitForSelector(".nome-bomba", { timeout: 60000 });

    console.log("Obtendo os dados...");

    // Extrai o conteúdo desejado
    const dados = await page.evaluate(() => {
      const elementos = Array.from(document.querySelectorAll(".nome-bomba"));
      return elementos.map((elemento) => elemento.textContent);
    });

    // Verifica se os dados não são nconsole.log(dados);ulos ou vazios
    if (dados && dados.length > 0) {
      console.log(dados);
    } else {
      console.log("Nenhum dado foi encontrado.");
    }

    return dados;

    // Fecha o navegador
    await browser.close();
  } catch (error) {
    console.error("Erro ao capturar os dados:", error.message);
  }
};

export default scraping;
