import './Header.css'




function Header({markAsRead,userData}){
    return(
      <div className='header'>
        <h1 className='logo'>Notifications <span className='notif-quantity'>{userData.filter(item => !item.read ).length }</span></h1>
        <h6 onClick={markAsRead}className='marking'>Mark as all read</h6>
      </div>
    )
}

export default Header;