export default ({dispatch}) => next => action => {
// check if action has a promise on its payload property
// if does then wait for it to resolve
// else then send the action on to the next middleware

    debugger;

    if(!action.payload || !action.payload.then){
        return next(action);
    }

    // if we have promise then create a new action with that data and didispatchspatch it
    action.payload.then(function(response){
        const newAction = {...action, payload:response};

        dispatch(newAction);
    });
};