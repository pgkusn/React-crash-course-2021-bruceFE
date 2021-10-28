function Item({itemData, remove}) {
    const removeItem = () => {
        remove(items => items.filter(item => item.id !== itemData.id));
    }
    return (
        <div className="item">
            <div>
                <p>{ itemData.note }</p>
                <p>{ `${itemData.date} ${itemData.time}` }</p>
            </div>
            <button className="remove" onClick={removeItem}>刪除</button>
        </div>
    )
}

export default Item;