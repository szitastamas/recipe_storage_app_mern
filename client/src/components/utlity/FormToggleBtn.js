import React from 'react';

const FormToggleBtn = (props) => {
	const { isOpen, toggleFormActive } = props;

	return (
		<div>
			<button className='btn waves-effect waves-light' style={{ marginTop: '2rem' }} onClick={toggleFormActive}>
				<i className='material-icons left'>{isOpen ? 'close' : 'add'}</i>
				<span>{isOpen ? 'Close Form' : 'Open Form'}</span>
			</button>
		</div>
	);
};

export default FormToggleBtn;
