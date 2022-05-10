


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
                case "TAGS_HIGH":
                  return {...state,priority: action.payload}
                  case "TAGS_LOW":
                  return {...state,priority: action.payload}
                  case "TAG_MEDIUM":
                    return {...state,priority: action.payload}
                    case "PRIORTY":
                      return {...state,priority: action.payload}
                      case "PINTOGGLE":
                        return {...state,pinned : !state.pinned}

                    case "RESET":
                      return {
                   title: '',
                   text: '',
                 noteColor: '',
                   tags: '',
                 priority: 'High',
                 pinned: false
                }
         default:
          throw new Error("Action type not found");
  }
}



export default setnoteReducer