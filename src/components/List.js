import Item from '../components/Item';

function List({ listData, remove }) {
    return (
        <div className="list">
            {
                listData.map(item => (
                        <Item
                            key={item.id}
                            itemData={item}
                            remove={remove}
                        />
                    )
                )
            }
        </div>
    )
}

export default List;