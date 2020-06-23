import { By } from 'selenium-webdriver';
import ChromeBrowser from './ChromeBrowser';

export default class Yahoo extends ChromeBrowser {
	private static readonly URL = 'https://yahoo.co.jp/';

	async get() {
		await this.driver!.get(Yahoo.URL);
		await this.driver!.wait(async () => {
			const articles = await this.getNewsArticles();
			return articles.length > 20;
		}, 5 * 1000);
		const articles = await this.getNewsArticles();
		return await Promise.all(articles.map((article) => { return article.getText(); }));
	}
	
	private async getNewsArticles() {
		const qurireco = await this.driver!.findElement(By.id('qurireco'));
		const articles = await qurireco.findElements(By.tagName('article'));
		return articles;
	}
}
