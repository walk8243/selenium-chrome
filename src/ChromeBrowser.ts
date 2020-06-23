import { Builder, WebDriver } from 'selenium-webdriver';

export default class ChromeBrowser {
	builder: Builder;
	driver: WebDriver | null = null;

	constructor() {
		this.builder = new Builder().forBrowser('chrome');
	}

	async build() {
		this.driver = await this.builder.build();
	}

	async close() {
		if(this.driver == null) { return; }
		this.driver.quit();
	}
}
