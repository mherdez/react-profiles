import { computeHeadingLevel } from '@testing-library/react';
import { useEffect, useState } from 'react';

export const CardFooter = ({
	users,
	cambiaTextos,
	textos,
}) => {
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
						className={
							textos.icono === 'user' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='email'
						src='/assets/img/email.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							textos.icono === 'email' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='birthday'
						src='/assets/img/birthday.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							textos.icono === 'birthday' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='address'
						src='/assets/img/address.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							textos.icono === 'address' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='phone'
						src='/assets/img/phone.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							textos.icono === 'phone' ? 'active' : ''
						}
					/>
				</li>
				<li>
					<img
						name='password'
						src='/assets/img/password.svg'
						alt='icon'
						onMouseEnter={clase}
						className={
							textos.icono === 'password' ? 'active' : ''
						}
					/>
				</li>
			</ul>
		</div>
	);
};
