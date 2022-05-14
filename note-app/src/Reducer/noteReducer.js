
const noteReducer =(state,action)=>{
  
    switch(action.type){
        case "ADD_NOTE":
            return {...state,notes:[...state.notes,{...action.payload}]};
            case "EDIT_NOTES":
                return {
                    ...state,
                    notes: state.notes.map((note) =>
                      note._id === action.payload._id ? { ...note, ...action.payload } : note
                    ),
                }
                case "ARCHIEV_NOTE":
                    return{
                        ...state,
                        archives:[...state.archives,{...action.payload}],
                        notes :state.notes.filter(item => item._id !== action.payload._id)                    
                    }
                    case "UNARCHIEVED_NOTE":
                        return{
                            ...state,
                            archives: state.archives.filter(item => item._id !== action.payload._id),
                            notes:[...state.notes,{...action.payload}]
                        }
                     case "DELETE_NOTE":
                         return {
                             ...state,
                             notes:state.notes.filter(item => item._id !== action.payload._id),
                             trash:[...state.trash,{...action.payload}]
                         }
                         case "RESTOR_TRASHNOTE":
                             return {
                                 ...state,
                                 trash: state.trash.filter(item => item._id !== action.payload._id),
                                 notes: [...state.notes,{...action.payload}]
                             }
                             case "DELETE_FOREVER":
                                 return{
                                     ...state,
                                     trash: state.trash.filter(item => item._id !== action.payload)
                                 }
            default:
                throw new Error("Action type not found");
         
    }
}

export {noteReducer}