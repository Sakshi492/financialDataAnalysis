import React, { useState } from 'react';
import NAVBAR_DATA from './../../constants/navBar';
import { Link } from 'react-router-dom';
import './styles/navBar.scss';

function NavBar() {
  const [drawerOpen, updateDrawerOpen] = useState(false);

  const handleDrawerOpen = () => updateDrawerOpen(true);
  const handleDrawerClose = () => updateDrawerOpen(false);

  const navLinksElem = NAVBAR_DATA.NAV_LINKS.map(link => {
    let linkElem = null;
    if (link.IS_ASSET) {
      linkElem = (
        <a
          className="nav-link"
          href={link.LINK_HREF}
          target="_blank"
          rel="noreferrer"
          key={link.KEY}
        >
          {link.LINK_NAME}
        </a>
      );
    } else {
      linkElem = (
        <Link className="nav-link" to={link.LINK_HREF} key={link.KEY}>
          {link.LINK_NAME}
        </Link>
      );
    }
    return linkElem;
  });

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link
          className="navbar-logo"
          key={NAVBAR_DATA.LOGO_DATA.ALT_TEXT}
          to={NAVBAR_DATA.LOGO_DATA.LOGO_LINK}
        >
          <div
            style={{
              backgroundImage: `url(${NAVBAR_DATA.LOGO_DATA.SRC_LINK})`
            }}
            className="logo-img"
          />
        </Link>
        <div className="nav-link-list">{navLinksElem}</div>
        <div className="nav-right-section">
          <Link
            className="nav-contact-btn"
            to={NAVBAR_DATA.RIGHT_SECTION.LINK_HREF}
          >
            {NAVBAR_DATA.RIGHT_SECTION.LINK_TEXT}
          </Link>
          <div className="mobile-nav-btn" onClick={handleDrawerOpen}></div>
        </div>
      </div>
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="close-ctr">
          <div className="close-button" onClick={handleDrawerClose}></div>
        </div>
        <div className="nav-list" onClick={handleDrawerClose}>
          {navLinksElem}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
