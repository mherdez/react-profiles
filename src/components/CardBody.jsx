export const CardBody = ({ user }) => {
	const { name } = user;
	return (
		<div className='card-body'>
			<div className='card-text'>
				<p>Hi, My name is</p>
			</div>
			<div className='card-title'>
				<h5>{`${name.first} ${name.last}`}</h5>
			</div>
		</div>
	);
};
