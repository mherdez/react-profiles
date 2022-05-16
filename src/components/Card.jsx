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
		icono: 'user',
	});

	const previo = () => {
		if (actual === 0) {
			setActual(0);
		}
		setActual(actual - 1);
		setUser(users[actual]);
		setTextos({
			parrafo: 'Hi, My name is',
			main: `${user.name.first} ${user.name.last}`,
			icono: 'user',
		});
	};

	const siguiente = () => {
		if (actual === users.length - 1) {
			// newUser();
			setActual(users.length - 1);
		}
		setActual(actual + 1);
		setUser(users[actual]);
		setTextos({
			parrafo: 'Hi, My name is',
			main: `${user.name.first} ${user.name.last}`,
			icono: 'user',
		});
	};

	const cambiaTextos = (icono) => {
		switch (icono) {
			case 'user':
				setTextos({
					parrafo: 'Hi, My name is',
					main: `${user.name.first} ${user.name.last}`,
					icono: 'user',
				});
				break;
			case 'email':
				setTextos({
					parrafo: 'My email address is',
					main: `${user.email}`,
					icono: 'email',
				});
				break;
			case 'birthday':
				setTextos({
					parrafo: 'My birthday is',
					main: `${user.dob.date.slice(
						8,
						10
					)}/${user.dob.date.slice(
						5,
						7
					)}/${user.dob.date.slice(0, 4)}`,
					icono: 'birthday',
				});
				break;
			case 'address':
				setTextos({
					parrafo: 'My address is',
					main: `${user.location.street.number} ${user.location.street.name}`,
					icono: 'address',
				});
				break;
			case 'phone':
				setTextos({
					parrafo: 'My phone number is',
					main: `${user.phone}`,
					icono: 'phone',
				});
				break;
			case 'password':
				setTextos({
					parrafo: 'My password is',
					main: `${user.login.password}`,
					icono: 'password',
				});
				break;

			default:
				break;
		}
	};

	return (
		<>
			<div className='card'>
				<h1>{actual}</h1>
				<CardHeader user={user} />
				<CardBody textos={textos} />
				<CardFooter
					user={user}
					cambiaTextos={cambiaTextos}
					textos={textos}
				/>
				<div className='arrows'>
					<div
						className='arrow-left'
						hidden={actual === 0}
						onClick={previo}
					>
						<AiOutlineArrowLeft />
					</div>

					<div
						className='arrow-right'
						onClick={siguiente}
						hidden={actual === users.length - 1}
					>
						<AiOutlineArrowRight />
					</div>
				</div>
			</div>
		</>
	);
};
