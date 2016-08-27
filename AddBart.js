function createWalkingDistanceIcon(html)
{
	return L.divIcon(
		{
			iconSize: [50,25],
			html: "<div class='walking-distance-label'>" + html + "</div>",
			className: "walking-distance-icon"
		});
}

function getOffsetLocation(location, dy, dx)
{
	var earthRadius = 6378000;
	return [Number(location[0])  + (dy / earthRadius) * (180 / Math.PI), Number(location[1]) + (dx / earthRadius) * (180 / Math.PI) / Math.cos(Number(location[0]) * Math.PI/180)];
}

function createStylesheet()
{
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
}

var bartStations =
	[
		{
			"name": "12th St. Oakland City Center",
			"abbr": "12TH",
			"gtfs_latitude": "37.803664",
			"gtfs_longitude": "-122.271604",
			"address": "1245 Broadway",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94612"
		},
		{
			"name": "16th St. Mission",
			"abbr": "16TH",
			"gtfs_latitude": "37.765062",
			"gtfs_longitude": "-122.419694",
			"address": "2000 Mission Street",
			"city": "San Francisco",
			"county": "sanfrancisco",
			"state": "CA",
			"zipcode": "94110"
		},
		{
			"name": "19th St. Oakland",
			"abbr": "19TH",
			"gtfs_latitude": "37.80787",
			"gtfs_longitude": "-122.269029",
			"address": "1900 Broadway",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94612"
		},
		{
			"name": "24th St. Mission",
			"abbr": "24TH",
			"gtfs_latitude": "37.752254",
			"gtfs_longitude": "-122.418466",
			"address": "2800 Mission Street",
			"city": "San Francisco",
			"county": "sanfrancisco",
			"state": "CA",
			"zipcode": "94110"
		},
		{
			"name": "Ashby",
			"abbr": "ASHB",
			"gtfs_latitude": "37.853024",
			"gtfs_longitude": "-122.26978",
			"address": "3100 Adeline Street",
			"city": "Berkeley",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94703"
		},
		{
			"name": "Balboa Park",
			"abbr": "BALB",
			"gtfs_latitude": "37.72198087",
			"gtfs_longitude": "-122.4474142",
			"address": "401 Geneva Avenue",
			"city": "San Francisco",
			"county": "sanfrancisco",
			"state": "CA",
			"zipcode": "94112"
		},
		{
			"name": "Bay Fair",
			"abbr": "BAYF",
			"gtfs_latitude": "37.697185",
			"gtfs_longitude": "-122.126871",
			"address": "15242 Hesperian Blvd.",
			"city": "San Leandro",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94578"
		},
		{
			"name": "Castro Valley",
			"abbr": "CAST",
			"gtfs_latitude": "37.690754",
			"gtfs_longitude": "-122.075567",
			"address": "3301 Norbridge Dr.",
			"city": "Castro Valley",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94546"
		},
		{
			"name": "Civic Center/UN Plaza",
			"abbr": "CIVC",
			"gtfs_latitude": "37.779528",
			"gtfs_longitude": "-122.413756",
			"address": "1150 Market Street",
			"city": "San Francisco",
			"county": "sanfrancisco",
			"state": "CA",
			"zipcode": "94102"
		},
		{
			"name": "Coliseum",
			"abbr": "COLS",
			"gtfs_latitude": "37.754006",
			"gtfs_longitude": "-122.197273",
			"address": "7200 San Leandro St.",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94621"
		},
		{
			"name": "Colma",
			"abbr": "COLM",
			"gtfs_latitude": "37.684638",
			"gtfs_longitude": "-122.466233",
			"address": "365 D Street",
			"city": "Colma",
			"county": "sanmateo",
			"state": "CA",
			"zipcode": "94014"
		},
		{
			"name": "Concord",
			"abbr": "CONC",
			"gtfs_latitude": "37.973737",
			"gtfs_longitude": "-122.029095",
			"address": "1451 Oakland Avenue",
			"city": "Concord",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94520"
		},
		{
			"name": "Daly City",
			"abbr": "DALY",
			"gtfs_latitude": "37.70612055",
			"gtfs_longitude": "-122.4690807",
			"address": "500 John Daly Blvd.",
			"city": "Daly City",
			"county": "sanmateo",
			"state": "CA",
			"zipcode": "94014"
		},
		{
			"name": "Downtown Berkeley",
			"abbr": "DBRK",
			"gtfs_latitude": "37.869867",
			"gtfs_longitude": "-122.268045",
			"address": "2160 Shattuck Avenue",
			"city": "Berkeley",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94704"
		},
		{
			"name": "Dublin/Pleasanton",
			"abbr": "DUBL",
			"gtfs_latitude": "37.701695",
			"gtfs_longitude": "-121.900367",
			"address": "5801 Owens Dr.",
			"city": "Pleasanton",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94588"
		},
		{
			"name": "El Cerrito del Norte",
			"abbr": "DELN",
			"gtfs_latitude": "37.925655",
			"gtfs_longitude": "-122.317269",
			"address": "6400 Cutting Blvd.",
			"city": "El Cerrito",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94530"
		},
		{
			"name": "El Cerrito Plaza",
			"abbr": "PLZA",
			"gtfs_latitude": "37.9030588",
			"gtfs_longitude": "-122.2992715",
			"address": "6699 Fairmount Avenue",
			"city": "El Cerrito",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94530"
		},
		{
			"name": "Embarcadero",
			"abbr": "EMBR",
			"gtfs_latitude": "37.792976",
			"gtfs_longitude": "-122.396742",
			"address": "298 Market Street",
			"city": "San Francisco",
			"county": "sanfrancisco",
			"state": "CA",
			"zipcode": "94111"
		},
		{
			"name": "Fremont",
			"abbr": "FRMT",
			"gtfs_latitude": "37.557355",
			"gtfs_longitude": "-121.9764",
			"address": "2000 BART Way",
			"city": "Fremont",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94536"
		},
		{
			"name": "Fruitvale",
			"abbr": "FTVL",
			"gtfs_latitude": "37.774963",
			"gtfs_longitude": "-122.224274",
			"address": "3401 East 12th Street",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94601"
		},
		{
			"name": "Glen Park",
			"abbr": "GLEN",
			"gtfs_latitude": "37.732921",
			"gtfs_longitude": "-122.434092",
			"address": "2901 Diamond Street",
			"city": "San Francisco",
			"county": "sanfrancisco",
			"state": "CA",
			"zipcode": "94131"
		},
		{
			"name": "Hayward",
			"abbr": "HAYW",
			"gtfs_latitude": "37.670399",
			"gtfs_longitude": "-122.087967",
			"address": "699 'B' Street",
			"city": "Hayward",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94541"
		},
		{
			"name": "Lafayette",
			"abbr": "LAFY",
			"gtfs_latitude": "37.893394",
			"gtfs_longitude": "-122.123801",
			"address": "3601 Deer Hill Road",
			"city": "Lafayette",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94549"
		},
		{
			"name": "Lake Merritt",
			"abbr": "LAKE",
			"gtfs_latitude": "37.797484",
			"gtfs_longitude": "-122.265609",
			"address": "800 Madison Street",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94607"
		},
		{
			"name": "MacArthur",
			"abbr": "MCAR",
			"gtfs_latitude": "37.828415",
			"gtfs_longitude": "-122.267227",
			"address": "555 40th Street",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94609"
		},
		{
			"name": "Millbrae",
			"abbr": "MLBR",
			"gtfs_latitude": "37.599787",
			"gtfs_longitude": "-122.38666",
			"address": "200 North Rollins Road",
			"city": "Millbrae",
			"county": "sanmateo",
			"state": "CA",
			"zipcode": "94030"
		},
		{
			"name": "Montgomery St.",
			"abbr": "MONT",
			"gtfs_latitude": "37.789256",
			"gtfs_longitude": "-122.401407",
			"address": "598 Market Street",
			"city": "San Francisco",
			"county": "sanfrancisco",
			"state": "CA",
			"zipcode": "94104"
		},
		{
			"name": "North Berkeley",
			"abbr": "NBRK",
			"gtfs_latitude": "37.87404",
			"gtfs_longitude": "-122.283451",
			"address": "1750 Sacramento Street",
			"city": "Berkeley",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94702"
		},
		{
			"name": "North Concord/Martinez",
			"abbr": "NCON",
			"gtfs_latitude": "38.003275",
			"gtfs_longitude": "-122.024597",
			"address": "3700 Port Chicago Highway",
			"city": "Concord",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94520"
		},
		{
			"name": "Oakland Int'l Airport",
			"abbr": "OAKL",
			"gtfs_latitude": "37.71297174",
			"gtfs_longitude": "-122.21244024",
			"address": "4 Airport Drive",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94621"
		},
		{
			"name": "Orinda",
			"abbr": "ORIN",
			"gtfs_latitude": "37.87836087",
			"gtfs_longitude": "-122.1837911",
			"address": "11 Camino Pablo",
			"city": "Orinda",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94563"
		},
		{
			"name": "Pittsburg/Bay Point",
			"abbr": "PITT",
			"gtfs_latitude": "38.018914",
			"gtfs_longitude": "-121.945154",
			"address": "1700 West Leland Road",
			"city": "Pittsburg",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94565"
		},
		{
			"name": "Pleasant Hill/Contra Costa Centre",
			"abbr": "PHIL",
			"gtfs_latitude": "37.928403",
			"gtfs_longitude": "-122.056013",
			"address": "1365 Treat Blvd.",
			"city": "Walnut Creek",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94597"
		},
		{
			"name": "Powell St.",
			"abbr": "POWL",
			"gtfs_latitude": "37.784991",
			"gtfs_longitude": "-122.406857",
			"address": "899 Market Street",
			"city": "San Francisco",
			"county": "sanfrancisco",
			"state": "CA",
			"zipcode": "94102"
		},
		{
			"name": "Richmond",
			"abbr": "RICH",
			"gtfs_latitude": "37.936887",
			"gtfs_longitude": "-122.353165",
			"address": "1700 Nevin Avenue",
			"city": "Richmond",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94801"
		},
		{
			"name": "Rockridge",
			"abbr": "ROCK",
			"gtfs_latitude": "37.844601",
			"gtfs_longitude": "-122.251793",
			"address": "5660 College Avenue",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94618"
		},
		{
			"name": "San Bruno",
			"abbr": "SBRN",
			"gtfs_latitude": "37.637753",
			"gtfs_longitude": "-122.416038",
			"address": "1151 Huntington Avenue",
			"city": "San Bruno",
			"county": "sanmateo",
			"state": "CA",
			"zipcode": "94066"
		},
		{
			"name": "San Francisco Int'l Airport",
			"abbr": "SFIA",
			"gtfs_latitude": "37.616035",
			"gtfs_longitude": "-122.392612",
			"address": "International Terminal, Level 3",
			"city": "San Francisco Int'l Airport",
			"county": "sanmateo",
			"state": "CA",
			"zipcode": "94128"
		},
		{
			"name": "San Leandro",
			"abbr": "SANL",
			"gtfs_latitude": "37.72261921",
			"gtfs_longitude": "-122.1613112",
			"address": "1401 San Leandro Blvd.",
			"city": "San Leandro",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94577"
		},
		{
			"name": "South Hayward",
			"abbr": "SHAY",
			"gtfs_latitude": "37.63479954",
			"gtfs_longitude": "-122.0575506",
			"address": "28601 Dixon Street",
			"city": "Hayward",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94544"
		},
		{
			"name": "South San Francisco",
			"abbr": "SSAN",
			"gtfs_latitude": "37.664174",
			"gtfs_longitude": "-122.444116",
			"address": "1333 Mission Road",
			"city": "South San Francisco",
			"county": "sanmateo",
			"state": "CA",
			"zipcode": "94080"
		},
		{
			"name": "Union City",
			"abbr": "UCTY",
			"gtfs_latitude": "37.591208",
			"gtfs_longitude": "-122.017867",
			"address": "10 Union Square",
			"city": "Union City",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94587"
		},
		{
			"name": "Walnut Creek",
			"abbr": "WCRK",
			"gtfs_latitude": "37.905628",
			"gtfs_longitude": "-122.067423",
			"address": "200 Ygnacio Valley Road",
			"city": "Walnut Creek",
			"county": "contracosta",
			"state": "CA",
			"zipcode": "94596"
		},
		{
			"name": "West Dublin/Pleasanton",
			"abbr": "WDUB",
			"gtfs_latitude": "37.699759",
			"gtfs_longitude": "-121.928099",
			"address": "6501 Golden Gate Drive",
			"city": "Dublin",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94568"
		},
		{
			"name": "West Oakland",
			"abbr": "WOAK",
			"gtfs_latitude": "37.80467476",
			"gtfs_longitude": "-122.2945822",
			"address": "1451 7th Street",
			"city": "Oakland",
			"county": "alameda",
			"state": "CA",
			"zipcode": "94607"
		}
	];

var bartRoutes =
	[
		{
			"name": "Pittsburg/Bay Point - SFIA/Millbrae",
			"abbr": "PITT-SFIA",
			"routeID": "ROUTE 1",
			"number": "1",
			"origin": "PITT",
			"destination": "SFIA",
			"color": "#ffff33",
			"holidays": "1",
			"num_stns": "26",
			"config": {
				"station": [
					"PITT",
					"NCON",
					"CONC",
					"PHIL",
					"WCRK",
					"LAFY",
					"ORIN",
					"ROCK",
					"MCAR",
					"19TH",
					"12TH",
					"WOAK",
					"EMBR",
					"MONT",
					"POWL",
					"CIVC",
					"16TH",
					"24TH",
					"GLEN",
					"BALB",
					"DALY",
					"COLM",
					"SSAN",
					"SBRN",
					"SFIA",
					"MLBR"
				]
			}
		},
		{
			"name": "Millbrae/SFIA - Pittsburg/Bay Point",
			"abbr": "SFIA-PITT",
			"routeID": "ROUTE 2",
			"number": "2",
			"origin": "SFIA",
			"destination": "PITT",
			"color": "#ffff33",
			"holidays": "1",
			"num_stns": "26",
			"config": {
				"station": [
					"MLBR",
					"SFIA",
					"SBRN",
					"SSAN",
					"COLM",
					"DALY",
					"BALB",
					"GLEN",
					"24TH",
					"16TH",
					"CIVC",
					"POWL",
					"MONT",
					"EMBR",
					"WOAK",
					"12TH",
					"19TH",
					"MCAR",
					"ROCK",
					"ORIN",
					"LAFY",
					"WCRK",
					"PHIL",
					"CONC",
					"NCON",
					"PITT"
				]
			}
		},
		{
			"name": "Fremont - Richmond",
			"abbr": "FRMT-RICH",
			"routeID": "ROUTE 3",
			"number": "3",
			"origin": "FRMT",
			"destination": "RICH",
			"color": "#ff9933",
			"holidays": "1",
			"num_stns": "18",
			"config": {
				"station": [
					"FRMT",
					"UCTY",
					"SHAY",
					"HAYW",
					"BAYF",
					"SANL",
					"COLS",
					"FTVL",
					"LAKE",
					"12TH",
					"19TH",
					"MCAR",
					"ASHB",
					"DBRK",
					"NBRK",
					"PLZA",
					"DELN",
					"RICH"
				]
			}
		},
		{
			"name": "Richmond - Fremont",
			"abbr": "RICH-FRMT",
			"routeID": "ROUTE 4",
			"number": "4",
			"origin": "RICH",
			"destination": "FRMT",
			"color": "#ff9933",
			"holidays": "1",
			"num_stns": "18",
			"config": {
				"station": [
					"RICH",
					"DELN",
					"PLZA",
					"NBRK",
					"DBRK",
					"ASHB",
					"MCAR",
					"19TH",
					"12TH",
					"LAKE",
					"FTVL",
					"COLS",
					"SANL",
					"BAYF",
					"HAYW",
					"SHAY",
					"UCTY",
					"FRMT"
				]
			}
		},
		{
			"name": "Fremont - Daly City",
			"abbr": "FRMT-DALY",
			"routeID": "ROUTE 5",
			"number": "5",
			"origin": "FRMT",
			"destination": "DALY",
			"color": "#339933",
			"holidays": "0",
			"num_stns": "19",
			"config": {
				"station": [
					"FRMT",
					"UCTY",
					"SHAY",
					"HAYW",
					"BAYF",
					"SANL",
					"COLS",
					"FTVL",
					"LAKE",
					"WOAK",
					"EMBR",
					"MONT",
					"POWL",
					"CIVC",
					"16TH",
					"24TH",
					"GLEN",
					"BALB",
					"DALY"
				]
			}
		},
		{
			"name": "Daly City - Fremont",
			"abbr": "DALY-FRMT",
			"routeID": "ROUTE 6",
			"number": "6",
			"origin": "DALY",
			"destination": "FRMT",
			"color": "#339933",
			"holidays": "0",
			"num_stns": "19",
			"config": {
				"station": [
					"DALY",
					"BALB",
					"GLEN",
					"24TH",
					"16TH",
					"CIVC",
					"POWL",
					"MONT",
					"EMBR",
					"WOAK",
					"LAKE",
					"FTVL",
					"COLS",
					"SANL",
					"BAYF",
					"HAYW",
					"SHAY",
					"UCTY",
					"FRMT"
				]
			}
		},
		{
			"name": "Richmond - Daly City/Millbrae",
			"abbr": "RICH-MLBR",
			"routeID": "ROUTE 7",
			"number": "7",
			"origin": "RICH",
			"destination": "MLBR",
			"color": "#ff0000",
			"holidays": "0",
			"num_stns": "23",
			"config": {
				"station": [
					"RICH",
					"DELN",
					"PLZA",
					"NBRK",
					"DBRK",
					"ASHB",
					"MCAR",
					"19TH",
					"12TH",
					"WOAK",
					"EMBR",
					"MONT",
					"POWL",
					"CIVC",
					"16TH",
					"24TH",
					"GLEN",
					"BALB",
					"DALY",
					"COLM",
					"SSAN",
					"SBRN",
					"MLBR"
				]
			}
		},
		{
			"name": "Millbrae/Daly City - Richmond",
			"abbr": "MLBR-RICH",
			"routeID": "ROUTE 8",
			"number": "8",
			"origin": "MLBR",
			"destination": "RICH",
			"color": "#ff0000",
			"holidays": "0",
			"num_stns": "23",
			"config": {
				"station": [
					"MLBR",
					"SBRN",
					"SSAN",
					"COLM",
					"DALY",
					"BALB",
					"GLEN",
					"24TH",
					"16TH",
					"CIVC",
					"POWL",
					"MONT",
					"EMBR",
					"WOAK",
					"12TH",
					"19TH",
					"MCAR",
					"ASHB",
					"DBRK",
					"NBRK",
					"PLZA",
					"DELN",
					"RICH"
				]
			}
		},
		{
			"name": "Dublin/Pleasanton - Daly City",
			"abbr": "DUBL-DALY",
			"routeID": "ROUTE 11",
			"number": "11",
			"origin": "DUBL",
			"destination": "DALY",
			"color": "#0099cc",
			"holidays": "1",
			"num_stns": "17",
			"config": {
				"station": [
					"DUBL",
					"WDUB",
					"CAST",
					"BAYF",
					"SANL",
					"COLS",
					"FTVL",
					"LAKE",
					"WOAK",
					"EMBR",
					"MONT",
					"POWL",
					"CIVC",
					"16TH",
					"24TH",
					"GLEN",
					"BALB",
					"DALY"
				]
			}
		},
		{
			"name": "Daly City - Dublin/Pleasanton",
			"abbr": "DALY-DUBL",
			"routeID": "ROUTE 12",
			"number": "12",
			"origin": "DALY",
			"destination": "DUBL",
			"color": "#0099cc",
			"holidays": "1",
			"num_stns": "17",
			"config": {
				"station": [
					"DALY",
					"BALB",
					"GLEN",
					"24TH",
					"16TH",
					"CIVC",
					"POWL",
					"MONT",
					"EMBR",
					"WOAK",
					"LAKE",
					"FTVL",
					"COLS",
					"SANL",
					"BAYF",
					"CAST",
					"WDUB",
					"DUBL"
				]
			}
		},
		{
			"name": "Coliseum - Oakland Int'l Airport",
			"abbr": "COLS-OAKL",
			"routeID": "ROUTE 19",
			"number": "19",
			"origin": "COLS",
			"destination": "OAKL",
			"direction": "north",
			"color": "#d5cfa3",
			"holidays": "1",
			"num_stns": "2",
			"config": {
				"station": [
					"COLS",
					"OAKL"
				]
			}
		},
		{
			"name": "Oakland Int'l Airport - Coliseum",
			"abbr": "OAKL-COLS",
			"routeID": "ROUTE 20",
			"number": "20",
			"origin": "OAKL",
			"destination": "COLS",
			"direction": "south",
			"color": "#d5cfa3",
			"holidays": "1",
			"num_stns": "2",
			"config": {
				"station": [
					"OAKL",
					"COLS"
				]
			}
		}
	];

var muniStations =
	[
		{
			"tag": "4447",
			"title": "Duboce Ave & Church St",
			"lat": "37.7694699",
			"lon": "-122.42941",
			"stopId": "14447"
		},
		{
			"tag": "7252",
			"title": "Sunset Tunnel East Portal",
			"lat": "37.7693899",
			"lon": "-122.43369",
			"stopId": "17252"
		},
		{
			"tag": "3909",
			"title": "Carl St & Cole St",
			"lat": "37.7658599",
			"lon": "-122.4497999",
			"stopId": "13909"
		},
		{
			"tag": "3914",
			"title": "Carl St & Stanyan St",
			"lat": "37.7654999",
			"lon": "-122.45259",
			"stopId": "13914"
		},
		{
			"tag": "3912",
			"title": "Carl St & Hillway Ave",
			"lat": "37.7649999",
			"lon": "-122.45656",
			"stopId": "13912"
		},
		{
			"tag": "5118",
			"title": "Irving St & 2nd Ave",
			"lat": "37.7644399",
			"lon": "-122.45864",
			"stopId": "15118"
		},
		{
			"tag": "5119",
			"title": "Irving St & 4th Ave",
			"lat": "37.7643",
			"lon": "-122.4608199",
			"stopId": "15119"
		},
		{
			"tag": "5121",
			"title": "Irving St & 7th Ave",
			"lat": "37.76416",
			"lon": "-122.4640299",
			"stopId": "15121"
		},
		{
			"tag": "5123",
			"title": "Irving St & 9th Ave",
			"lat": "37.7641099",
			"lon": "-122.46616",
			"stopId": "15123"
		},
		{
			"tag": "5193",
			"title": "Judah St & 9th Ave",
			"lat": "37.7622299",
			"lon": "-122.46669",
			"stopId": "15193"
		},
		{
			"tag": "5195",
			"title": "Judah St & 12th Ave",
			"lat": "37.76207",
			"lon": "-122.4693199",
			"stopId": "15195"
		},
		{
			"tag": "5219",
			"title": "Judah St & Funston Ave",
			"lat": "37.7620799",
			"lon": "-122.47033",
			"stopId": "15219"
		},
		{
			"tag": "5198",
			"title": "Judah St & 16th Ave",
			"lat": "37.76191",
			"lon": "-122.4737799",
			"stopId": "15198"
		},
		{
			"tag": "5199",
			"title": "Judah St & 19th Ave",
			"lat": "37.7617399",
			"lon": "-122.47692",
			"stopId": "15199"
		},
		{
			"tag": "5202",
			"title": "Judah St & 23rd Ave",
			"lat": "37.76155",
			"lon": "-122.4811599",
			"stopId": "15202"
		},
		{
			"tag": "5203",
			"title": "Judah St & 25th Ave",
			"lat": "37.7614499",
			"lon": "-122.4833",
			"stopId": "15203"
		},
		{
			"tag": "5205",
			"title": "Judah St & 28th Ave",
			"lat": "37.7613099",
			"lon": "-122.48651",
			"stopId": "15205"
		},
		{
			"tag": "5207",
			"title": "Judah St & 31st Ave",
			"lat": "37.7611699",
			"lon": "-122.48972",
			"stopId": "15207"
		},
		{
			"tag": "5209",
			"title": "Judah St & 34th Ave",
			"lat": "37.76103",
			"lon": "-122.4929299",
			"stopId": "15209"
		},
		{
			"tag": "5224",
			"title": "Judah St & Sunset Blvd",
			"lat": "37.7609199",
			"lon": "-122.49567",
			"stopId": "15224"
		},
		{
			"tag": "5211",
			"title": "Judah St & 40th Ave",
			"lat": "37.76074",
			"lon": "-122.4993599",
			"stopId": "15211"
		},
		{
			"tag": "5213",
			"title": "Judah St & 43rd Ave",
			"lat": "37.7606",
			"lon": "-122.5025699",
			"stopId": "15213"
		},
		{
			"tag": "5215",
			"title": "Judah St & 46th Ave",
			"lat": "37.7604899",
			"lon": "-122.50583",
			"stopId": "15215"
		},
		{
			"tag": "7219",
			"title": "Judah St & La Playa St",
			"lat": "37.7603499",
			"lon": "-122.50868",
			"stopId": "17219"
		},
		{
			"tag": "5240",
			"title": "King St & 4th St",
			"lat": "37.7762699",
			"lon": "-122.39408",
			"stopId": "15240"
		},
		{
			"tag": "5237",
			"title": "King St & 2nd St",
			"lat": "37.7796199",
			"lon": "-122.38982",
			"stopId": "15237"
		},
		{
			"tag": "7145",
			"title": "The Embarcadero & Brannan St",
			"lat": "37.7846299",
			"lon": "-122.38798",
			"stopId": "17145"
		},
		{
			"tag": "4510",
			"title": "Embarcadero Folsom St",
			"lat": "37.7907499",
			"lon": "-122.38984",
			"stopId": "14510"
		},
		{
			"tag": "7217",
			"title": "Embarcadero Station Outbound",
			"lat": "37.7932299",
			"lon": "-122.39654",
			"stopId": "17217"
		},
		{
			"tag": "6994",
			"title": "Montgomery Station Outbound",
			"lat": "37.78879",
			"lon": "-122.4021299",
			"stopId": "16994"
		},
		{
			"tag": "6995",
			"title": "Powell Station Outbound",
			"lat": "37.7843",
			"lon": "-122.4078199",
			"stopId": "16995"
		},
		{
			"tag": "6997",
			"title": "Civic Center Station Outbound",
			"lat": "37.7786799",
			"lon": "-122.41499",
			"stopId": "16997"
		},
		{
			"tag": "6996",
			"title": "Van Ness Station OB",
			"lat": "37.7752299",
			"lon": "-122.41934",
			"stopId": "16996"
		},
		{
			"tag": "5223",
			"title": "Judah St & La Playa St",
			"lat": "37.7602999",
			"lon": "-122.50818",
			"stopId": "15223"
		},
		{
			"tag": "5216",
			"title": "Judah St & 46th Ave",
			"lat": "37.7603899",
			"lon": "-122.50606",
			"stopId": "15216"
		},
		{
			"tag": "5214",
			"title": "Judah St & 43rd Ave",
			"lat": "37.7605199",
			"lon": "-122.50284",
			"stopId": "15214"
		},
		{
			"tag": "5212",
			"title": "Judah St & 40th Ave",
			"lat": "37.76068",
			"lon": "-122.4991499",
			"stopId": "15212"
		},
		{
			"tag": "5225",
			"title": "Judah St & Sunset Blvd",
			"lat": "37.7608499",
			"lon": "-122.4958",
			"stopId": "15225"
		},
		{
			"tag": "5210",
			"title": "Judah St & 34th Ave",
			"lat": "37.7609599",
			"lon": "-122.4932",
			"stopId": "15210"
		},
		{
			"tag": "5208",
			"title": "Judah St & 31st Ave",
			"lat": "37.7611099",
			"lon": "-122.4895",
			"stopId": "15208"
		},
		{
			"tag": "5206",
			"title": "Judah St & 28th Ave",
			"lat": "37.76123",
			"lon": "-122.4867599",
			"stopId": "15206"
		},
		{
			"tag": "5204",
			"title": "Judah St & 25th Ave",
			"lat": "37.76137",
			"lon": "-122.4835599",
			"stopId": "15204"
		},
		{
			"tag": "5201",
			"title": "Judah St & 22nd Ave",
			"lat": "37.7615299",
			"lon": "-122.47985",
			"stopId": "15201"
		},
		{
			"tag": "5200",
			"title": "Judah St & 19th Ave",
			"lat": "37.7616599",
			"lon": "-122.47719",
			"stopId": "15200"
		},
		{
			"tag": "5197",
			"title": "Judah St & 15th Ave",
			"lat": "37.7618499",
			"lon": "-122.47278",
			"stopId": "15197"
		},
		{
			"tag": "5220",
			"title": "Judah St & Funston Ave",
			"lat": "37.76195",
			"lon": "-122.4705699",
			"stopId": "15220"
		},
		{
			"tag": "5196",
			"title": "Judah St & 12th Ave",
			"lat": "37.76199",
			"lon": "-122.4695299",
			"stopId": "15196"
		},
		{
			"tag": "5194",
			"title": "Judah St & 9th Ave",
			"lat": "37.7621399",
			"lon": "-122.46631",
			"stopId": "15194"
		},
		{
			"tag": "3212",
			"title": "9th Ave & Irving St",
			"lat": "37.76391",
			"lon": "-122.46624",
			"stopId": "13212"
		},
		{
			"tag": "5122",
			"title": "Irving St & 7th Ave",
			"lat": "37.7640899",
			"lon": "-122.46428",
			"stopId": "15122"
		},
		{
			"tag": "5120",
			"title": "Irving St & 4th Ave",
			"lat": "37.76423",
			"lon": "-122.4610599",
			"stopId": "15120"
		},
		{
			"tag": "5124",
			"title": "Irving St & Arguello Blvd",
			"lat": "37.7643699",
			"lon": "-122.45802",
			"stopId": "15124"
		},
		{
			"tag": "3913",
			"title": "Carl St & Hillway Ave",
			"lat": "37.7649299",
			"lon": "-122.45651",
			"stopId": "13913"
		},
		{
			"tag": "3915",
			"title": "Carl St & Stanyan St",
			"lat": "37.7653699",
			"lon": "-122.45293",
			"stopId": "13915"
		},
		{
			"tag": "3911",
			"title": "Carl St & Cole St",
			"lat": "37.7657499",
			"lon": "-122.45013",
			"stopId": "13911"
		},
		{
			"tag": "7318",
			"title": "Sunset Tunnel East Portal",
			"lat": "37.76913",
			"lon": "-122.43308",
			"stopId": "17318"
		},
		{
			"tag": "4448",
			"title": "Duboce Ave & Church St",
			"lat": "37.7694099",
			"lon": "-122.4294",
			"stopId": "14448"
		},
		{
			"tag": "5419",
			"title": "Van Ness Station Inbound",
			"lat": "37.7751299",
			"lon": "-122.41925",
			"stopId": "15419"
		},
		{
			"tag": "5727",
			"title": "Civic Center Station Inbound",
			"lat": "37.7785399",
			"lon": "-122.41481",
			"stopId": "15727"
		},
		{
			"tag": "5417",
			"title": "Powell Station Inbound",
			"lat": "37.7841999",
			"lon": "-122.40769",
			"stopId": "15417"
		},
		{
			"tag": "5731",
			"title": "Montgomery Station Inbound",
			"lat": "37.7886999",
			"lon": "-122.40192",
			"stopId": "15731"
		},
		{
			"tag": "6992",
			"title": "Embarcadero Station Inbound",
			"lat": "37.7931299",
			"lon": "-122.39643",
			"stopId": "16992"
		},
		{
			"tag": "4509",
			"title": "The Embarcadero & Folsom St",
			"lat": "37.7904799",
			"lon": "-122.38969",
			"stopId": "14509"
		},
		{
			"tag": "4506",
			"title": "The Embarcadero & Brannan St",
			"lat": "37.7843599",
			"lon": "-122.38814",
			"stopId": "14506"
		},
		{
			"tag": "5234",
			"title": "King St & 2nd St",
			"lat": "37.77972",
			"lon": "-122.38987",
			"stopId": "15234"
		},
		{
			"tag": "5239",
			"title": "King St & 4th St",
			"lat": "37.7762699",
			"lon": "-122.39417",
			"stopId": "15239"
		},


		{
			"tag": "7058",
			"title": "West Portal Ave & Ulloa St",
			"lat": "37.7408899",
			"lon": "-122.46585",
			"stopId": "17058"
		},
		{
			"tag": "6736",
			"title": "Ulloa St & Forest Side Ave",
			"lat": "37.7415399",
			"lon": "-122.46847",
			"stopId": "16736"
		},
		{
			"tag": "3268",
			"title": "15th Ave & Ulloa St",
			"lat": "37.7415299",
			"lon": "-122.47119",
			"stopId": "13268"
		},
		{
			"tag": "3266",
			"title": "15th Ave & Taraval St",
			"lat": "37.7431199",
			"lon": "-122.4712999",
			"stopId": "13266"
		},
		{
			"tag": "6614",
			"title": "Taraval St & 17th Ave",
			"lat": "37.7432",
			"lon": "-122.4734299",
			"stopId": "16614"
		},
		{
			"tag": "6616",
			"title": "Taraval St & 19th Ave",
			"lat": "37.7431099",
			"lon": "-122.47544",
			"stopId": "16616"
		},
		{
			"tag": "6618",
			"title": "Taraval St & 22nd Ave",
			"lat": "37.7429699",
			"lon": "-122.47879",
			"stopId": "16618"
		},
		{
			"tag": "6620",
			"title": "Taraval St & 23rd Ave",
			"lat": "37.74287",
			"lon": "-122.4804499",
			"stopId": "16620"
		},
		{
			"tag": "6622",
			"title": "Taraval St & 26th Ave",
			"lat": "37.74278",
			"lon": "-122.4830699",
			"stopId": "16622"
		},
		{
			"tag": "6624",
			"title": "Taraval St & 28th Ave",
			"lat": "37.7426799",
			"lon": "-122.48521",
			"stopId": "16624"
		},
		{
			"tag": "6626",
			"title": "Taraval St & 30th Ave",
			"lat": "37.74259",
			"lon": "-122.4873399",
			"stopId": "16626"
		},
		{
			"tag": "6628",
			"title": "Taraval St & 32nd Ave",
			"lat": "37.7424899",
			"lon": "-122.48949",
			"stopId": "16628"
		},
		{
			"tag": "6630",
			"title": "Taraval St & 35th Ave",
			"lat": "37.74235",
			"lon": "-122.4927099",
			"stopId": "16630"
		},
		{
			"tag": "6640",
			"title": "Taraval St & Sunset Blvd",
			"lat": "37.7422899",
			"lon": "-122.49436",
			"stopId": "16640"
		},
		{
			"tag": "6632",
			"title": "Taraval St & 40th Ave",
			"lat": "37.7421199",
			"lon": "-122.49805",
			"stopId": "16632"
		},
		{
			"tag": "6634",
			"title": "Taraval St & 42nd Ave",
			"lat": "37.74202",
			"lon": "-122.5001999",
			"stopId": "16634"
		},
		{
			"tag": "6636",
			"title": "Taraval St & 44th Ave",
			"lat": "37.74192",
			"lon": "-122.5023499",
			"stopId": "16636"
		},
		{
			"tag": "6638",
			"title": "Taraval St & 46th Ave",
			"lat": "37.74182",
			"lon": "-122.5044899",
			"stopId": "16638"
		},
		{
			"tag": "3600",
			"title": "46th Ave & Ulloa St",
			"lat": "37.74",
			"lon": "-122.50458",
			"stopId": "13600"
		},
		{
			"tag": "3602",
			"title": "46th Ave & Vicente St",
			"lat": "37.7381399",
			"lon": "-122.5044399",
			"stopId": "13602"
		},
		{
			"tag": "36932",
			"title": "Wawona St & 46th Ave",
			"lat": "37.7361299",
			"lon": "-122.50435",
			"stopId": "136932"
		},
		{
			"tag": "7217",
			"title": "Embarcadero Station Outbound",
			"lat": "37.7932299",
			"lon": "-122.39654",
			"stopId": "17217"
		},
		{
			"tag": "6994",
			"title": "Montgomery Station Outbound",
			"lat": "37.78879",
			"lon": "-122.4021299",
			"stopId": "16994"
		},
		{
			"tag": "6995",
			"title": "Powell Station Outbound",
			"lat": "37.7843",
			"lon": "-122.4078199",
			"stopId": "16995"
		},
		{
			"tag": "6997",
			"title": "Civic Center Station Outbound",
			"lat": "37.7786799",
			"lon": "-122.41499",
			"stopId": "16997"
		},
		{
			"tag": "6996",
			"title": "Van Ness Station OB",
			"lat": "37.7752299",
			"lon": "-122.41934",
			"stopId": "16996"
		},
		{
			"tag": "6998",
			"title": "Church St Station Outbound",
			"lat": "37.7673299",
			"lon": "-122.42932",
			"stopId": "16998"
		},
		{
			"tag": "6991",
			"title": "Castro Station Outbound",
			"lat": "37.7626799",
			"lon": "-122.43529",
			"stopId": "16991"
		},
		{
			"tag": "6993",
			"title": "Forest Hill Station Outbound",
			"lat": "37.7481699",
			"lon": "-122.45919",
			"stopId": "16993"
		},
		{
			"tag": "6739",
			"title": "West Portal Station",
			"lat": "37.7409499",
			"lon": "-122.4658",
			"stopId": "16739"
		},
		{
			"tag": "6932",
			"title": "Wawona St & 46th Ave",
			"lat": "37.7361299",
			"lon": "-122.50435",
			"stopId": "16932"
		},
		{
			"tag": "3603",
			"title": "46th Ave & Vicente St",
			"lat": "37.73797",
			"lon": "-122.50427",
			"stopId": "13603"
		},
		{
			"tag": "3601",
			"title": "46th Ave & Ulloa St",
			"lat": "37.73983",
			"lon": "-122.50441",
			"stopId": "13601"
		},
		{
			"tag": "3599",
			"title": "46th Ave & Taraval St",
			"lat": "37.7416899",
			"lon": "-122.5045299",
			"stopId": "13599"
		},
		{
			"tag": "6637",
			"title": "Taraval St & 44th Ave",
			"lat": "37.7418",
			"lon": "-122.5026099",
			"stopId": "16637"
		},
		{
			"tag": "6635",
			"title": "Taraval St & 42nd Ave",
			"lat": "37.7419",
			"lon": "-122.5004599",
			"stopId": "16635"
		},
		{
			"tag": "6633",
			"title": "Taraval St & 40th Ave",
			"lat": "37.7419899",
			"lon": "-122.49832",
			"stopId": "16633"
		},
		{
			"tag": "6641",
			"title": "Taraval St & Sunset Blvd",
			"lat": "37.7421899",
			"lon": "-122.49451",
			"stopId": "16641"
		},
		{
			"tag": "6631",
			"title": "Taraval St & 35th Ave",
			"lat": "37.7422399",
			"lon": "-122.49296",
			"stopId": "16631"
		},
		{
			"tag": "6629",
			"title": "Taraval St & 32nd Ave",
			"lat": "37.74236",
			"lon": "-122.4897499",
			"stopId": "16629"
		},
		{
			"tag": "6627",
			"title": "Taraval St & 30th Ave",
			"lat": "37.7424599",
			"lon": "-122.48761",
			"stopId": "16627"
		},
		{
			"tag": "6625",
			"title": "Taraval St & 28th Ave",
			"lat": "37.7425399",
			"lon": "-122.48547",
			"stopId": "16625"
		},
		{
			"tag": "6623",
			"title": "Taraval St & 26th Ave",
			"lat": "37.7426499",
			"lon": "-122.48332",
			"stopId": "16623"
		},
		{
			"tag": "6621",
			"title": "Taraval St & 24th Ave",
			"lat": "37.7427399",
			"lon": "-122.4812",
			"stopId": "16621"
		},
		{
			"tag": "6619",
			"title": "Taraval St & 22nd Ave",
			"lat": "37.7428899",
			"lon": "-122.47843",
			"stopId": "16619"
		},
		{
			"tag": "6617",
			"title": "Taraval St & 19th Ave",
			"lat": "37.7429699",
			"lon": "-122.47582",
			"stopId": "16617"
		},
		{
			"tag": "6615",
			"title": "Taraval St & 17th Ave",
			"lat": "37.7430699",
			"lon": "-122.4737",
			"stopId": "16615"
		},
		{
			"tag": "3267",
			"title": "15th Ave & Taraval St",
			"lat": "37.7430699",
			"lon": "-122.4713999",
			"stopId": "13267"
		},
		{
			"tag": "3269",
			"title": "15th Ave & Ulloa St",
			"lat": "37.74148",
			"lon": "-122.4713",
			"stopId": "13269"
		},
		{
			"tag": "6737",
			"title": "Ulloa St & Forest Side Ave",
			"lat": "37.74144",
			"lon": "-122.4688",
			"stopId": "16737"
		},
		{
			"tag": "6740",
			"title": "West Portal Station",
			"lat": "37.7409499",
			"lon": "-122.46575",
			"stopId": "16740"
		},
		{
			"tag": "5730",
			"title": "Forest Hill Station Inbound",
			"lat": "37.74835",
			"lon": "-122.4586199",
			"stopId": "15730"
		},
		{
			"tag": "5728",
			"title": "Castro Station Inbound",
			"lat": "37.7626199",
			"lon": "-122.43523",
			"stopId": "15728"
		},
		{
			"tag": "5726",
			"title": "Church St Station Inbound",
			"lat": "37.76719",
			"lon": "-122.4291699",
			"stopId": "15726"
		},
		{
			"tag": "5419",
			"title": "Van Ness Station Inbound",
			"lat": "37.7751299",
			"lon": "-122.41925",
			"stopId": "15419"
		},
		{
			"tag": "5727",
			"title": "Civic Center Station Inbound",
			"lat": "37.7785399",
			"lon": "-122.41481",
			"stopId": "15727"
		},
		{
			"tag": "5417",
			"title": "Powell Station Inbound",
			"lat": "37.7841999",
			"lon": "-122.40769",
			"stopId": "15417"
		},
		{
			"tag": "5731",
			"title": "Montgomery Station Inbound",
			"lat": "37.7886999",
			"lon": "-122.40192",
			"stopId": "15731"
		},
		{
			"tag": "6992",
			"title": "Embarcadero Station Inbound",
			"lat": "37.7931299",
			"lon": "-122.39643",
			"stopId": "16992"
		},

		{
			"tag": "7058",
			"title": "West Portal Ave & Ulloa St",
			"lat": "37.7408899",
			"lon": "-122.46585",
			"stopId": "17058"
		},
		{
			"tag": "7125",
			"title": "West Portal Ave & 14th Ave",
			"lat": "37.7380599",
			"lon": "-122.46898",
			"stopId": "17125"
		},
		{
			"tag": "6503",
			"title": "Saint Francis Circle",
			"lat": "37.7348099",
			"lon": "-122.47162",
			"stopId": "16503"
		},
		{
			"tag": "6223",
			"title": "Ocean Ave & Right Of Way",
			"lat": "37.7320199",
			"lon": "-122.47372",
			"stopId": "16223"
		},
		{
			"tag": "6219",
			"title": "Right Of Way & Eucalyptus Dr",
			"lat": "37.73119",
			"lon": "-122.4743499",
			"stopId": "16219"
		},
		{
			"tag": "3403",
			"title": "19th Ave & Winston Dr",
			"lat": "37.7270199",
			"lon": "-122.47494",
			"stopId": "13403"
		},
		{
			"tag": "3358",
			"title": "19th Ave & Holloway Ave",
			"lat": "37.7210699",
			"lon": "-122.47523",
			"stopId": "13358"
		},
		{
			"tag": "3376",
			"title": "19th Ave & N Randolph St",
			"lat": "37.7162",
			"lon": "-122.47167",
			"stopId": "13376"
		},
		{
			"tag": "3387",
			"title": "19th Ave & Randolph St",
			"lat": "37.7144399",
			"lon": "-122.4699999",
			"stopId": "13387"
		},
		{
			"tag": "6173",
			"title": "Randolph St & Arch St",
			"lat": "37.7142",
			"lon": "-122.46722",
			"stopId": "16173"
		},
		{
			"tag": "6175",
			"title": "Randolph St & Bright St",
			"lat": "37.7142399",
			"lon": "-122.46361",
			"stopId": "16175"
		},
		{
			"tag": "5825",
			"title": "Orizaba Ave & Broad St",
			"lat": "37.7133299",
			"lon": "-122.4625799",
			"stopId": "15825"
		},
		{
			"tag": "3716",
			"title": "Broad St & Capitol Ave",
			"lat": "37.71315",
			"lon": "-122.4591599",
			"stopId": "13716"
		},
		{
			"tag": "3719",
			"title": "Broad St & Plymouth Ave",
			"lat": "37.7131599",
			"lon": "-122.45618",
			"stopId": "13719"
		},
		{
			"tag": "6259",
			"title": "San Jose Ave & Farallones St",
			"lat": "37.7140699",
			"lon": "-122.45208",
			"stopId": "16259"
		},
		{
			"tag": "6266",
			"title": "San Jose Ave & Lakeview Ave",
			"lat": "37.71608",
			"lon": "-122.4504299",
			"stopId": "16266"
		},
		{
			"tag": "6268",
			"title": "San Jose Ave & Mt Vernon Ave",
			"lat": "37.71828",
			"lon": "-122.4485899",
			"stopId": "16268"
		},
		{
			"tag": "6269",
			"title": "San Jose Ave & Niagara Ave",
			"lat": "37.7199799",
			"lon": "-122.4472",
			"stopId": "16269"
		},
		{
			"tag": "7217",
			"title": "Embarcadero Station Outbound",
			"lat": "37.7932299",
			"lon": "-122.39654",
			"stopId": "17217"
		},
		{
			"tag": "6994",
			"title": "Montgomery Station Outbound",
			"lat": "37.78879",
			"lon": "-122.4021299",
			"stopId": "16994"
		},
		{
			"tag": "6995",
			"title": "Powell Station Outbound",
			"lat": "37.7843",
			"lon": "-122.4078199",
			"stopId": "16995"
		},
		{
			"tag": "6997",
			"title": "Civic Center Station Outbound",
			"lat": "37.7786799",
			"lon": "-122.41499",
			"stopId": "16997"
		},
		{
			"tag": "6996",
			"title": "Van Ness Station OB",
			"lat": "37.7752299",
			"lon": "-122.41934",
			"stopId": "16996"
		},
		{
			"tag": "6998",
			"title": "Church St Station Outbound",
			"lat": "37.7673299",
			"lon": "-122.42932",
			"stopId": "16998"
		},
		{
			"tag": "6991",
			"title": "Castro Station Outbound",
			"lat": "37.7626799",
			"lon": "-122.43529",
			"stopId": "16991"
		},
		{
			"tag": "6993",
			"title": "Forest Hill Station Outbound",
			"lat": "37.7481699",
			"lon": "-122.45919",
			"stopId": "16993"
		},
		{
			"tag": "6739",
			"title": "West Portal Station",
			"lat": "37.7409499",
			"lon": "-122.4658",
			"stopId": "16739"
		},
		{
			"tag": "6262",
			"title": "San Jose Ave & Geneva Ave",
			"lat": "37.7204599",
			"lon": "-122.44689",
			"stopId": "16262"
		},
		{
			"tag": "7111",
			"title": "San Jose Ave & Mt Vernon Ave",
			"lat": "37.71847",
			"lon": "-122.4486399",
			"stopId": "17111"
		},
		{
			"tag": "6265",
			"title": "San Jose Ave & Lakeview Ave",
			"lat": "37.7162599",
			"lon": "-122.45033",
			"stopId": "16265"
		},
		{
			"tag": "6257",
			"title": "San Jose Ave & Farallones St",
			"lat": "37.7141499",
			"lon": "-122.45215",
			"stopId": "16257"
		},
		{
			"tag": "3718",
			"title": "Broad St & Plymouth Ave",
			"lat": "37.7132199",
			"lon": "-122.45593",
			"stopId": "13718"
		},
		{
			"tag": "3715",
			"title": "Broad St & Capitol Ave",
			"lat": "37.7131899",
			"lon": "-122.45892",
			"stopId": "13715"
		},
		{
			"tag": "3717",
			"title": "Broad St & Orizaba Ave",
			"lat": "37.71318",
			"lon": "-122.4623299",
			"stopId": "13717"
		},
		{
			"tag": "6174",
			"title": "Randolph St & Bright St",
			"lat": "37.7143499",
			"lon": "-122.4633899",
			"stopId": "16174"
		},
		{
			"tag": "6172",
			"title": "Randolph St & Arch St",
			"lat": "37.71434",
			"lon": "-122.4669799",
			"stopId": "16172"
		},
		{
			"tag": "3385",
			"title": "19th Ave & Randolph St",
			"lat": "37.71428",
			"lon": "-122.46962",
			"stopId": "13385"
		},
		{
			"tag": "3361",
			"title": "19th Ave & Junipero Serra Blvd",
			"lat": "37.7168899",
			"lon": "-122.4722699",
			"stopId": "13361"
		},
		{
			"tag": "7065",
			"title": "19th Ave & Holloway Ave",
			"lat": "37.7212399",
			"lon": "-122.4751",
			"stopId": "17065"
		},
		{
			"tag": "7449",
			"title": "19th Ave & Winston Dr",
			"lat": "37.7272",
			"lon": "-122.4748499",
			"stopId": "17449"
		},
		{
			"tag": "6220",
			"title": "Right Of Way & Eucalyptus Dr",
			"lat": "37.7309899",
			"lon": "-122.47437",
			"stopId": "16220"
		},
		{
			"tag": "6224",
			"title": "Ocean Ave & Right Of Way",
			"lat": "37.7318099",
			"lon": "-122.47381",
			"stopId": "16224"
		},
		{
			"tag": "7109",
			"title": "Saint Francis Circle",
			"lat": "37.7348299",
			"lon": "-122.47145",
			"stopId": "17109"
		},
		{
			"tag": "6898",
			"title": "West Portal Ave & 14th Ave",
			"lat": "37.73786",
			"lon": "-122.4690399",
			"stopId": "16898"
		},


		{
			"tag": "7354",
			"title": "3rd St & 23rd St",
			"lat": "37.7554099",
			"lon": "-122.388",
			"stopId": "17354"
		},
		{
			"tag": "7355",
			"title": "3rd St & 20th St",
			"lat": "37.7605199",
			"lon": "-122.38856",
			"stopId": "17355"
		},
		{
			"tag": "7356",
			"title": "3rd St & Mariposa OB (Ucsf Medical Center)",
			"lat": "37.7643899",
			"lon": "-122.3888499",
			"stopId": "17356"
		},
		{
			"tag": "7357",
			"title": "3rd St & Gene Friend Way Ucsf Mission Bay",
			"lat": "37.76905",
			"lon": "-122.38931",
			"stopId": "17357"
		},
		{
			"tag": "7358",
			"title": "3rd St & Mission Rock St",
			"lat": "37.7729899",
			"lon": "-122.3897199",
			"stopId": "17358"
		},
		{
			"tag": "5240",
			"title": "King St & 4th St",
			"lat": "37.77627",
			"lon": "-122.3940799",
			"stopId": "15240"
		},
		{
			"tag": "7166",
			"title": "4th Street & King Street",
			"lat": "37.7762799",
			"lon": "-122.39386",
			"stopId": "17166"
		},
		{
			"tag": "5237",
			"title": "King St & 2nd St",
			"lat": "37.7796199",
			"lon": "-122.38982",
			"stopId": "15237"
		},
		{
			"tag": "7145",
			"title": "The Embarcadero & Brannan St",
			"lat": "37.7846299",
			"lon": "-122.38798",
			"stopId": "17145"
		},
		{
			"tag": "4510",
			"title": "Embarcadero Folsom St",
			"lat": "37.7907499",
			"lon": "-122.3898399",
			"stopId": "14510"
		},
		{
			"tag": "7217",
			"title": "Embarcadero Station Outbound",
			"lat": "37.7932299",
			"lon": "-122.39654",
			"stopId": "17217"
		},
		{
			"tag": "7398",
			"title": "Bay Shore Blvd & Sunnydale Ave.",
			"lat": "37.7089399",
			"lon": "-122.40504",
			"stopId": "17398"
		},
		{
			"tag": "7399",
			"title": "Bayshore & Arleta/Blanken",
			"lat": "37.71223",
			"lon": "-122.4023399",
			"stopId": "17399"
		},
		{
			"tag": "7400",
			"title": "3rd St & Le Conte Ave",
			"lat": "37.7188099",
			"lon": "-122.39747",
			"stopId": "17400"
		},
		{
			"tag": "7347",
			"title": "3rd St & Gilman Ave",
			"lat": "37.7224499",
			"lon": "-122.39561",
			"stopId": "17347"
		},
		{
			"tag": "7343",
			"title": "3rd St & Carroll Ave",
			"lat": "37.72549",
			"lon": "-122.3942199",
			"stopId": "17343"
		},
		{
			"tag": "7345",
			"title": "3rd St & Van Dyke Ave",
			"lat": "37.72929",
			"lon": "-122.3925999",
			"stopId": "17345"
		},
		{
			"tag": "7401",
			"title": "3rd St & Revere/Shafter",
			"lat": "37.7322618",
			"lon": "-122.3915094",
			"stopId": "17401"
		},
		{
			"tag": "7402",
			"title": "3rd St & Oakdale/Palou",
			"lat": "37.7343599",
			"lon": "-122.39084",
			"stopId": "17402"
		},
		{
			"tag": "7403",
			"title": "3rd St & Kirkwood/La Salle",
			"lat": "37.7376399",
			"lon": "-122.38969",
			"stopId": "17403"
		},
		{
			"tag": "7404",
			"title": "3rd St & Hudson/Innes Ave",
			"lat": "37.7399199",
			"lon": "-122.38888",
			"stopId": "17404"
		},
		{
			"tag": "7352",
			"title": "3rd St & Evans Ave",
			"lat": "37.74273",
			"lon": "-122.3879199",
			"stopId": "17352"
		},
		{
			"tag": "7353",
			"title": "3rd St & Marin St",
			"lat": "37.7489999",
			"lon": "-122.38744",
			"stopId": "17353"
		},
		{
			"tag": "7058",
			"title": "West Portal Ave & Ulloa St",
			"lat": "37.7408899",
			"lon": "-122.46585",
			"stopId": "17058"
		},
		{
			"tag": "7125",
			"title": "West Portal Ave & 14th Ave",
			"lat": "37.7380599",
			"lon": "-122.46898",
			"stopId": "17125"
		},
		{
			"tag": "6503",
			"title": "Saint Francis Circle",
			"lat": "37.7348099",
			"lon": "-122.47162",
			"stopId": "16503"
		},
		{
			"tag": "7114",
			"title": "Junipero Serra Blvd & Ocean Ave",
			"lat": "37.7312699",
			"lon": "-122.4718199",
			"stopId": "17114"
		},
		{
			"tag": "5807",
			"title": "Ocean Ave & San Leandro Way",
			"lat": "37.7299499",
			"lon": "-122.4694699",
			"stopId": "15807"
		},
		{
			"tag": "5780",
			"title": "Ocean Ave & Aptos Ave",
			"lat": "37.7283799",
			"lon": "-122.4678699",
			"stopId": "15780"
		},
		{
			"tag": "5786",
			"title": "Ocean Ave & Cerritos Ave",
			"lat": "37.72725",
			"lon": "-122.46676",
			"stopId": "15786"
		},
		{
			"tag": "5808",
			"title": "Ocean Ave & Victoria St",
			"lat": "37.7260299",
			"lon": "-122.4643399",
			"stopId": "15808"
		},
		{
			"tag": "5793",
			"title": "Ocean Ave & Jules Ave",
			"lat": "37.72496",
			"lon": "-122.46139",
			"stopId": "15793"
		},
		{
			"tag": "5798",
			"title": "Ocean Ave & Miramar Ave",
			"lat": "37.7242599",
			"lon": "-122.4583099",
			"stopId": "15798"
		},
		{
			"tag": "5795",
			"title": "Ocean Ave & Lee St",
			"lat": "37.72345",
			"lon": "-122.45422",
			"stopId": "15795"
		},
		{
			"tag": "5785",
			"title": "City College Pedestrian Bridge",
			"lat": "37.72295",
			"lon": "-122.4508699",
			"stopId": "15785"
		},
		{
			"tag": "5418",
			"title": "Metro Terminal",
			"lat": "37.7209899",
			"lon": "-122.44713",
			"stopId": "15418"
		},
		{
			"tag": "6994",
			"title": "Montgomery Station Outbound",
			"lat": "37.78879",
			"lon": "-122.4021299",
			"stopId": "16994"
		},
		{
			"tag": "6995",
			"title": "Powell Station Outbound",
			"lat": "37.7843",
			"lon": "-122.4078199",
			"stopId": "16995"
		},
		{
			"tag": "6997",
			"title": "Civic Center Station Outbound",
			"lat": "37.7786799",
			"lon": "-122.41499",
			"stopId": "16997"
		},
		{
			"tag": "6996",
			"title": "Van Ness Station OB",
			"lat": "37.7752299",
			"lon": "-122.41934",
			"stopId": "16996"
		},
		{
			"tag": "6998",
			"title": "Church St Station Outbound",
			"lat": "37.7673299",
			"lon": "-122.42932",
			"stopId": "16998"
		},
		{
			"tag": "6991",
			"title": "Castro Station Outbound",
			"lat": "37.7626799",
			"lon": "-122.43529",
			"stopId": "16991"
		},
		{
			"tag": "6993",
			"title": "Forest Hill Station Outbound",
			"lat": "37.7481699",
			"lon": "-122.45919",
			"stopId": "16993"
		},
		{
			"tag": "6739",
			"title": "West Portal Station",
			"lat": "37.7409499",
			"lon": "-122.4658",
			"stopId": "16739"
		},
		{
			"tag": "37058",
			"title": "West Portal Ave & Ulloa St",
			"lat": "37.7408899",
			"lon": "-122.46585",
			"stopId": "137058"
		},
		{
			"tag": "17058",
			"title": "West Portal Ave & Ulloa St",
			"lat": "37.7408899",
			"lon": "-122.46585",
			"stopId": "117058"
		},
		{
			"tag": "6740",
			"title": "West Portal Station",
			"lat": "37.7409499",
			"lon": "-122.46575",
			"stopId": "16740"
		},
		{
			"tag": "5730",
			"title": "Forest Hill Station Inbound",
			"lat": "37.74835",
			"lon": "-122.4586199",
			"stopId": "15730"
		},
		{
			"tag": "5728",
			"title": "Castro Station Inbound",
			"lat": "37.7626199",
			"lon": "-122.43523",
			"stopId": "15728"
		},
		{
			"tag": "5726",
			"title": "Church St Station Inbound",
			"lat": "37.76719",
			"lon": "-122.4291699",
			"stopId": "15726"
		},
		{
			"tag": "5419",
			"title": "Van Ness Station Inbound",
			"lat": "37.7751299",
			"lon": "-122.41925",
			"stopId": "15419"
		},
		{
			"tag": "5727",
			"title": "Civic Center Station Inbound",
			"lat": "37.7785399",
			"lon": "-122.41481",
			"stopId": "15727"
		},
		{
			"tag": "5417",
			"title": "Powell Station Inbound",
			"lat": "37.7841999",
			"lon": "-122.40769",
			"stopId": "15417"
		},
		{
			"tag": "5731",
			"title": "Montgomery Station Inbound",
			"lat": "37.7886999",
			"lon": "-122.40192",
			"stopId": "15731"
		},
		{
			"tag": "6992",
			"title": "Embarcadero Station Inbound",
			"lat": "37.7931299",
			"lon": "-122.39643",
			"stopId": "16992"
		},
		{
			"tag": "7778",
			"title": "San Jose & Geneva",
			"lat": "37.7212399",
			"lon": "-122.44622",
			"stopId": "17778"
		},
		{
			"tag": "5784",
			"title": "City College Pedestrian Bridge",
			"lat": "37.7230399",
			"lon": "-122.45145",
			"stopId": "15784"
		},
		{
			"tag": "5794",
			"title": "Ocean Ave & Lee St",
			"lat": "37.72346",
			"lon": "-122.454",
			"stopId": "15794"
		},
		{
			"tag": "5797",
			"title": "Ocean Ave & Miramar Ave",
			"lat": "37.7243899",
			"lon": "-122.4580799",
			"stopId": "15797"
		},
		{
			"tag": "5787",
			"title": "Ocean Ave & Dorado Ter",
			"lat": "37.7249599",
			"lon": "-122.46106",
			"stopId": "15787"
		},
		{
			"tag": "5788",
			"title": "Ocean Ave & Fairfield Way",
			"lat": "37.72601",
			"lon": "-122.46407",
			"stopId": "15788"
		},
		{
			"tag": "5809",
			"title": "Ocean Ave & Westgate Dr",
			"lat": "37.7272",
			"lon": "-122.46648",
			"stopId": "15809"
		},
		{
			"tag": "5779",
			"title": "Ocean Ave & Aptos Ave",
			"lat": "37.7282899",
			"lon": "-122.4675599",
			"stopId": "15779"
		},
		{
			"tag": "5806",
			"title": "Ocean Ave & San Leandro Way",
			"lat": "37.7299899",
			"lon": "-122.4690999",
			"stopId": "15806"
		},
		{
			"tag": "7113",
			"title": "Ocean Ave & Junipero Serra Blvd",
			"lat": "37.7316299",
			"lon": "-122.47171",
			"stopId": "17113"
		},
		{
			"tag": "7109",
			"title": "Saint Francis Circle",
			"lat": "37.7348299",
			"lon": "-122.47145",
			"stopId": "17109"
		},
		{
			"tag": "6898",
			"title": "West Portal Ave & 14th Ave",
			"lat": "37.7378599",
			"lon": "-122.46904",
			"stopId": "16898"
		},
		{
			"tag": "7364",
			"title": "3rd St & Marin St",
			"lat": "37.7490799",
			"lon": "-122.38748",
			"stopId": "17364"
		},
		{
			"tag": "7365",
			"title": "3rd St & Evans Ave",
			"lat": "37.74273",
			"lon": "-122.3880299",
			"stopId": "17365"
		},
		{
			"tag": "7390",
			"title": "3rd St & Hudson/Innes Ave",
			"lat": "37.73992",
			"lon": "-122.3889099",
			"stopId": "17390"
		},
		{
			"tag": "7391",
			"title": "3rd St & Kirkwood/La Salle",
			"lat": "37.73764",
			"lon": "-122.3897099",
			"stopId": "17391"
		},
		{
			"tag": "7392",
			"title": "3rd St & Oakdale/Palou",
			"lat": "37.7343499",
			"lon": "-122.39086",
			"stopId": "17392"
		},
		{
			"tag": "7393",
			"title": "3rd St & Revere/Shafter",
			"lat": "37.7322799",
			"lon": "-122.39154",
			"stopId": "17393"
		},
		{
			"tag": "7346",
			"title": "3rd St & Williams Ave",
			"lat": "37.72926",
			"lon": "-122.3926399",
			"stopId": "17346"
		},
		{
			"tag": "7344",
			"title": "3rd St & Carrol Ave",
			"lat": "37.72546",
			"lon": "-122.3942599",
			"stopId": "17344"
		},
		{
			"tag": "7342",
			"title": "3rd St & Paul Ave",
			"lat": "37.7224099",
			"lon": "-122.39564",
			"stopId": "17342"
		},
		{
			"tag": "7394",
			"title": "3rd St & Le Conte Ave",
			"lat": "37.71883",
			"lon": "-122.3974899",
			"stopId": "17394"
		},
		{
			"tag": "7395",
			"title": "Bayshore & Arleta/Blanken",
			"lat": "37.71225",
			"lon": "-122.4023199",
			"stopId": "17395"
		},
		{
			"tag": "7396",
			"title": "Bay Shore Blvd & Sunnydale Ave",
			"lat": "37.7089699",
			"lon": "-122.40511",
			"stopId": "17396"
		},
		{
			"tag": "4509",
			"title": "The Embarcadero & Folsom St",
			"lat": "37.7904799",
			"lon": "-122.3896899",
			"stopId": "14509"
		},
		{
			"tag": "4506",
			"title": "The Embarcadero & Brannan St",
			"lat": "37.78436",
			"lon": "-122.3881399",
			"stopId": "14506"
		},
		{
			"tag": "5234",
			"title": "King St & 2nd St",
			"lat": "37.7797199",
			"lon": "-122.38987",
			"stopId": "15234"
		},
		{
			"tag": "7397",
			"title": "4th Street & King Street",
			"lat": "37.7762499",
			"lon": "-122.39404",
			"stopId": "17397"
		},
		{
			"tag": "7359",
			"title": "3rd St & Mission Rock St",
			"lat": "37.7728299",
			"lon": "-122.3897199",
			"stopId": "17359"
		},
		{
			"tag": "7360",
			"title": "3rd St & Gene Friend Way(Ucsf Mission Bay)",
			"lat": "37.76854",
			"lon": "-122.38927",
			"stopId": "17360"
		},
		{
			"tag": "7361",
			"title": "3rd St & Mariposa(Ucsf Medical Center)",
			"lat": "37.76424",
			"lon": "-122.38886",
			"stopId": "17361"
		},
		{
			"tag": "7362",
			"title": "3rd St & 20th St",
			"lat": "37.7603799",
			"lon": "-122.38856",
			"stopId": "17362"
		},
		{
			"tag": "7363",
			"title": "3rd St & 23rd St",
			"lat": "37.7552899",
			"lon": "-122.3880099",
			"stopId": "17363"
		}








	];

var muniRoutes =
	[
		{
			"tag": "L____I_F00",
			"title": "Inbound to Embarcadero Station",
			"name": "Inbound",
			"useForUI": "true",
			"stop": [
				{ "tag": "6932" },
				{ "tag": "3603" },
				{ "tag": "3601" },
				{ "tag": "3599" },
				{ "tag": "6637" },
				{ "tag": "6635" },
				{ "tag": "6633" },
				{ "tag": "6641" },
				{ "tag": "6631" },
				{ "tag": "6629" },
				{ "tag": "6627" },
				{ "tag": "6625" },
				{ "tag": "6623" },
				{ "tag": "6621" },
				{ "tag": "6619" },
				{ "tag": "6617" },
				{ "tag": "6615" },
				{ "tag": "3267" },
				{ "tag": "3269" },
				{ "tag": "6737" },
				{ "tag": "6740" },
				{ "tag": "5730" },
				{ "tag": "5728" },
				{ "tag": "5726" },
				{ "tag": "5419" },
				{ "tag": "5727" },
				{ "tag": "5417" },
				{ "tag": "5731" },
				{ "tag": "6992" }
			]
		},
		{
			"tag": "N____I_F00",
			"title": "Inbound to Caltrain/Ball Park",
			"name": "Inbound",
			"useForUI": "true",
			"stop": [
				{ "tag": "5223" },
				{ "tag": "5216" },
				{ "tag": "5214" },
				{ "tag": "5212" },
				{ "tag": "5225" },
				{ "tag": "5210" },
				{ "tag": "5208" },
				{ "tag": "5206" },
				{ "tag": "5204" },
				{ "tag": "5201" },
				{ "tag": "5200" },
				{ "tag": "5197" },
				{ "tag": "5220" },
				{ "tag": "5196" },
				{ "tag": "5194" },
				{ "tag": "3212" },
				{ "tag": "5122" },
				{ "tag": "5120" },
				{ "tag": "5124" },
				{ "tag": "3913" },
				{ "tag": "3915" },
				{ "tag": "3911" },
				{ "tag": "7318" },
				{ "tag": "4448" },
				{ "tag": "5419" },
				{ "tag": "5727" },
				{ "tag": "5417" },
				{ "tag": "5731" },
				{ "tag": "6992" },
				{ "tag": "4509" },
				{ "tag": "4506" },
				{ "tag": "5234" },
				{ "tag": "5239" }
			]
		},
		{
			"tag": "M____I_F00",
			"title": "Inbound to Embarcadero Station",
			"name": "Inbound",
			"useForUI": "true",
			"stop": [
				{ "tag": "6262" },
				{ "tag": "7111" },
				{ "tag": "6265" },
				{ "tag": "6257" },
				{ "tag": "3718" },
				{ "tag": "3715" },
				{ "tag": "3717" },
				{ "tag": "6174" },
				{ "tag": "6172" },
				{ "tag": "3385" },
				{ "tag": "3361" },
				{ "tag": "7065" },
				{ "tag": "7449" },
				{ "tag": "6220" },
				{ "tag": "6224" },
				{ "tag": "7109" },
				{ "tag": "6898" },
				{ "tag": "6740" },
				{ "tag": "5730" },
				{ "tag": "5728" },
				{ "tag": "5726" },
				{ "tag": "5419" },
				{ "tag": "5727" },
				{ "tag": "5417" },
				{ "tag": "5731" },
				{ "tag": "6992" }
			]
		},
		{
			"tag": "KT___I_P00",
			"title": "Inbound to 23rd St + Third St",
			"name": "Inbound",
			"useForUI": "true",
			"stop": [
				{ "tag": "7778" },
				{ "tag": "5784" },
				{ "tag": "5794" },
				{ "tag": "5797" },
				{ "tag": "5787" },
				{ "tag": "5788" },
				{ "tag": "5809" },
				{ "tag": "5779" },
				{ "tag": "5806" },
				{ "tag": "7113" },
				{ "tag": "7109" },
				{ "tag": "6898" },
				{ "tag": "17058" },
				{ "tag": "6740" },
				{ "tag": "5730" },
				{ "tag": "5728" },
				{ "tag": "5726" },
				{ "tag": "5419" },
				{ "tag": "5727" },
				{ "tag": "5417" },
				{ "tag": "5731" },
				{ "tag": "6992" },
				{ "tag": "4509" },
				{ "tag": "4506" },
				{ "tag": "5234" },
				{ "tag": "7397" },
				{ "tag": "7359" },
				{ "tag": "7360" },
				{ "tag": "7361" },
				{ "tag": "7362" },
				{ "tag": "7363" }
			]
		}
	];

var leafletMapInPage = CL.maps.map;

var css = createStylesheet();
css.addRule(".walking-distance-icon", "background: transparent;");
css.addRule(".walking-distance-label", "background: white;	border: darkgrey solid 1px; border-radius: 5px;	padding: 2px 0px 2px 7px;");

var stationLookup = {};
var walkingDistanceLabels = [];

for(var i = 0; i < bartStations.length; i++)
{
	stationLookup[bartStations[i].abbr] = bartStations[i];
}

for(var i = 0; i < bartRoutes.length; i++)
{
	var latLongs = [];
	var stationsInPath = bartRoutes[i].config.station;
	for(var j = 0; j < stationsInPath.length; j++)
	{
		var station = stationLookup[stationsInPath[j]];
		latLongs.push(L.latLng(station.gtfs_latitude, station.gtfs_longitude));
	}
	var polyline = L.polyline(latLongs, {color: bartRoutes[i].color}).addTo(leafletMapInPage);
	polyline.bindPopup(bartRoutes[i].name);
}

for(var i = 0; i < bartStations.length; i++)
{
	var station = bartStations[i];

	var opacity = 0.2;

	var coordinates = [station.gtfs_latitude, station.gtfs_longitude];

	L.circle(coordinates, 750, {
		color: 'red',
		stroke: false,
		fillOpacity: opacity
	}).addTo(leafletMapInPage);

	L.circle(coordinates, 500, {
		color: 'yellow',
		stroke: false,
		fillOpacity: opacity
	}).addTo(leafletMapInPage);

	L.circle(coordinates, 250, {
		color: 'green',
		stroke: false,
		fillOpacity: opacity
	}).addTo(leafletMapInPage);


	var icon = L.icon({
		iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Aiga_railtransportation_inv.svg/240px-Aiga_railtransportation_inv.svg.png",
		iconSize: [35, 35]
	});

	var marker = L.marker(coordinates, {icon: icon}).addTo(leafletMapInPage);
	marker.bindPopup(station.name);
}

stationLookup = {};
for(var i = 0; i < muniStations.length; i++)
{
	stationLookup[muniStations[i].tag] = muniStations[i];
}

for(var i = 0; i < muniRoutes.length; i++)
{
	var latLongs = [];
	var stationsInPath = muniRoutes[i].stop;
	for(var j = 0; j < stationsInPath.length; j++)
	{
		var station = stationLookup[stationsInPath[j].tag];
		if(station)
			latLongs.push(L.latLng(station.lat, station.lon));
	}
	var polyline = L.polyline(latLongs, {color: "red"}).addTo(leafletMapInPage);
	polyline.bindPopup(muniRoutes[i].title);
}

stationLookup = {};

for(var i = 0; i < muniStations.length; i++)
{
	var station = muniStations[i];

	if(stationLookup[station.title])
		continue;
	else
	{
		stationLookup[station.title] = true;
	}

	var opacity = 0.2;

	var coordinates = [station.lat, station.lon];

	var width = 120;
	var upperLeft;
	var bottomRight;

	upperLeft = getOffsetLocation(coordinates, -750, -width);
	bottomRight = getOffsetLocation(coordinates, 750, width);
	L.rectangle([upperLeft, bottomRight], {color: "red", weight: 1}).addTo(leafletMapInPage);

	upperLeft = getOffsetLocation(coordinates, -500, -width);
	bottomRight = getOffsetLocation(coordinates, 500, width);
	L.rectangle([upperLeft, bottomRight], {color: "yellow", weight: 1}).addTo(leafletMapInPage);

	upperLeft = getOffsetLocation(coordinates, -250, -width);
	bottomRight = getOffsetLocation(coordinates, 250, width);
	L.rectangle([upperLeft, bottomRight], {color: "green", weight: 1}).addTo(leafletMapInPage);

	var icon = L.icon({
		iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tren.svg/240px-Tren.svg.png",
		iconSize: [20, 20]
	});

	var marker = L.marker(coordinates, {icon: icon}).addTo(leafletMapInPage);
	marker.bindPopup(station.title);
}

function handleZoom()
{
	var currentZoom = leafletMapInPage.getZoom();
	if (currentZoom >= 15)
	{
		walkingDistanceLabels.forEach(function(walkingDistanceLabel)
		{
			leafletMapInPage.addLayer(walkingDistanceLabel);
		});
	}
	else
	{
		walkingDistanceLabels.forEach(function(walkingDistanceLabel)
		{
			leafletMapInPage.removeLayer(walkingDistanceLabel);
		});
	}
}

handleZoom();

leafletMapInPage.on('zoomend', handleZoom);