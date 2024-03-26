import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://plus.unsplash.com/premium_photo-1675615649455-d72efb381550?q=80&w=195&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fugit perferendis 
            adipisicing elit. Blanditiis fugit perferendis
            </p>
        </div>
        <div>
          <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className='sidebarList'>
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
          </div>
          <div className="sidebarItem">
         < span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
         <i className="sidebarIcons fa-brands fa-square-facebook"></i>
                <i className=" sidebarIcons fa-brands fa-square-twitter"></i>
                <i className="sidebarIcons fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcons fa-brands fa-square-instagram"></i>

         </div>
          </div>
        </div>
    </div>
  )
}
