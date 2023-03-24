import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src = "" alt=""/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Quoc Dat</span>
                    <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;