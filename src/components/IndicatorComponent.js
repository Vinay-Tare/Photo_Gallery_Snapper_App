function Indicator({message}) {
    return (
        <div key={message} className="indicator">
            <h5>{message} Photos</h5>
        </div>
    );
}

export default Indicator;
