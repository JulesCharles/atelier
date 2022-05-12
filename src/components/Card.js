import '../styles/Card.css';
import Modal from './ModalPlayer';
import { useState, useEffect } from 'react';

const Card = (props) => {
	return (
		<div
			className="card"
			onClick={() => {
				props.setIsOpen(!props.isOpen);
				props.setIdPlayer(props.id);
			}}
		>
			<div className="picture">
				<img src={props.picture} alt={props.firstname} />
			</div>
			<div className="content">
				<div className="name">
					{props.firstname} {props.lastname}
				</div>
				<div className="bottomcontent">
					<div className="rank">
						<div className="firstline">RANK</div>
						<div className="secondline">#{props.rank}</div>
					</div>
					<div className="points">
						<div className="firstline">POINTS</div>
						<div className="secondline">
							{Intl.NumberFormat().format(props.points)}
						</div>
					</div>
					<div className="country">
						<div className="firstline">COUNTRY</div>
						<div className="secondline">{props.country}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
