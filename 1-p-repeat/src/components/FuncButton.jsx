function Button(props) {
    return(
    <div>
    <button>Push me AGAIN</button>
    <p>Last pushed: {new Date().toDateString()}</p>
    <button>{props.buttonText}</button>
    </div>
    );
}

export default Button;