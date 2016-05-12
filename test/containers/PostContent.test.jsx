import React from "react";
import expect from "expect";
import { mount } from "enzyme";

import { PostContent, mapStateToProps } from "containers/PostContent";

describe("Containers::PostContent", () => {

    const fakeRouter = expect.createSpy();
    const fakeDispatch = expect.createSpy();
    const defaultProps = {
        post: { id: -1, title: "Now", body: "Loading..." },
        routeParams: { id: 1 },
        router: { push: fakeRouter },
        dispatch: fakeDispatch
    };
    let wrapper = mount(<PostContent {...defaultProps} />);

    it ("should render correctly when props pass in", () => {
        wrapper.setProps({
            post: { id: -1, title: "Now", body: "Loading..." },
            router: { push: fakeRouter },
            dispatch: fakeDispatch
        });

        // componentDidMount dispatch
        expect(fakeDispatch).toHaveBeenCalled();

        let title = wrapper.find("h1");
        expect(title.text()).toBe("Now");

        let content = wrapper.find("p");
        expect(content.text()).toBe("Loading...");

        let btns = wrapper.find("button");
        expect(btns.length).toBe(3);

        // componentWillUpdate router.push()
        expect(fakeRouter).toNotHaveBeenCalled();
        wrapper.setProps({
            post: { id: 1, title: "yo", body: "man" },
            routeParams: { id: 1 }
        });
        expect(fakeRouter).toHaveBeenCalled();

        title = wrapper.find("h1");
        expect(title.text()).toBe("yo");

        content = wrapper.find("p");
        expect(content.text()).toBe("man");
    })

    it ("should disable prev button when id equals 1", () => {
        const prevBtn = wrapper.ref("prev");
        const nextBtn = wrapper.ref("next");

        expect(prevBtn.prop("disabled")).toBe(true);
        expect(nextBtn.prop("disabled")).toBe(false);
    })

    it ("should disable next button when id equals 100", () => {
        wrapper.setProps({
            post: { id: 100, title: "no", body: "dude" },
            routeParams: { id: 100 }
        });

        const prevBtn = wrapper.ref("prev");
        const nextBtn = wrapper.ref("next");

        expect(prevBtn.prop("disabled")).toBe(false);
        expect(nextBtn.prop("disabled")).toBe(true);
    })

    it ("should call onListButtonClick function when back button click", () => {
        const spy = expect.spyOn(PostContent.prototype, "onListButtonClick");
        wrapper = mount(<PostContent {...defaultProps} />);
        const btn = wrapper.ref("back");
        expect(spy).toNotHaveBeenCalled();
        btn.simulate("click");
        expect(spy).toHaveBeenCalled();
    })

    it ("should call onPrevButtonClick function when prev button click", () => {
        const spy = expect.spyOn(PostContent.prototype, "onPrevButtonClick");
        const props = {
            post: { id: 100, title: "no", body: "dude" },
            routeParams: { id: 100 },
            dispatch: fakeDispatch
        };
        wrapper = mount(<PostContent {...props} />);
        const btn = wrapper.ref("prev");
        expect(spy).toNotHaveBeenCalled();
        btn.simulate("click");
        expect(spy).toHaveBeenCalled();
    })

    it ("should call onNextButtonClick function when next button click", () => {
        const spy = expect.spyOn(PostContent.prototype, "onNextButtonClick");
        wrapper = mount(<PostContent {...defaultProps} />);
        const btn = wrapper.ref("next");
        expect(spy).toNotHaveBeenCalled();
        btn.simulate("click");
        expect(spy).toHaveBeenCalled();
    })

    it ("should return correct props when pass state in", () => {
        const state = { post: { id: 1, title: "yo", body: "man" } };
        const props = mapStateToProps(state);
        expect(props.post).toExist();
        expect(props.post).toBeA("object");
    })
})
