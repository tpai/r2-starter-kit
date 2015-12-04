import React from "react";
import { Link } from "react-router";

const TitleList = ({
	list
}) => (
	<ul>
	{
		_.map(list, item => 
			<li key={item.id}><Link to={"/post/" + item.id}>{item.title}</Link></li>
		)
	}
	</ul>
);

export default TitleList;