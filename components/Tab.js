// components/Tab.js
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './Tab.module.css';

const Tab = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (label) => {
        setActiveTab(label);
    };

    const handleSwipe = useSwipeable({
        onSwipedLeft: () => switchTab(1),
        onSwipedRight: () => switchTab(-1)
    });

    const switchTab = (direction) => {
        const currentIndex = children.findIndex(child => child.props.label === activeTab);
        const newIndex = (currentIndex + direction + children.length) % children.length;
        setActiveTab(children[newIndex].props.label);
    };

    return (
        <div {...handleSwipe}>
            <ul className={styles.tabs}>
                {children.map((tab, index) => (
                    <li key={index}
                        className={tab.props.label === activeTab ? `${styles.active}` : ''}
                        onClick={() => handleClick(tab.props.label)}
                        style={{ cursor: 'pointer' }}>
                        {tab.props.label}
                    </li>
                ))}
            </ul>
            <div className={styles.content}>
                {children.map((content, index) => {
                    if (content.props.label === activeTab) return <div key={index}>{content.props.children}</div>;
                    return null;
                })}
            </div>
        </div>
    );
};

export default Tab;

