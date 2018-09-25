import request from '../utils/request';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};

export default {
    'namespace': 'segment',
    // counter: 100,
    // style: {
    //     width: '400px',
    //     margin: '30px',
    //     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    //     border: '1px solid #e8e8e8',
    // },
    state: {
        data: [],
        counter: 0,
    },
    effects: {
        *queryInitCards(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURI = '/dev/mockSegment';
            // const endPointURI = '/dev/random_joke';

            const puzzle = yield call(request, endPointURI);
            yield put({ type: 'addNewCard', payload: puzzle });

            yield call(delay, 3000);

            const puzzle2 = yield call(request, endPointURI);
            yield put({ type: 'addNewCard', payload: puzzle2 });
        }
    },
    reducers: {
        addNewCard(state, { payload: newCard }){
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter};
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            }
        }
    }
}
