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

	return (
		<>
			<div className='card'>
				<CardHeader user={user} />
				<CardBody user={user} />
				<CardFooter user={user} />
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
