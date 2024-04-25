import React from 'react';
import "./Signin.css";

function Signin (){
    return(
        <div>
            <section className='login'>
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">//Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.//<path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"/></svg>
                    <a className="nav-logoword">CROSSEOM</a>    
                </div>
                <form action="">
                    <div className="input">
                        <input className="input-id" type="text" required autoComplete="off"></input>
                        <label for= "input-id">아이디</label>
                    </div>
                    <div className="input">
                        <input className="input-pw" type="password" required autoComplete="off"></input>
                        <label for= "input-pw">패스워드</label>
                    </div>
                    <div className="btn">
                        <button type="submit"> 로그인 </button>
                    </div>
                </form>
                <div className="forget">
                    <a href="/">패스워드를 잊으셨나요?</a>
                </div>
            </section>

                <script>
                    let id = $("#input-id");
                    let pw = $("#input-pw");
                    let btn = $("#input-btn");

                    $btn.on('click', function(){
                    
                    })
                </script>
        </div>
    )
}

export default Signin;