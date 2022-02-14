import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
export default function NavBar() {
  const router = useRouter();

  const inputEl = useRef(null);
  const Click = () => {
    inputEl.current.focus();
    console.log(inputEl);
  };
  const getdata = async () => {
    axios
      .get(
        `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/이선웅?api_key=${process.env.NEXT_PUBLIC_RIOT}`
      )
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    getdata();
  });
  return (
    <nav>
      <img src='/vercel.svg' />
      <div>
        <Link href='/'>
          <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link href='/about'>
          <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
        </Link>
        <input ref={inputEl} type='text'></input>
        <button onClick={Click}>Focus the input</button>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
