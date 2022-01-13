import './Nav.scss'

export const Nav = (props) => {
    return (
        <nav>
            <ul>
                {props.items.map((item, key) => {
                    return (
                        //key for ellers brokker den sig (skal have en unik key) (key starter på 0 og går op efter)
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
