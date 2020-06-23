import { Builder, By } from 'selenium-webdriver';

const builder = new Builder().forBrowser('chrome');
example(builder);

async function example(builder: Builder) {
	const driver = await builder.build();
	try {
		await driver.get('https://yahoo.co.jp/');
		await driver.wait(async () => {
			const qurireco = await driver.findElement(By.id('qurireco'));
			const articles = await qurireco.findElements(By.tagName('article'));
			return articles.length > 20;
		}, 5 * 1000);
		const qurireco = await driver.findElement(By.id('qurireco'));
		const articles = await qurireco.findElements(By.tagName('article'));
		console.log(await Promise.all(articles.map((article) => { return article.getText(); })), articles.length);
	} catch(error) {
		console.error(error);
	} finally {
		await driver.quit();
	}
}
