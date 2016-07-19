import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup, Pagination } from 'amazeui-react';
import { Link } from 'react-router';

export default class PaginationButtons extends Component {
    static propTypes = {
        isPrevDisabled: PropTypes.bool.isRequired,
        isNextDisabled: PropTypes.bool.isRequired,
        onPrevButtonClick: PropTypes.func.isRequired,
        onHomeButtonClick: PropTypes.func.isRequired,
        onNextButtonClick: PropTypes.func.isRequired
    }
    onSelect = (link, e) => {
        const {
             } = this.props;
        switch(link) {
            case '#prev':
                onPrevButtonClick();
                break;
            case '#next':
                onNextButtonClick();
                break;
            default:
                break;
        }
    }
    render() {
        const {
            data,
            currentPage,
            isPrevDisabled,
            isNextDisabled,
            onPrevButtonClick,
            onHomeButtonClick,
            onNextButtonClick
        } = this.props;
        return (
            <Pagination centered>
                <Pagination.Item
                    linkComponent={Link}
                    linkProps={{
                        to: `/posts/${currentPage-1}`
                    }}
                    disabled={isPrevDisabled}>Prev
                </Pagination.Item>
                { currentPage - 2 > 1 && <Pagination.Item
                    linkComponent={Link}
                    linkProps={{
                        to: `/posts/1`
                    }}
                    disabled={currentPage === 1}>1...
                </Pagination.Item> }
                {_.map(data, item => {
                    return (
                        (item.id <= currentPage + 2) &&
                        (item.id >= currentPage - 2)
                    ) && <Pagination.Item
                        key={item.id}
                        linkComponent={Link}
                        linkProps={{
                            to: `/posts/${item.id}`
                        }}
                        active={item.id === currentPage}>{item.id}
                    </Pagination.Item>
                    }
                )}
                { currentPage + 2 < data.length && <Pagination.Item
                    linkComponent={Link}
                    linkProps={{
                        to: `/posts/${data.length}`
                    }}
                    disabled={currentPage === data.length}>...{data.length}
                </Pagination.Item> }
                <Pagination.Item
                    linkComponent={Link}
                    linkProps={{
                        to: `/posts/${currentPage+1}`
                    }}
                    disabled={isNextDisabled}>Next
                </Pagination.Item>
            </Pagination>
        )
    }
}
