import {
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from 'react-icons/ai';

export const CardArrows = () => {
	return (
		<div className='arrows'>
			<div className='arrow-left'>
				<AiOutlineArrowLeft />
			</div>
			<div className='arrow-right'>
				<AiOutlineArrowRight />
			</div>
		</div>
	);
};
