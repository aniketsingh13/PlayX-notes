
export const Priority=(note,priority)=>{
     if(priority.length){
         return note.filter(notes => priority.includes(notes.priority))
     }else{
         return note;
     }
}