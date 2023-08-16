function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name} {props.surname}! How are you?</h1>;
            <p>Last senn on: {new Date().toDateString()}</p>
        </div>
    )
}
export default Welcome;