import { IconButton, useMediaQuery } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
//Icons
import Facebook from "../../Images/Icons/facebook.svg";
import Instagram from "../../Images/Icons/instagram.svg";
import Twitter from "../../Images/Icons/twitter.svg";
import LinkedIn from "../../Images/Icons/linkedIn.svg";
//Style
import styles from "./container.module.scss";

export default function Container(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const history = useHistory();
  const location = useLocation();
  const matches = useMediaQuery("(max-width:650px)");
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <IconButton onClick={() => history.push("/")}>
          <img
            src='https://s2.svgbox.net/octicons.svg?ic=home&color=000'
            width='32'
            height='32'
            alt='home'
          />
        </IconButton>
        {matches ? (
          <IconButton aria-label='menu'>
            <img
              src='https://s2.svgbox.net/hero-solid.svg?ic=menu-alt-3&color=000'
              width='32'
              height='32'
              alt='menu'
            />
          </IconButton>
        ) : (
          <div>
            <Link
              className={
                location.pathname === "/works" ? styles.activeLink : ""
              }
              to='/works'
              data-content='Works'
            >
              <span>Works</span>
            </Link>
            <Link
              to='blog'
              className={location.pathname === "/blog" ? styles.activeLink : ""}
              data-content='Blog'
            >
              <span>Blog</span>
            </Link>
            <Link
              to='contact'
              className={
                location.pathname === "/contact" ? styles.activeLink : ""
              }
              data-content='Contact'
            >
              <span>Contact</span>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.children}>{props.children}</div>

      <div className={styles.footer}>
        <div>
          <IconButton aria-label='facebook'>
            <img src={Facebook} alt='facebook' />
          </IconButton>
          <IconButton aria-label='instagram'>
            <img src={Instagram} alt='instagram' />
          </IconButton>
          <IconButton aria-label='twitter'>
            <img src={Twitter} alt='twitter' />
          </IconButton>
          <IconButton aria-label='linkedIn'>
            <img src={LinkedIn} alt='linkedIn' />
          </IconButton>
        </div>
        <div>
          Copyright &copy;{new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </div>
  );
}
