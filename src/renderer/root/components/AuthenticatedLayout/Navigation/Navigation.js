/* eslint-disable consistent-return */

import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { string } from 'prop-types';
import { noop } from 'lodash';

import DAppsIcon from 'shared/images/icons/dapps.svg';
import AccountIcon from 'shared/images/icons/account.svg';
import SettingsIcon from 'shared/images/icons/settings.svg';
import LogoutIcon from 'shared/images/icons/logout.svg';
import Tooltip from 'shared/components/Tooltip';

import styles from './Navigation.scss';

export default function Navigation(props) {
  return (
    <nav className={classNames(styles.navigation, props.className)}>
      <ul className={styles.group}>
        <li>
          <NavLink exact to="/browser" draggable={false} className={styles.link}>
            <Tooltip id="browser" overlay="Browser">
              <DAppsIcon aria-describedby="browser" />
            </Tooltip>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/account" draggable={false} className={styles.link}>
            <Tooltip id="account" overlay="Account">
              <AccountIcon aria-describedby="account" />
            </Tooltip>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/settings" draggable={false} className={styles.link}>
            <Tooltip id="settings" overlay="Settings">
              <SettingsIcon aria-describedby="settings" />
            </Tooltip>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/logout" draggable={false} className={styles.link}>
            <Tooltip id="logout" overlay="Logout">
              <LogoutIcon aria-describedby="logout" />
            </Tooltip>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  className: string
};

Navigation.defaultProps = {
  className: noop
};
