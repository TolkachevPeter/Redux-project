import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import './book-list.css';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
class BookList extends Component {

    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);

        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul className='book-list'>
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

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withBookstoreService(),
    connect(mapStateTopProps, 
        mapDispatchToProps))
        (BookList);

