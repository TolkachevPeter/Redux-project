import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import './book-list.css';

class BookList extends Component {
    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                books.map((book) => {
                    return (
                        <li><BookListItem book={book}/> </li>
                    )
                })
            }
            </ul>
        )
    }
}

const mapStateTopProps = ({ books }) => {
    return {books};
};

export default connect(mapStateTopProps)(BookList);