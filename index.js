const axios = require("axios");
const fs = require("fs");
const path = require("path");

const fetchTopModels = async () => {
	try {
		const response = await axios.get(
			"https://huggingface.co/api/models?sort=downloads&direction=-1"
		);
		return response.data.slice(0, 10);
	} catch (error) {
		console.error("Failed to fetch data", error);
		return [];
	}
};

const generateReport = (models) => {
	let report = "List of the top 10 downloaded models:\n\n";
	models.forEach((model, index) => {
		report += `${index + 1}. ${model.modelId} - ${
			model.downloads
		} downloads \n`;
	});
	const reportPath = path.join(__dirname, "report.txt");
	try {
		fs.writeFileSync(reportPath, report);
		console.log("Report generated successfully at", reportPath);
	} catch (error) {
		console.error("Failed to write report:", error);
	}
};

const fetchData = async () => {
	while (true) {
		const topModels = await fetchTopModels();
		if (topModels.length > 0) {
			generateReport(topModels);
			break;
		}
		console.log("Retrying in 10 minutes");
		await new Promise((resolve) => setTimeout(resolve, 600000));
	}
};

fetchData();
