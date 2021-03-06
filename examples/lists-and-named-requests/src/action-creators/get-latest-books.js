import { actionTypes } from 'redux-resource';

// This action creator represents retrieving a list of recently-released books.
export default function getLatestBooks() {
  return function(dispatch) {
    dispatch({
      type: actionTypes.READ_RESOURCES_PENDING,
      resourceName: 'books',
      request: 'readLatestBooks',
      list: 'latestBooks'
    });

    // This timeout is to mimic network latency.
    setTimeout(function() {
      dispatch({
        type: actionTypes.READ_RESOURCES_SUCCEEDED,
        resourceName: 'books',
        request: 'readLatestBooks',
        list: 'latestBooks',
        resources: [
          {
            id: 10,
            title: 'Captain Underpants',
            author: 'Dav Pilkey',
            releaseYear: 1997
          },
          {
            id: 24,
            title: 'My Name is Red',
            author: 'Orhan Pamuk',
            releaseYear: 1998
          }
        ]
      });
    }, 900);
  }
}
