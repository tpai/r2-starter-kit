import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { Link } from "react-router";
import _ from "lodash";
import classNames from "classnames";

import * as style from "styles/titleList";

import TitleList from "components/TitleList";

describe("Components::TitleList", () => {
    let wrapper;
    const setup = props => shallow(<TitleList {...props} />);

    it("should render correctly when props pass in", () => {

        wrapper = setup({ list: [] });
        expect(wrapper.children().length).toEqual(0);

        wrapper = setup({ list: [{ id: 1, title: "yo", content: "man" }] });
        expect(wrapper.children().length).toEqual(1);
    })
})
