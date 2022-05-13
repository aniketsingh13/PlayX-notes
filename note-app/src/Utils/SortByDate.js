
export const SortByDate=(note,sortByDate)=>{
   switch(sortByDate){
       case "old-to-new":
       return [...note].sort((a,b) => new Date (a.CreatedAt) - new Date (b.CreatedAt))
       case "new-to-old":
       return [...note].sort((a,b) => new Date (b.CreatedAt) - new Date (a.CreatedAt));
       default:
           return note;
   }
}