export default function countReducer(state,action)
{
    console.log("state    = ", state);
    console.log("actiontype = ", action.type);
    

    switch(action.type)
    {
        case 'Inc':return {Count:state.Count+1}
        break;

        case 'Dec':return {Count:state.Count-1}
        break;
        
        default:return state

    }
    
    return state
}
