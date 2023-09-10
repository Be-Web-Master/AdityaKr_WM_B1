const deleteNotes = (idx) =>{
    setNotes((notes)=>{
     return notes.filter((note,id)=>{
       return id !== idx
     })
    })
    setModal(false)
    setTitle('')
    setDisc('')
 }
 const editNotes =(idx) =>{
    setTitle(notes[idx].title);
    setDisc(notes[idx].disc);
    setModal(true);
 }




export const List = () => {


    const [notes, setNotes] = useState([])
    return (
        <div className="Notes">
        {notes.map((notes,idx)=>{
           return <div className="note" key={idx}>
             <h1 className='h1'>
               {notes.title}
               <span className='delete' onClick={()=>deleteNotes(idx)}>❌</span>
               <span className='edit' onClick={()=>editNotes(idx)}>✏️</span>
             </h1>
             <h2 className='h2'>{notes.disc}</h2>
           </div>
        })}
     </div>
    )
}
export default List
