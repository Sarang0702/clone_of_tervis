const reducer = (state="",action)=>{
    if(action.type==="categoryName"){
        return state+action.payload;
    }else{
        return state;
    }
}
export default reducer;