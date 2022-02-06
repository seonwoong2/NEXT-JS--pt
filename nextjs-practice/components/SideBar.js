import Styles from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className={Styles.container}>
      <ul className={Styles.ul}>
        <li className={Styles.list}>Login</li>
        <li className={Styles.list}>Logout</li>
      </ul>
    </div>
  );
}
