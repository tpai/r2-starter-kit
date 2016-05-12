import React from "react";
import expect from "expect";
import { mount } from "enzyme";

import TitleList from "components/TitleList";
import Container, { PostList, mapStateToProps } from "containers/PostList";

describe("Containers::PostList", () => {

    const fakeDispatch = expect.createSpy();
    const defaultProps = {
        list: [],
        dispatch: fakeDispatch
    };
    let wrapper = mount(<PostList {...defaultProps} />);

    // let TitleList;
    // beforeEach(() => {
    //     TitleList = React.createClass({
    //         render() {
    //             return (<div>MOCK COMPONENT</div>)
    //         }
    //     });
    //     Container.__Rewire__("TitleList", TitleList);
    // })

    it ("should render correctly when props pass in", () => {
        // componentDidMount dispatch
        expect(fakeDispatch).toHaveBeenCalled();

        let header = wrapper.find("h1");
        expect(header.text()).toBe("Post List");

        expect(wrapper.find(TitleList).prop("list").length).toBe(0);

        wrapper.setProps({
            list: [{ id: 1, title: "yo", body: "man" }],
            dispatch: fakeDispatch
        });

        expect(wrapper.find(TitleList).prop("list").length).toBe(1);
    })

    it ("should return correct props when pass state in", () => {
        const state = { list: [{ id: 1, title: "yo", body: "man" }] };
        const props = mapStateToProps(state);
        expect(props.list).toExist();
        expect(props.list).toBeA("array");
        expect(props.list.length).toBe(1);
    })
})
