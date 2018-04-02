import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import NotificationList from "components/NotificationList";

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/">
          <img
            src={require("images/logo.png")}
            className={styles.logo}
            alt={context.t("Logo")}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder={context.t("Search")}
            className={styles.searchInput}
            value={props.value}
            onChange={props.onInputChange}
          />
        </form>
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <Link to="/explore" target="_self">
            <Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <Ionicon
            icon="ios-heart-outline"
            fontSize="28px"
            color="black"
            onClick={props.openNotifications}
          />
        </div>
        {props.seeingNotifications && (
          <NotificationList
            closeNotifications={props.closeNotifications}
            notificationList={props.notificationList}
          />
        )}
        <div className={styles.navIcon}>
          <Link to={{ pathname: `/${props.username}` }}>
            <Ionicon icon="ios-person-outline" fontSize="32px" color="black" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

Navigation.propTypes = {
  openNotifications: PropTypes.func.isRequired,
  closeNotifications: PropTypes.func.isRequired,
  notificationList: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Navigation;