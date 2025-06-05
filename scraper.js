// scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Faz scraping das manchetes do site R7
 * @returns {Promise<string[]>} Lista das manchetes
 */
async function scrapNews() {
  try {
    const { data } = await axios.get('https://www.r7.com/');
    const $ = cheerio.load(data);

    const headlines = [];
    $('a.r7-flex-title-href, a.r7-card-title').slice(0, 5).each((i, el) => {
      headlines.push($(el).text().trim());
    });

    return headlines;
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error);
    return [];
  }
}

module.exports = scrapNews;
