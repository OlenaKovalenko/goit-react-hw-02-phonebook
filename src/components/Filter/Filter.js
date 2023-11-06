export const Filter = ({ value, onFind }) => {
    return (
        <>
            <h3>Find contacts by name</h3>
            <input type="text" name="name" value={value} required onChange={onFind}/>
        </>
    )
}
