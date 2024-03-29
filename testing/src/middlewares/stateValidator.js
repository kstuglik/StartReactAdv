import stateSchema from './stateSchema';
import tv4 from 'tv4';

export default({dispatch,getState}) => next => action =>{
    next(action);
    if(!tv4.validate(getState(),stateSchema)){
        console.warn('Invalid state schema detected');
    }
    // console.log(tv4.validate(getState(),stateSchema));
};

