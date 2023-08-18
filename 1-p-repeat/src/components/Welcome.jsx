function Welcome(props) {
    return(
    <div>
    {/* // eslint-disable-next-line react/prop-types, react/prop-types */}
    <h1>Hello, {props.name} {props.surname}! How are you today?</h1>
    <p>Last seen on: {new Date().toDateString()}</p>
    </div>
    );
}

export default Welcome;