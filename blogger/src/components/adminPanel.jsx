import { GrAdd } from "react-icons/gr";
function AdminPanel() {
  function HandleClick() {
   document.querySelector('.ap__select-create').classList.toggle('ap__select-create-active')

  }
  return (
    <>
    <div className="admin-panel">
      <button className="ap__add-button" onClick={HandleClick}>
        Create
      </button>
      <div className="ap__select-create">
        <button className="ap__select-create-button" onClick={(e)=>{
          window.location.replace('/admin/writeup')
        }}>Write Up</button>
        <button className="ap__select-create-button" onClick={(e)=>{
          window.location.replace('/admin/note')
        }}>Note</button>
      </div>

    </div>

    </>
  );
}
export default AdminPanel;
