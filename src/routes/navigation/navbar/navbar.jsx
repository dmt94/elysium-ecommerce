import './navbar.scss';
import clear from './clear.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-navbar flex-c'>
      <div className='top-navbar flex-r'>
        <Link href="/" className='link' to='/cart'>cart</Link>
        <Link href="/" className='link' to='/sign-in'>sign in</Link>
        <div className='dark-light-toggle-div'></div>
      </div>
      <div className='title-div flex-c'>
        <Link href='/' to='/' className='title'>ELYSIAN</Link>
      </div>
      <div className='search-div flex-r'>
        <span className='search-arrow'>search {'>>'} </span>
        <div className='flex-c search-line-div'>
         <input type="text" id='search-bar' placeholder="" />
         <hr />
        </div>
        <button className='clear-btn-div'>
          <img id='clear-btn' src={clear} alt="clear search button" />
        </button>
      </div>
      <div className='update-div flex-r'>
        <Link className='link' to='/new'>new</Link>
        <Link className='link' to='/backinstock'>back in stock</Link>
      </div>
      <div className='nav-link-div'>
        <Link className='link nav-link' to='/sale'>SALE</Link>
        <Link className='link nav-link' to='/tops'>TOPS</Link>
        <Link className='link nav-link' to='/bottoms'>BOTTOMS</Link>
        <Link className='link nav-link' to='/dresses'>DRESSES</Link>
        <Link className='link nav-link' to='/jackets'>JACKETS</Link>
        <Link className='link nav-link' to='/shoes'>SHOES</Link>
      </div>
    </div>
  )
}

export default Navbar;