import logo from '../assets/sadev.png';

const NAVBAR_DATA = {
  LOGO_DATA: {
    SRC_LINK: logo,
    ALT_TEXT: 'Sakshi Agarwal',
    LOGO_LINK: '/'
  },
  NAV_LINKS: [
    {
      LINK_NAME: 'About',
      LINK_HREF: '/about',
      KEY: 'nav-about',
      IS_ASSET: false
    },
    {
      LINK_NAME: 'Projects',
      LINK_HREF: '/projects',
      KEY: 'nav-projects',
      IS_ASSET: false
    },
    {
      LINK_NAME: 'Ventures',
      LINK_HREF: '/ventures',
      KEY: 'nav-ventures',
      IS_ASSET: false
    }
  ],
  RIGHT_SECTION: {
    LINK_TEXT: 'Say, Hi',
    LINK_HREF: '/message'
  }
};

export default NAVBAR_DATA;
