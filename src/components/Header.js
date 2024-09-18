import React, { useState } from 'react';
import './Header.css';
import DisplayImage from '../assets/Display.svg';
import DownImage from '../assets/down.svg';

const Header = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
	const [show, setShow] = useState(false);
	const handleChange = (type, payload) => {
		setShow((prevShow) => !prevShow);
		if (type) {
			if (type === 'group') {
				onGroupingChange(payload);
			} else {
				onSortingChange(payload);
			}
		}
	};
	return (
		<div className='header'>
			<button className='display-button'>
				<div className='button-wrapper' onClick={handleChange}>
					<img src={DisplayImage} alt='display icon' />
					<div className='text'>Display</div>
					<img src={DownImage} alt='down arrow' />
				</div>
				<div className={show ? 'controls show' : 'controls hide'}>
					<div className='control-group'>
						<label>Grouping</label>
						<select value={grouping} onChange={(e) => handleChange('group', e.target.value)}>
							<option value='Status'>Status</option>
							<option value='User'>User</option>
							<option value='Priority'>Priority</option>
						</select>
					</div>
					<div className='control-group'>
						<label>Ordering</label>
						<select value={sorting} onChange={(e) => handleChange('sort', e.target.value)}>
							<option value='Priority'>Priority</option>
							<option value='Title'>Title</option>
						</select>
					</div>
				</div>
			</button>
		</div>
	);
};

export default Header;
