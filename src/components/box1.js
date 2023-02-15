

function Box1(props) {    
    const on = props.on
    const toggle = props.toggle  
    const styles = {
        backgroundColor: on ? '#222222' : 'transparent'
    }


    return (
        <div 
            style={styles} 
            className="w-12 h-12 mt-5 border border-gray-500 rounded-lg mr-5 inline-block" 
            onClick={() =>props.toggle(props.id)}>
        </div>
    )
}

export default Box1;