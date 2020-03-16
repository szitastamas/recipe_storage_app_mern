import React from 'react';

const AboutItem = ({ item, styling }) => {
	return (
		<li className={`collection-item avatar ${styling.bgColor} ${styling.secondaryTextColor}`}>
			<i className={`material-icons circle ${item.iconColor}`}>{item.icon}</i>
			<span className={`title ${item.iconColor}-text`}>{item.title}</span>
			<p style={{ marginTop: '.6rem' }}>{item.p1}</p>
			<p>{item.p2}</p>
		</li>
	);
};

export default AboutItem;
