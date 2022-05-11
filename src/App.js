import { useEffect, useState } from 'react';
import './App.css';

import { CardHeader } from './components/CardHeader';
import { CardBody } from './components/CardBody';
import { CardFooter } from './components/CardFooter';
import { CardArrows } from './components/CardArrows';

import { userInicial } from './helpers/user';

function App() {
	const [user, setUser] = useState(userInicial);

	// useEffect(() => {
	// 	setUser(userInicial);
	// }, []);
	console.log(user);

	return (
		<>
			<header>
				<div className='title'>
					<h1>Profiles App</h1>
					<h3>From Html to Api Rest </h3>
				</div>
			</header>
			<main>
				<div className='card'>
					<CardHeader user={user} />
					<CardBody user={user} />
					<CardFooter />
					<CardArrows />
				</div>
			</main>
		</>
	);
}

export default App;
