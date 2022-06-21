import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';
import { SearchIcon } from '../../../Icons';
import { useDebounce } from '../../../../hooks';
import * as request from '../../../../utils/request';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 800);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHiddenResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            try {
                const res = await request.get('users/search', {
                    params: {
                        q: debounce,
                        type: 'less',
                    },
                });

                setSearchResult(res.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchApi();
    }, [debounce]);

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <TippyHeadless
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return (
                                    <AccountItem
                                        key={result.id}
                                        data={result}
                                        onClick={() => {
                                            setShowResult(false);
                                        }}
                                    />
                                );
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHiddenResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
