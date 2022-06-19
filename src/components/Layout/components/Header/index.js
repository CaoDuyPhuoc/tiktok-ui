import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
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
import {
    faEnvelopeOpen,
    faComments,
} from '@fortawesome/free-regular-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

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
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                // Handle
                break;
            default:
                break;
        }
    };

    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <TippyHeadless
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>
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
                                delay={[0, 100]}
                                placement="bottom"
                            >
                                <button className={cx('menu-icon-user')}>
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={[0, 100]}
                                placement="bottom"
                            >
                                <button className={cx('menu-icon-user')}>
                                    <FontAwesomeIcon icon={faComments} />
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
                                    <img
                                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d9a4e2ab41aec2fb054d05d9b1322e40~c5_100x100.jpeg?x-expires=1655812800&x-signature=bJY36HE6vFWbQXG6mRhrcCI%2F40Y%3D"
                                        alt="Hoaa"
                                        className={cx('user-avatar')}
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
