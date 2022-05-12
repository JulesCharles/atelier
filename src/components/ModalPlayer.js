import '../styles/ModalPlayer.css';
import LastMatches from './LastMatches';
import { useEffect, useState, useContext } from 'react';
import { playersContext } from '../contexts/PlayersContext';

const ModalPlayer = (props) => {
	const [dataPlayer, setDataPlayer] = useState([]);
	const [isLoad, setIsLoad] = useState(false);
	const { players } = useContext(playersContext);

	useEffect(() => {
		if (props.idPlayer !== 0) {
			let temp = players.find((el) => el.id === props.idPlayer);
			setDataPlayer(temp);
			setIsLoad(true);
		}
	}, [props.idPlayer]);

	return (
		<div className="modalplayer">
			<div className="close" onClick={() => props.setIsOpen(false)}>
				<div className="first">|</div>
				<div className="second">|</div>
			</div>
			<div className="modal">
				<div className="headModal">
					<div className="blaze">
						<div className="firstname">{dataPlayer.firstname}</div>
						<div className="lastname">{dataPlayer.lastname}</div>
					</div>
					<div className="flag">
						<div className="flagCountry">
							<img
								src={isLoad ? dataPlayer.country.picture : ''}
								alt={isLoad ? `Flag of ${dataPlayer.country.code}` : ''}
							/>
						</div>
						<div className="codeCountry">
							{isLoad ? dataPlayer.country.code : ''}
						</div>
					</div>
				</div>
				<div className="contentModal">
					<div className="photo">
						<img
							src={dataPlayer.picture}
							alt={`Photo of ${dataPlayer.firstname} ${dataPlayer.lastname}`}
						/>
					</div>
					<div className="infoPlayer">
						<div className="rank">
							<div className="firstline">RANK</div>
							<div className="secondline">
								#{isLoad ? dataPlayer.data.rank : ''}
							</div>
						</div>
						<div className="points">
							<div className="firstline">POINTS</div>
							<div className="secondline">
								{isLoad
									? Intl.NumberFormat().format(dataPlayer.data.points)
									: ''}
							</div>
						</div>
						<div className="country">
							<div className="firstline">COUNTRY</div>
							<div className="secondline">
								{isLoad ? dataPlayer.country.code : ''}
							</div>
						</div>
						<div className="birthday">
							<div className="firstline">BIRTHDAY</div>
							<div className="secondline">Not disclosed</div>
						</div>
						<div className="age">
							<div className="firstline">AGE</div>
							<div className="secondline">
								{isLoad ? dataPlayer.data.age : ''}
							</div>
						</div>
						<div className="voidOne">
							<div className="firstname"></div>
							<div className="secondname"></div>
						</div>
						<div className="weight">
							<div className="firstline">WEIGHT</div>
							<div className="secondline">
								{isLoad ? dataPlayer.data.weight.toString().slice(0, 2) : ''} kg
							</div>
						</div>
						<div className="height">
							<div className="firstline">HEIGHT</div>
							<div className="secondline">
								{isLoad ? dataPlayer.data.height : ''} cm
							</div>
						</div>
						<div className="voidTwo">
							<div className="firstline"></div>
							<div className="secondline"></div>
						</div>
					</div>
					<div className="details">
						<div className="career">The last 5 matches</div>
						<div className="list">
							{isLoad
								? dataPlayer.data.last.map((el, key) => (
										<LastMatches key={key} match={el} />
								  ))
								: ''}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalPlayer;
