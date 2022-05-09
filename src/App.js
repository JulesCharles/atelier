import { useContext, useEffect, useState } from 'react';
import Card from './components/Card';
import ModalPlayer from './components/ModalPlayer';
import { playersContext } from './contexts/PlayersContext';
import balle from './assets/balle.png';

import './App.css';

const App = () => {
	const {
		players,
		getSortByPoints,
		getSortByRank,
		getSortByLastName,
		getSortByCountry,
	} = useContext(playersContext); //Liste des joueurs
	const [searchPlayer, setSearchPlayer] = useState(''); //Stockage de la recherche de l'utilisateur
	const [sortListPlayer, setSortListPlayer] = useState([]); //Liste des joueurs triés
	const [isSort, setIsSort] = useState(false); //La recherche est active ?

	const whereIsPlayer = () => {
		let temp = [];
		if (searchPlayer !== '') {
			setIsSort(true);
			for (let i = 0; i < players.length; i++) {
				console.log('boucle');
				if (
					players[i].lastname.includes(searchPlayer) ||
					players[i].firstname.includes(searchPlayer)
				) {
					temp.push(players[i]);
				}
			}
			setSortListPlayer(temp);
		} else {
			setIsSort(false);
		}
	};

	useEffect(() => {
		whereIsPlayer();
	}, [searchPlayer]);

	return (
		<div className="App">
			<div className="left">
				<div className="searchplayer">
					<input
						type="text"
						id="inputsearch"
						placeholder="Rechercher des joueurs"
						onChange={(e) => setSearchPlayer(e.target.value)}
					/>
				</div>
				<div className="sortlist">
					<div className="top">Trier par :</div>
					<div className="bottom">
						<div
							className="sortbylastname"
							onClick={() => {
								getSortByLastName();
							}}
						>
							Nom de famille
						</div>
						<div className="sortbycountry" onClick={() => getSortByCountry()}>
							Pays
						</div>
						<div
							className="sortbypoints"
							onClick={() => {
								getSortByPoints();
							}}
						>
							Points
						</div>
						<div
							className="sortbyrank"
							onClick={() => {
								getSortByRank();
							}}
						>
							Rang
						</div>
					</div>
				</div>
				{isSort
					? sortListPlayer.map((e, key) => (
							<Card
								key={key}
								firstname={e.firstname}
								lastname={e.lastname}
								rank={e.data.rank}
								points={e.data.points}
								country={e.country.code}
								picture={e.picture}
							/>
					  ))
					: players.map((e, key) => (
							<Card
								key={key}
								firstname={e.firstname}
								lastname={e.lastname}
								rank={e.data.rank}
								points={e.data.points}
								country={e.country.code}
								picture={e.picture}
							/>
					  ))}
			</div>
			{/* <ModalPlayer /> */}
			{/* <div className="background"></div> */}
		</div>
	);
};

export default App;
