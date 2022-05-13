
export const Priority=(note,priority)=>{
     if(priority.length !==0){
         return note.filter(notes => priority.includes(notes.priority))
     }else{
         return note;
     }
}