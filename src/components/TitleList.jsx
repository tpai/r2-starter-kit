import React from "react";
import { Link } from "react-router";
import _ from "lodash";
import classNames from "classnames";

import * as style from "styles/titleList";

const TitleList = ({
    list
}) => (
    <div className={style.parent}>
    {
        _.map(list, item =>
            <div key={item.id} className={style.container}>
                <Link to={"/post/" + item.id} className={style.link}>
                    <div className={style.title}>{item.title}</div>
                    <p className={style.peek}>{item.body}</p>
                </Link>
                <Link to={"/post/" + item.id} className={classNames(style.link, style.readmore)}>
                    Read more...
                </Link>
            </div>
        )
    }
    </div>
);

export default TitleList;
