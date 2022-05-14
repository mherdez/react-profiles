export const CardFooter = ({ users }) => {
	const clase = (e) => {
		document
			.querySelectorAll('li img')
			.forEach((icono) => (icono.className = 'no-active'));
		e.target.className = 'active';
	};

	return (
		<div className='card-footer'>
			<ul>
				<li onMouseEnter={clase}>
					<img src='/assets/img/user.svg' alt='icon' />
				</li>
				<li onMouseEnter={clase}>
					<img src='/assets/img/email.svg' alt='icon' />
				</li>
				<li onMouseEnter={clase}>
					<img src='/assets/img/birthday.svg' alt='icon' />
				</li>
				<li onMouseEnter={clase}>
					<img src='/assets/img/address.svg' alt='icon' />
				</li>
				<li onMouseEnter={clase}>
					<img src='/assets/img/phone.svg' alt='icon' />
				</li>
				<li onMouseEnter={clase}>
					<img src='/assets/img/password.svg' alt='icon' />
				</li>
			</ul>
		</div>
	);
};
