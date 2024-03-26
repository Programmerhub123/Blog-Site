import  "./singlePost.css"
import Sidebar from '../sidebar/Sidebar'

export default function () {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="singlePostimg" />
      <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <div className="singlePostEdit">
      <i  className="singlePostIcon fa-regular fa-pen-to-square"></i>
      <i className="singlePostIcon fa-solid fa-trash"></i>
      </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Hamid Jabbar</b> </span>
        <span className="singlePostDate">1 Hour Ago </span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit ad sequi quos totam,
         deserunt soluta ea tenetur consequuntur obcaecati sint atque optio doloremque!
         Asperiores natus sint illo vitae perferendis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit ad sequi quos totam,
         deserunt soluta ea tenetur consequuntur obcaecati sint atque optio doloremque!
         Asperiores natus sint illo vitae perferendis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit ad sequi quos totam,
         deserunt soluta ea tenetur consequuntur obcaecati sint atque optio doloremque!
         Asperiores natus sint illo vitae perferendis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit ad sequi quos totam,
         deserunt soluta ea tenetur consequuntur obcaecati sint atque optio doloremque!
         Asperiores natus sint illo vitae perferendis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit ad sequi quos totam,
         deserunt soluta ea tenetur consequuntur obcaecati sint atque optio doloremque!
         Asperiores natus sint illo vitae perferendis.
         </p>
      </div>
    </div>
  )
}
