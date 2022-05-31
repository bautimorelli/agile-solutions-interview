let chart = null;

document.addEventListener("DOMContentLoaded", function () {
	chart = Highcharts.chart("container", {
		chart: {
			type: "column",
		},
		title: {
			text: "Sales By Month for:",
		},
		xAxis: {
			title: {
				text: "Months",
			},
			categories: ["Junuary", "Febuary", "March", "April"],
		},
		yAxis: {
			title: {
				text: "Sales",
			},
		},
		series: [
			{
				name: "Sales",
				data: [100, 300, 400, 550],
			},
		],
	});

	// Event Listeners.....
	selectorCategoryElement.addEventListener("change", (event) => {
		let selectedItem = selectorData.selectorCategory.find(
			(item) => item.title == event.target.value
		);
		setSelectorProductData(selectedItem.values);
	});

	selectorProductElement.addEventListener("change", (event) => {
		let selectedItem = selectorData.selectorProduct.find(
			(item) => item.title == event.target.value
		);
		setSelectorBrandData(selectedItem.values);
	});

	selectorBrandElement.addEventListener("change", (event) => {
		let selectedItem = selectorData.selectorBrand.find(
			(item) => item.title == event.target.value
		);
		setChartData(selectedItem.data);
	});

	// Setup.....
	createOptionElements(selectorCategoryElement, chartData);
	setSelectorProductData(chartData[0].values);
});

// Data.....
const chartData = [
	{
		title: "Food",
		values: [
			{
				title: "Banana",
				values: [
					{
						title: "Banana1",
						data: [200, 300, 100, 500],
					},
					{
						title: "Banana2",
						data: [130, 500, 200, 200],
					},
					{
						title: "Banana3",
						data: [250, 350, 50, 400],
					},
				],
			},
			{
				title: "Apple",
				values: [
					{
						title: "Apple1",
						data: [300, 500, 200, 300],
					},
					{
						title: "Apple2",
						data: [300, 300, 300, 300],
					},
					{
						title: "Apple3",
						data: [500, 400, 300, 200],
					},
				],
			},
			{
				title: "Grapes",
				values: [
					{
						title: "Grapes1",
						data: [150, 200, 300, 400],
					},
					{
						title: "Grapes2",
						data: [100, 100, 100, 500],
					},
					{
						title: "Grapes3",
						data: [500, 300, 200, 400],
					},
				],
			},
		],
	},
	{
		title: "Transport",
		values: [
			{
				title: "Car",
				values: [
					{
						title: "Car1",
						data: [200, 400, 100, 100],
					},
					{
						title: "Car2",
						data: [100, 200, 100, 500],
					},
					{
						title: "Car3",
						data: [400, 400, 200, 100],
					},
				],
			},
			{
				title: "Motorbike",
				values: [
					{
						title: "Motorbike1",
						data: [400, 100, 100, 500],
					},
					{
						title: "Motorbike2",
						data: [300, 100, 250, 250],
					},
					{
						title: "Motorbike3",
						data: [200, 150, 300, 400],
					},
				],
			},
			{
				title: "Bike",
				values: [
					{
						title: "Bike1",
						data: [400, 100, 300, 400],
					},
					{
						title: "Bike2",
						data: [500, 200, 100, 200],
					},
					{
						title: "Bike3",
						data: [200, 350, 150, 400],
					},
				],
			},
		],
	},
	{
		title: "Phones",
		values: [
			{
				title: "Apple",
				values: [
					{
						title: "Apple1",
						data: [400, 100, 200, 600],
					},
					{
						title: "Apple2",
						data: [500, 200, 100, 400],
					},
					{
						title: "Apple3",
						data: [300, 300, 300, 100],
					},
				],
			},
			{
				title: "Samsung",
				values: [
					{
						title: "Samsung1",
						data: [200, 200, 200, 200],
					},
					{
						title: "Samsung2",
						data: [100, 100, 200, 400],
					},
					{
						title: "Samsung3",
						data: [400, 300, 400, 200],
					},
				],
			},
			{
				title: "Xiomi",
				values: [
					{
						title: "Xiomi1",
						data: [100, 100, 100, 200],
					},
					{
						title: "Xiomi2",
						data: [200, 200, 100, 300],
					},
					{
						title: "Xiomi3",
						data: [300, 300, 200, 400],
					},
				],
			},
		],
	},
];

// DOM Elements.....
let selectorCategoryElement = document.getElementById("category");
let selectorProductElement = document.getElementById("product");
let selectorBrandElement = document.getElementById("brand");

// State.....
let selectorData = {
	selectorCategory: chartData,
	selectorProduct: [],
	selectorBrand: [],
};

// Methods.....
function createOptionElements(selector, data) {
	selector.innerHTML = "";
	data.forEach((element) => {
		let option = document.createElement("option");
		option.textContent = element.title;
		option.value = element.title;
		selector.appendChild(option);
	});
}

function setSelectorProductData(data) {
	selectorData.selectorProduct = data;

	createOptionElements(selectorProductElement, data);
	setSelectorBrandData(data[0].values);
}

function setSelectorBrandData(data) {
	selectorData.selectorBrand = data;

	createOptionElements(selectorBrandElement, data);
	setChartData(data[0].data);
}

function setChartData(data) {
	chart.series[0].setData(data);
}
