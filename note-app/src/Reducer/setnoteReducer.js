


const setnoteReducer = (state,action) => {
    
  switch(action.type){
    case "TITLE":
      return {...state,title: action.payload}
      case "TEXT":
        return {...state,text: action.payload}
        case "SETNOTE_COLOR":
          return {...state,noteColor:action.payload}
          case "COLORPALLET":
            return {...state,colorPalletVisible: !state.colorPalletVisible}
            case "TAGPALLET":
              return {...state,tagPalletVisible : !state.tagPalletVisible}
              case "SET_TAG":
                return {...state,tags : action.payload}
        case "RESET":
          return {
            title: '',
              text: '',
              noteColor: '',
              tags: ''
          }
         default:
          return state;
  }
}



export default setnoteReducer