# 🍭 Web Scraper - Buscapé Supersaldão

Este projeto é um **web scraper** desenvolvido com [Puppeteer](https://pptr.dev/) que coleta automaticamente informações de produtos (título, preço, imagem e link do vendedor) da seção **Supersaldão** do [Buscapé](https://www.buscape.com.br/supersaldao).

## 🚀 Funcionalidades

* Acessa a página de ofertas do Supersaldão no Buscapé
* Extrai links de produtos listados
* Visita cada produto individualmente
* Coleta:

  * Nome do produto
  * Preço atual
  * Imagem principal
  * Link direto para o site do vendedor
* Exibe os dados no console

## 🧰 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [Puppeteer](https://pptr.dev/)

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/buscape-scraper.git
   cd buscape-scraper
   ```

2. Instale as dependências:

   ```bash
   npm install puppeteer
   ```

3. Execute o script:

   ```bash
   node index.js
   ```

## 📄 Exemplo de Saída

```json
[
  {
    "title": "Smartphone Samsung Galaxy S21",
    "price": "R$ 2.599,00",
    "img": "https://...",
    "url": "https://www.lojavendedora.com/produto/..."
  }
]
```

## ⚠️ Avisos

* O scraping pode falhar se a estrutura do site mudar.
* Evite sobrecarregar o servidor do Buscapé. Este projeto é apenas para fins educacionais.
* Sites como o Buscapé podem conter medidas contra scraping automatizado.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
