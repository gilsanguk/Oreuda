import styles from "./Landing.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const chrome = window.chrome;

  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const currentUrl = window.location.href;
  console.log("Landing : " + currentUrl);

  // 이미 로그인 상태면 main 페이지로 보내준다.
  useEffect(() => {
    // URL 쿼리 문자열 가져오기
    const queryParams = new URLSearchParams(window.location.search);

    // 쿼리 파라미터에서 accessToken과 refreshToken 추출하기
    const accessTokenParam = queryParams.get("Authorization");
    const refreshTokenParam = queryParams.get("refreshToken");
    if (accessTokenParam && refreshTokenParam) {
      setAccessToken(accessTokenParam);
      setRefreshToken(refreshTokenParam);
      chrome.cookies.set({
        url: "http://localhost:3000",
        name: "atk",
        value: accessTokenParam,
      });
      chrome.cookies.set({
        url: "http://localhost:3000",
        name: "rtk",
        value: refreshTokenParam,
      });
    } else {
      chrome.cookies.get(
        { url: "http://localhost:3000", name: "atk" },
        function (cookie) {
          if (cookie) {
            console.log(cookie.value);
            // navigate("/main");
          } else {
            console.log("The cookie is not found.");
            setIsLoading(true);
          }
        }
      );
    }
  }, [accessToken]);

  window.addEventListener("beforeunload", () => {
    console.log("The browser window is closing.");
  });

  const login = () => {
    const GITHUB_OAUTH_URL = "https://github.com/login/oauth/authorize";
    // const CLIENT_ID = "tykimdream";
    const REDIRECT_URI = "http://localhost:3000";

    // window.location.href = `http://192.168.31.233:8090/oauth2/authorization/github`;
    // window.location.href = "https://naver.com"
    console.log("logging");
    // chrome.windows.create({ url: "https://www.naver.com", type: "popup", width: 800, height: 600 });
    // 창을 열 때
    chrome.windows.create(
      {
        url: "http://192.168.31.233:8090/oauth2/authorization/github",
        type: "popup",
        width: 800,
        height: 600,
      },
      function (newWindow) {
        // 창이 닫히는 이벤트를 등록
        chrome.windows.onRemoved.addListener(function (windowId) {
          if (newWindow.id === windowId) {
            console.log("창이 닫혔습니다.");
          }
        });
      }
    );

    // chrome.tabs.update({
    //   url: "http://192.168.31.233:8090/oauth2/authorization/github",
    // });

    // chrome.cookies.set({
    //   url: "http://localhost:3000",
    //   name: "atk",
    //   value: "1234",
    // });
  };
  if (isLoading) {
    return (
      <div className={styles.landing}>
        <div className={styles.logoDiv}>
          <img className={styles.logo} src="/Frame 36.png"></img>
          <div className={styles.logoTitle}>O R E U D A</div>
        </div>
        <Link to="/main">
          <div className={styles.loginBtn} onClick={login}>
            Github LOG IN
          </div>
        </Link>
        <div className={styles.footer}>
          powered by{" "}
          <a
            href="https://www.notion.so/a1184fd74f9142b8ad5880e41a1e590d"
            // target="_blank"
          >
            햣
          </a>
        </div>
      </div>
    );
  }
};

export default Landing;
