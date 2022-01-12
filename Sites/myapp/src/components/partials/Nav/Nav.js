
export const Nav = (props) => {
    return (
        <nav>
            <ul>
                {props.items.map((item, key) => {
                    return (
                        //key for ellers brokker den sig (skal have en unik key)
                        <ListItem key={key} name={item} />
                    )
                })}
            </ul>
        </nav>
    )
}

const ListItem = (props) => {
    return <li><a href="#">{props.name}</a></li>
}
