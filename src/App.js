import { useContext, useEffect, useState } from 'react';
import Card from './components/Card';
import ModalPlayer from './components/ModalPlayer';
import { playersContext } from './contexts/PlayersContext';

import './App.css';

const App = () => {
	const {
		players,
		getSortByPoints,
		getSortByRank,
		getSortByLastName,
		getSortByCountry,
	} = useContext(playersContext); //Context des joueurs
	const [searchPlayer, setSearchPlayer] = useState(''); //Stockage de la recherche de l'utilisateur
	const [sortListPlayer, setSortListPlayer] = useState([]); //Liste des joueurs triés
	const [isSort, setIsSort] = useState(false); //La recherche est active ?
	const [isOpen, setIsOpen] = useState(false); //La modal est ouverte ?
	const [idPlayer, setIdPlayer] = useState(0); //ID du joueur selectionné pour la modal

	const whereIsPlayer = () => {
		let temp = [];
		if (searchPlayer !== '') {
			setIsSort(true);
			for (let i = 0; i < players.length; i++) {
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
								id={e.id}
								firstname={e.firstname}
								lastname={e.lastname}
								rank={e.data.rank}
								points={e.data.points}
								country={e.country.code}
								picture={e.picture}
								isOpen={isOpen}
								setIsOpen={setIsOpen}
								setIdPlayer={setIdPlayer}
							/>
					  ))
					: players.map((e, key) => (
							<Card
								key={key}
								id={e.id}
								firstname={e.firstname}
								lastname={e.lastname}
								rank={e.data.rank}
								points={e.data.points}
								country={e.country.code}
								picture={e.picture}
								isOpen={isOpen}
								setIsOpen={setIsOpen}
								setIdPlayer={setIdPlayer}
							/>
					  ))}
				<div className={isOpen ? 'launchmodal active' : 'launchmodal'}>
					<ModalPlayer
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						idPlayer={idPlayer}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
