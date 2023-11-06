export const ContactList = ({ items, onDelete }) => {

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <p>{item.name}: {item.number}</p>
                    <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
};