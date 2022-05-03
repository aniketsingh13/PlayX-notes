


const setnoteReducer = (state,action) => {
  switch(action.type){
    case "TITLE":
      return {...state,title: action.payload}
      case "TEXT":
        return {...state,text: action.payload}
        case "RESET":
          return {
            title: '',
              text: '',
          }
         default:
          return state;
  }
}



export default setnoteReducer