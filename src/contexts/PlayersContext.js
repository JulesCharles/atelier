import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const playersContext = createContext();

const PlayerProvider = (props) => {
	const [players, setPlayers] = useState([]);
	const [play, setPlay] = useState(false);

	//Tri par rank
	const getSortByRank = () => {
		players.sort((a, b) => {
			return a.data.rank - b.data.rank;
		});
		setPlay(!play);
	};

	//Tri par points
	const getSortByPoints = () => {
		players.sort((a, b) => {
			return b.data.points - a.data.points;
		});
		setPlay(!play);
	};

	//Tri par nom de famille
	const getSortByLastName = () => {
		players.sort((a, b) => {
			return a.lastname.localeCompare(b.lastname);
		});
		setPlay(!play);
	};

	//Tri par pays
	const getSortByCountry = () => {
		players.sort((a, b) => {
			return a.country.code.localeCompare(b.country.code);
		});
		setPlay(!play);
	};

	//récupération des données
	const getData = async () => {
		await axios
			.get('https://data.latelier.co/training/tennis_stats/headtohead.json')
			.then((response) => response.data)
			.then((data) => setPlayers(data.players));
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		getSortByRank();
	}, [players]);

	useEffect(() => {}, [play]);

	return (
		<playersContext.Provider
			value={{
				players,
				play,
				setPlay,
				getSortByPoints,
				getSortByRank,
				getSortByLastName,
				getSortByCountry,
			}}
		>
			{props.children}
		</playersContext.Provider>
	);
};

export default PlayerProvider;
