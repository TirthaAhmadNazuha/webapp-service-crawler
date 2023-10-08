import { usingRef } from 'amber';
import Link from './link';

function BottomAppbar() {
  const linkRef = usingRef(null);
  const navRef = usingRef(null);
  linkRef.onChange = () => {
    Array.from(navRef.value.children).forEach((child) => child.classList.remove('active'));
    linkRef.value.classList.add('active');
  };
  navRef.onChange = () => {
    navRef.value.querySelector(`a[href="${window.location.pathname}"]`)?.classList.add('active');
  };
  return (
    <nav className="bottom-appbar" ref={navRef}>
      <Link onClick={(e, elem) => { linkRef.value = elem; }} href="/">
        <span className="material-symbols-outlined">home</span>
        <span className="label">Beranda</span>
      </Link>
      <Link onClick={(e, elem) => { linkRef.value = elem; }} href="/explore">
        <span className="material-symbols-outlined">search</span>
        <span className="label">Telusuri</span>
      </Link>
      <Link onClick={(e, elem) => { linkRef.value = elem; }} className="favorite" href="/favorite">
        <span className="material-symbols-outlined">favorite</span>
        <span className="label">Favorite</span>
      </Link>
      <Link onClick={(e, elem) => { linkRef.value = elem; }} href="/@adeveloperthis">
        <span className="material-symbols-outlined">person</span>
        <span className="label">Saya</span>
      </Link>
    </nav>
  );
}

export default BottomAppbar;
