import './Header.css'



function Header(){
    return(
      <div className='header'>
        <h1 className='logo'>Notifications <span className='notif-quantity'>3</span></h1>
        <h6 className='marking'>Mark as all read</h6>
      </div>
    )
}

export default Header;