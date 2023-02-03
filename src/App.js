import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./component/Home";
import { useMediaQuery } from 'react-responsive'



function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const database = [
    {
      username: "jaenam1212@gmail.com",
      password: "1212"
    },
    {
      username: "01052720140",
      password: "1234"
    },
    {
      username: "12",
      password: "12"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {

    try{
    //페이지 다시 로드 방지
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    // 사용자 로그인 정보 찾기
    const userData = database.find((user) => user.username === uname.value);

    // 사용자 정보 비교
    if (userData) {
      if (userData.password !== pass.value) {
        // 잘못된 암호
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // 사용자 이름을 찾을 수 없음
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    } catch (e) {
      alert("Failed to login")
    }
  };

  // 오류 메시지에 대한 JSX 코드 생성
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // 로그인 양식의 JSX 코드
  const LoginForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="loginBox">
          <input type="text" name="uname"  placeholder="Email or phone number" className="bigBtn"/>
          {renderErrorMessage("uname")}<br/>
          <input type="password" name="pass"  placeholder="Password" className="bigBtn"/>
          {renderErrorMessage("pass")}
        </div>
        <div className="btnMargin">
          <button type="submit" className="loginBtn" >Log In</button>
          
        </div>
        <div>
          <button  className="singBtn">Sign Up</button>
        </div>
        <div className="btnMargin">
          <a href="/findFW" className="findFw">Find Kakao Account or Password</a>
        </div>
      </form>
    </div>
  );
  if(!isSubmitted){
    return(
      <div>
         <Mobile>
        <p className="WelcomMain">Welcome to KakaoTalk</p>
        <p className="WelcomSuv">if you have a Kakao Account,<br/>
        log in with your email or phone number.</p>
        {LoginForm}
        </Mobile>
      </div>
    )
  }
  return (
    <div>
      <Mobile>
     <Router>
       <Routes>
         <Route Link path="/*" element={<Home />} />
       </Routes>
     </Router>
     </Mobile>
     </div>
  );
}

export default App;
