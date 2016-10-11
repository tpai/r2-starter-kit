import React, { PropTypes } from "react";
import { Pagination } from "amazeui-react";
import { Link } from "react-router";

export default function PaginationButtons( {
    data,
    currentPage,
    isPrevDisabled,
    isNextDisabled,
} ) {
    const filtered = data.filter( item =>
        ( item.id <= currentPage + 2 ) &&
        ( item.id >= currentPage - 2 )
    );
    return (
        <Pagination centered>
            <Pagination.Item
              linkComponent={ Link }
              linkProps={ {
                  to: `/posts/${ currentPage - 1 }`,
              } }
              disabled={ isPrevDisabled }
            >Prev
            </Pagination.Item>

            { currentPage - 2 > 1 &&
                <Pagination.Item
                  linkComponent={ Link }
                  linkProps={ {
                      to: "/posts/1",
                  } }
                  disabled={ currentPage === 1 }
                >1...
                </Pagination.Item>
            }

            {
                filtered.map( item =>
                    <Pagination.Item
                      key={ item.id }
                      linkComponent={ Link }
                      linkProps={ {
                          to: `/posts/${ item.id }`,
                      } }
                      active={ item.id === currentPage }
                    >{ item.id }
                    </Pagination.Item>
                )
            }

            { currentPage + 2 < data.length &&
                <Pagination.Item
                  linkComponent={ Link }
                  linkProps={ {
                      to: `/posts/${ data.length }`,
                  } }
                  disabled={ currentPage === data.length }
                >...{ data.length }
                </Pagination.Item>
            }
            <Pagination.Item
              linkComponent={ Link }
              linkProps={ {
                  to: `/posts/${ currentPage + 1 }`,
              } }
              disabled={ isNextDisabled }
            >Next
            </Pagination.Item>
        </Pagination>
    );
}

PaginationButtons.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape( {
            id: PropTypes.number.isRequired,
        } )
    ).isRequired,
    currentPage: PropTypes.number.isRequired,
    isPrevDisabled: PropTypes.bool.isRequired,
    isNextDisabled: PropTypes.bool.isRequired,
};
