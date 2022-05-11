import { useEffect, useState } from 'react';
import { userRandomFemale } from './helpers/getUsuario';
import './App.css';

import { CardHeader } from './components/CardHeader';
import { CardBody } from './components/CardBody';
import { CardFooter } from './components/CardFooter';
import { CardArrows } from './components/CardArrows';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		userRandomFemale(setUsers);
	}, []);

	return (
		<>
			<header>
				<div className='title'>
					<h1>Profiles App</h1>
					<h3>From Html to Api Rest </h3>
				</div>
			</header>
			<main>
				{users.map((user) => (
					<div key={user.login.uuid} className='card'>
						<CardHeader user={user} />
						<CardBody user={user} />
						<CardFooter />
						<CardArrows />
					</div>
				))}
			</main>
		</>
	);
}

export default App;
