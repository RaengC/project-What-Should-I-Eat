import React, {useState, useMemo} from 'react';

export const useSortableData = (items, config = {}) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo( () => {
        let sortedItems = [...items];
       console.log('string',sortConfig)
        if (sortConfig !== null) {
            sortedItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort};
}

