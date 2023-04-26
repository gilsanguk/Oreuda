import st from "./layout.module.scss";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={st.body}>
        <nav className={st.nav}>
          <div>
            <header className={st.header}>
              <Image
                className={st.img}
                src="/images/character/oreuda.svg"
                alt=""
                width={40}
                height={40}
              />
              OREUDA
            </header>
            <ul>
              <Link href="" className={st.link}>
                <Image
                  className={st.img}
                  src="/images/nav/home.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                홈
              </Link>
            </ul>
            <ul>
              <Link href="/repository" className={st.link}>
                <Image
                  className={st.img}
                  src="/images/nav/folder.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                레포지토리
              </Link>
            </ul>
            <ul>
              <Link href="/readme" className={st.link}>
                <Image
                  className={st.img}
                  src="/images/nav/document.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                리드미
              </Link>
            </ul>
          </div>
          <ul>
            <Link href="" className={st.link}>
              <Image
                className={st.img}
                src="/images/nav/logout.svg"
                alt=""
                width={24}
                height={24}
              />
              로그아웃
            </Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
