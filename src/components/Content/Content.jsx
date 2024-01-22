import React from 'react';
import List_item from '../List_item/List_item';
import styles from './Content.module.scss';
import Add_button from '../Add_button/Add_button';


const Content = () => {

    const dales = [{
        id: 1, name: "Посмотреть урок по реакт", isCheckd: true, color: 'green'
    },
    { id: 2, name: "Покодить", isCheckd: false, color: 'red' },
    { id: 3, name: "Посмотреть мультфильм с детьми", isCheckd: true, color: 'black' },
    { id: 4, name: "Почитать теорию 23ей недели", isCheckd: false, color: 'blue' },
    { id: 5, name: "Покодить проект с Димычем", isCheckd: false, color: 'green' }];

    return (
        <main className={styles.content}>
            <ul>
                {dales.map((dale) =>
                    <List_item className={styles.list}
                        key={dale.id}
                        name={dale.name}
                        color={dale.color} />
                )}
            </ul>
            <Add_button />
        </main>
    );
}

export default Content;