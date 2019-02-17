import * as React from 'react';
import styles from './SearchItem.css';

export const SearchItem = ({
    rank, disabled, children, ...props
}) => (
    <div { ...props } className={ styles.searchItem }>
        {disabled ? (
            children
        ) : (
            <a href={ `cyb://${children}` }>
                { children }
            </a>
        )}
        <span>{rank}</span>
    </div>
);
