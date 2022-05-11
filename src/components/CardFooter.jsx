import {
	AiOutlineUser,
	AiOutlineMail,
	AiOutlinePhone,
	AiOutlineLock,
	AiOutlineCalendar,
	AiOutlineEnvironment,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from 'react-icons/ai';
export const CardFooter = () => {
	return (
		<div className='card-footer'>
			<ul>
				<li>
					<AiOutlineUser />
				</li>
				<li>
					<AiOutlineMail />
				</li>
				<li>
					<AiOutlineCalendar />
				</li>
				<li>
					<AiOutlineEnvironment />
				</li>
				<li>
					<AiOutlinePhone />
				</li>
				<li>
					<AiOutlineLock />
				</li>
			</ul>
		</div>
	);
};
