import {SET_CITY} from './../actions';

// reducer= (state,action)=>(state2)
export const city= (state,action) => {
    switch(action.type){
        case SET_CITY:
            return {...state,city: action.value}
    }
    return state;
}