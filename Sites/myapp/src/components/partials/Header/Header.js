export const Header = (props) => {

    return (
        <header>
            <h1>{(props.pagetitle) ? props.pagetitle : "Tordis har også lavet det her"}</h1>
        </header>
    )
}