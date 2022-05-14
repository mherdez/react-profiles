export const CardFooter = ({ users, cambiaTextos }) => {
	const clase = (e) => {
		document
			.querySelectorAll('li > img')
			.forEach((icono) => (icono.className = ''));
		e.target.className = 'active';
		cambiaTextos(e.target.name);
	};

	return (
		<div className='card-footer'>
			<ul>
				<li>
					<img
						name='user'
						src='/assets/img/user.svg'
						alt='icon'
						onMouseEnter={clase}
						className='active'
					/>
				</li>
				<li>
					<img
						name='email'
						src='/assets/img/email.svg'
						alt='icon'
						onMouseEnter={clase}
					/>
				</li>
				<li>
					<img
						name='birthday'
						src='/assets/img/birthday.svg'
						alt='icon'
						onMouseEnter={clase}
					/>
				</li>
				<li>
					<img
						name='address'
						src='/assets/img/address.svg'
						alt='icon'
						onMouseEnter={clase}
					/>
				</li>
				<li>
					<img
						name='phone'
						src='/assets/img/phone.svg'
						alt='icon'
						onMouseEnter={clase}
					/>
				</li>
				<li>
					<img
						name='password'
						src='/assets/img/password.svg'
						alt='icon'
						onMouseEnter={clase}
					/>
				</li>
			</ul>
		</div>
	);
};
