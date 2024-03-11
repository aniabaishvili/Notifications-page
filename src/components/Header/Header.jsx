import './Header.css'
const markAsRead = () => {
  const clone = userData.map(item => {
    item.read = true;
    return item;
  })
  console.log(clone);

}



function Header({markAsRead}){
    return(
      <div className='header'>
        <h1 className='logo'>Notifications <span className='notif-quantity'>3</span></h1>
        <h6 onClick={markAsRead}className='marking'>Mark as all read</h6>
      </div>
    )
}

export default Header;