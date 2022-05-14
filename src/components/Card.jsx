import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardArrows } from './CardArrows';

const Card = ({ user }) => {
	return (
		<>
			<CardHeader user={user} />
			<CardBody user={user} />
			<CardFooter />
			<CardArrows />
		</>
	);
};

export default Card;
