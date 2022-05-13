
export const Tags=(note,tags)=>{
    if(tags.length  ){
        return note.filter(notes => tags.includes(notes.tags))
    }else {
        return note;
    }

}