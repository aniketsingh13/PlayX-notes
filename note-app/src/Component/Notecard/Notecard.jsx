
import "./Notecard.css";
import {BsPin} from "react-icons/bs";
 import {MdDelete} from "react-icons/md";
 import {BsArchiveFill} from "react-icons/bs";
 import {BiEdit} from "react-icons/bi";


const Notecard = ({notes}) => {
  const {title,text} = notes;
  return (
    <div className=' mt-l flex flex-center ' >
      <section className='notecard-Container'>
        <div className='notecard-header flex p-s'>
          <h2 className="f-m font-m">{title}</h2>
          <button className="notecard-btn f-m"><BsPin /></button>
        </div>
        <div className="notecard-body">
          <p className=" font-m f-s pl-s mb-l">{text}</p>
        </div>
        <div className="notecard-footer flex mb-s ">
         <button className="notecard-btn f-m pr-s"><BiEdit /></button>
         <button className="notecard-btn f-m pr-s"><BsArchiveFill /></button>
         <button className="notecard-btn f-m pr-s"><MdDelete /></button>
        </div>
      </section>
      
    </div>
  )
}

export default Notecard