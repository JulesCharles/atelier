import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const playersContext = createContext([]);

const PlayerProvider = (props) => {
	const [players, setPlayers] = useState([]); //Stokage des données des joueurs
	const [play, setPlay] = useState(false); //State permettant de surveiller un tri demandé par l'utilisateur

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

	//Au premier lancement du composant, récupération des données
	useEffect(() => {
		getData();
	}, []);

	//Lorsque les données sont modifiés, faire le tri par Rank
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
