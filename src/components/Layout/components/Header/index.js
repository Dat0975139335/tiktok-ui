import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark ,faEllipsisVertical,faMagnifyingGlass,faSignIn,faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult,setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        },0);
    },[]);

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt='TikTok'/>
            <Tippy 
                  visible = {searchResult.length > 0} 
                  render={attrs => (
                      <div className={cx('search-result')} tabIndex = "-1" {...attrs}>
                        <PopperWrapper>
                          <h4 className={cx('search-title')}>
                            Accounts
                          </h4>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                        </PopperWrapper>
                       </div>

                  )}
                >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and video" spellCheck = {false}/>

                    <buton className = {cx('clear')}>
                        <FontAwesomeIcon icon = {faCircleXmark}/>
                    </buton>

                    <FontAwesomeIcon className= {cx('loading')} icon = {faSpinner}/>

                    <buton className = {cx('search-btn')}>
                         <FontAwesomeIcon icon = {faMagnifyingGlass}/>
                    </buton>
                </div>
            </Tippy>
            <div className= {cx('actions')}>
               <Button text>Upload</Button>
               <Button primary>Log in</Button>
               <Tippy 
                  visible
                  render={attrs => (
                      <div className={cx('search-result')} tabIndex = "-1" {...attrs}>
                        <PopperWrapper>
                          <h4 className={cx('search-title')}>
                            Accounts
                          </h4>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                        </PopperWrapper>
                       </div>

                  )}
                >
                    <Button className={cx('btn-more')}>
                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                    </Button>

                </Tippy>
            </div>
        </div>
    </header>
}

export default Header;
