export const catgoryTell = (name) =>{
    return (dispatch)=>{
        dispatch({
            type:"categoryName",
            payload:name
        })
    }
}