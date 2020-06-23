import Yahoo from './Yahoo';

const yahoo = new Yahoo();
(async () => {
	await yahoo.build();
	try {
		const titles = await yahoo.get();
		console.log(titles, titles.length);
	} catch(error) {
		console.error(error);
	} finally {
		await yahoo.close();
	}
})();
