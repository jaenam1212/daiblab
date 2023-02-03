import './home.css'
import Nav from './Nav';
import NavBottom from './NavBottom'
import KakaoImg from './kakaoImg.png'

const Home = () => {
  let Profile = "KakaoTalk";
  let ProfileImg = <img src={KakaoImg} alt='kakao' className='item1-img' />;
  let Content = "Please check My Kakao Account Info";
  let Notification = <i className="fas fa-bell"></i>;
  let Time = "12:30";

  return (
    <div>
      <Nav />
      <div className="grid-container">
        <div className="item1">{ProfileImg}</div>
        <div className="item2">
          <div className="item2-1">{Profile}</div>
          <div className="item2-2">{Notification}</div>
        </div>
        <div className="item3">{Content}</div>
        <div className="item4">{Time}</div>
      </div>
      <NavBottom />
    </div>
  );
};

export default Home;