import React from 'react';
import { BookstoreServiceConsimer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
       return (
        <BookstoreServiceConsimer>
            {
                (bookstoreService) => {
                    return ( 
                    <Wrapped { ...props }
                    bookstoreService={bookstoreService} />
                    )
                }
            }
        </BookstoreServiceConsimer>
       );
    }
};

export default withBookstoreService;
