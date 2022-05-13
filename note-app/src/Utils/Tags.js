
export const Tags=(note,tags)=>{
    if(tags.length !== 0){
        return note.filter(notes => tags.includes(notes.tags))
    }else {
        return note;
    }

}