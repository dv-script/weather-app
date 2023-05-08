const KEY = '1373c896cd1746cb93b12136230805';

const fetchData = async (city) => {

	const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

	const fetchReponse = await fetch(url);
	const data = await fetchReponse.json();

	return data;
};

export default fetchData;
