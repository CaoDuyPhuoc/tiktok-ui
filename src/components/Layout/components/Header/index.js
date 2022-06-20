import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisV,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';
import Search from '../Search';
import { InboxIcon, MessageIcon } from '../../../Icons';
import { Link } from 'react-router-dom';
import routesConfig from '../../../../config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en-US',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi-VN',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/viewprofile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/getcoins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                // Handle
                break;
            default:
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                outlineBlack
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Tippy
                                content="Message"
                                delay={[0, 50]}
                                placement="bottom"
                            >
                                <button className={cx('menu-icon-user')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={[0, 100]}
                                placement="bottom"
                            >
                                <button className={cx('menu-icon-user')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                outlineBlack
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary>Log In</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? USER_MENU : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        <span className={cx('menu')}>
                            {currentUser ? (
                                <>
                                    <Image
                                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d9a4e2ab41aec2fb054d05d9b1322e40~c5_100x100.jpeg?x-expires=1655812800&x-signature=bJY36HE6vFWbQXG6mRhrcCI%2F40Y%3D"
                                        alt="Hoaa"
                                        className={cx('user-avatar')}
                                        // fallback='...'
                                    />
                                </>
                            ) : (
                                <FontAwesomeIcon
                                    className={cx('menu-icon')}
                                    icon={faEllipsisV}
                                />
                            )}
                        </span>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
