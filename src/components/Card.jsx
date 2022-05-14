import { useEffect, useState } from 'react';

import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardArrows } from './CardArrows';
import {
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from 'react-icons/ai';

export const Card = ({ users, newUser }) => {
	const [actual, setActual] = useState(0);
	const [user, setUser] = useState(users[actual]);
	const [textos, setTextos] = useState({
		parrafo: 'Hi, My name is',
		main: `${user.name.first} ${user.name.last}`,
	});

	const previo = () => {
		setActual(actual - 1);
		if (actual < 0) {
			setActual(0);
		}
	};

	const siguiente = () => {
		setActual(actual + 1);
		if (actual + 1 >= users.length) {
			newUser();
			setActual(users.length - 1);
		}
	};

	useEffect(() => {
		setUser(users[actual]);
	}, [actual]);

	const cambiaTextos = (icono) => {
		switch (icono) {
			case 'user':
				setTextos({
					parrafo: 'Hi, My name is',
					main: `${user.name.first} ${user.name.last}`,
				});
				break;
			case 'email':
				setTextos({
					parrafo: 'My email address is',
					main: `deja lo veo`,
				});
				break;
			case 'birthday':
				setTextos({
					parrafo: 'My birthday is',
					main: `deja lo veo`,
				});
				break;
			case 'address':
				setTextos({
					parrafo: 'My address is',
					main: `deja lo veo`,
				});
				break;
			case 'phone':
				setTextos({
					parrafo: 'My phone number is',
					main: `deja lo veo`,
				});
				break;
			case 'password':
				setTextos({
					parrafo: 'My password is',
					main: `deja lo veo`,
				});
				break;

			default:
				break;
		}
	};

	return (
		<>
			<div className='card'>
				<CardHeader user={user} />
				<CardBody textos={textos} />
				<CardFooter
					user={user}
					cambiaTextos={cambiaTextos}
				/>
				<div className='arrows'>
					<div
						className='arrow-left'
						hidden={user.login.uuid === users[0].login.uuid}
						onClick={previo}
					>
						<AiOutlineArrowLeft />
					</div>

					<div
						className='arrow-right'
						onClick={siguiente}
						// hidden={
						// 	user.login.uuid ===
						// 	users[users.length - 1].login.uuid
						// }
					>
						<AiOutlineArrowRight />
					</div>
				</div>
			</div>
		</>
	);
};
