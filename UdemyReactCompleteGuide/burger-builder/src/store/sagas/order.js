import {
    put
} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* purchaseBurgerSaga(action){
    yield put(actions.purchaseBurgerStart());
    try{
        const response = yield axios.post(`/orders.json?auth=${action.token}`, action.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    }
    catch(error){
        yield put(actions.purchaseBurgerFailed(error));
    }
}

export function* fetchOrdersSaga(action){
    yield put(actions.fetchOrdersStart());
        const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;

        try{
            const response = yield put(axios.get(`/orders.json${queryParams}`));
            let orders = [];
            for(let key in response.data){
                orders.push({
                    ...response.data[key],
                    id: key
                });
            }

            for (let order of orders) {
                let transformedIngredients = [];
                for (let ingredientName in order.ingredients) {
                    transformedIngredients.push({
                        name: ingredientName,
                        amount: order.ingredients[ingredientName]
                    });
                }
                order.ingredients = transformedIngredients;
            }
            yield put(actions.fetchOrdersSuccess(orders));
        }
        catch(error){
            yield put(actions.fetchOrdersFailed(error));
        }
}