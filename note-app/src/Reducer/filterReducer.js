

const filterReducer = (state,{type,payload}) => {
  
     switch(type){
          case  "SORT_BY_PRIORITIES":
            const updatedPriorites = state.priorities.includes(payload) ? state.priorities.filter((item) => item !==payload) : [...state.priorities,payload]
          return{...state,priorities: updatedPriorites};
          case "SORT_BY_TAGS":
            const updatedTags = state.tags.includes(payload) ? state.tags.filter(item => item !== payload) : [...state.tags,payload]
            return{...state,tags:updatedTags}
            case "SORT_BY_DATE":
              return {...state,sortByDate: payload}
              case "CLEAR_ALL":
                return {
                  priorities:[],
                  tags: [],
                  sortByDate: ""
                }
          default:
          throw new Error("Action type not found");
     }
    
}

export default filterReducer