import '../styles/ModalPlayer.css';

const ModalPlayer = () => {
	return (
		<div className="modalplayer">
			<div className="close">
				<div className="first">|</div>
				<div className="second">|</div>
			</div>
			<div className="modal">
				<div className="photo">
					<img
						src="https://data.latelier.co/training/tennis_stats/resources/Djokovic.png"
						alt="Novak"
					/>
				</div>
				<div className="blaze">
					<div className="firstname">Novak</div>
					<div className="lastname">Djokovic</div>
				</div>
				<div className="rank">
					<div className="firstline">RANK</div>
					<div className="secondline">#1</div>
				</div>
				<div className="points">
					<div className="firstline">POINTS</div>
					<div className="secondline">11 015</div>
				</div>
				<div className="country">
					<div className="firstline">COUNTRY</div>
					<div className="secondline">SRB</div>
				</div>
				<div className="birthday">
					<div className="firstline">BIRTHDAY</div>
					<div className="secondline">22/05/1987</div>
				</div>
				<div className="age">
					<div className="firstline">AGE</div>
					<div className="secondline">34</div>
				</div>
				<div className="void">
					<div className="firstname"></div>
					<div className="secondname"></div>
				</div>
				<div className="weight">
					<div className="firstline">WEIGHT</div>
					<div className="secondline">77 Kg</div>
				</div>
				<div className="height">
					<div className="firstline">HEIGHT</div>
					<div className="secondline">188 cm</div>
				</div>
				<div className="void">
					<div className="firstname"></div>
					<div className="secondname"></div>
				</div>
			</div>
		</div>
	);
};

export default ModalPlayer;
