import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from 'amazeui-react';

export default class Buttons extends Component {
    static propTypes = {
        isPrevDisabled: PropTypes.bool.isRequired,
        isNextDisabled: PropTypes.bool.isRequired,
        onPrevButtonClick: PropTypes.func.isRequired,
        onHomeButtonClick: PropTypes.func.isRequired,
        onNextButtonClick: PropTypes.func.isRequired
    }
    render() {
        const {
            isPrevDisabled,
            isNextDisabled,
            onPrevButtonClick,
            onHomeButtonClick,
            onNextButtonClick } = this.props;
        return (
            <ButtonGroup justify>
                <Button
                    onClick={onPrevButtonClick}
                    disabled={isPrevDisabled}
                    amSize="lg"
                    amStyle="primary" round>Prev</Button>
                <Button
                    onClick={onHomeButtonClick}
                    amSize="lg"
                    amStyle="primary" round>Home</Button>
                <Button
                    onClick={onNextButtonClick}
                    disabled={isNextDisabled}
                    amSize="lg"
                    amStyle="primary" round>Next</Button>
            </ButtonGroup>
        )
    }
}
