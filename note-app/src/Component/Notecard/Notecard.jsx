
import "./Notecard.css";
 import {MdDelete} from "react-icons/md";
 import {BsArchiveFill} from "react-icons/bs";
 import {BiEdit} from "react-icons/bi";
import { useState } from "react";
import { Edit } from "../Index";


const Notecard = ({notes}) => {
  const {_id,title,text,noteColor,tags,priority,CreatedAt} = notes;
   const [isEdit,setIsEdit] = useState(false);

  
  return (
    <div className=' mt-l flex flex-center ' >
      <section className='notecard-Container' style={{backgroundColor: noteColor}}>
        <div className='notecard-header flex p-s'>
          <h2 className="f-m font-m">{title}</h2>
        </div>
        <div className="notecard-body pl-m">
          <p className=" font-m f-s  mb-l">{text}</p>
        </div>
        <div className=" mb-s flex notecard-footer" >
      <small className="   p-xss">
        Created At: {" "}
        {`${new Date(CreatedAt).toLocaleDateString()} ${new Date(CreatedAt).toLocaleString("en-Us",{
          hour: "numeric",
          minute: "numeric",
          hour12: true
        })}`}
      </small>
          <div >
         <button className="notecard-btn f-m pr-s" style={{backgroundColor: noteColor}} onClick={() => setIsEdit(prev => !prev)} ><BiEdit /></button>
         <button className="notecard-btn f-m pr-s" style={{backgroundColor: noteColor}}><BsArchiveFill /></button>
         <button className="notecard-btn f-m pr-s" style={{backgroundColor: noteColor}}><MdDelete /></button>
         </div>
        </div>
        <div className="flex">
        <div className="priority-Tag ml-s  f-s font-l p-xss">{priority}</div>
        <div className="ml-s">{tags.length > 0 &&    <div className="noteCard-tag f-s font-l p-xss"> {tags}</div>}</div> 
        </div>
      </section>
       {isEdit && (
        <Edit notes={notes} setIsEdit={setIsEdit}/>
       )}
    </div>
  )
}

export default Notecard