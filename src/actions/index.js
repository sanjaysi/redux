export function selectBook(book) {
    // selectBook is an ActionCreator, need to return
    // an action with object having type & payload properties
    return {
        kind: 'BOOK_SELECTED',
        payload: book
    }
}