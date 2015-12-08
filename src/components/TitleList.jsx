import React from "react";
import { Link } from "react-router";
import _ from "lodash";

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
