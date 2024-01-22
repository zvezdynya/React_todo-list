import { useState } from 'react';
import styles from './List_item.module.scss';

const List_item = (props) => {

    const [checked, setChecked] = useState(false);

    const handelChecked = () => {
        setChecked(!checked);
    }

    return (
        <div className={styles.item} {...props}>
            <input
                type="checkbox"
                className={styles.checkbox}
                onClick={handelChecked}>
            </input>
            <label
                style={{ color: props.color }}
                className={`${styles.label} ${checked && `${styles.checked_label}`}`}>
                {props.name}
            </label>
            <button className={styles.button}>Удалить</button>
        </div >
    );
}

export default List_item;