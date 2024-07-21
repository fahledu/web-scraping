import puppeteer from 'puppeteer';
const list = [];
let count = 0;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

  await page.goto('https://www.buscape.com.br/supersaldao');

  // await page.setViewport({ width: 1080, height: 1024 });

  const links = await page.$$eval('.ProductCard_ProductCard_Inner__gapsh', element => element.map(link => link.href))
  

  for (const link of links) {
    try {
      await page.goto(link)
      await page.waitForSelector('.Text_Text__ARJdp')

      const title = await page.$eval('.Title_Name__fFJe6', element => element.innerText)
      const price = await page.$eval('.Price_ValueContainer__ndCqK', element => element.innerText)
      const img = await page.$eval('.OfferCard_WithBestOffer__uRyzS a img', element => element.src)
      const getUrl = await page.$eval('.OfferCard_WithBestOffer__uRyzS a', element => element.href)

      await page.goto(getUrl);
      await page.waitForSelector('a');
      const getSallert = await page.$eval('a', element => element.href)
      await page.goto(getSallert, {timeout: 600000})
      
      const site = await page.url()

      const obj = {};
      obj.title = title;
      obj.price = price;
      obj.img = img;
      obj.url = site;

      list.push(obj)


      count++

      console.log(list)
    } catch (error) {
      console.log(error)
    }
  }

  await browser.close();
})();
