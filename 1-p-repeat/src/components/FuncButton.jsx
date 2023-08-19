function Button() {
    return(
    <div>
    <button>Push me AGAIN</button>
    <p>Last pushed: {new Date().toDateString()}</p>
    </div>
    );
}

export default Button;