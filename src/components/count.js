function Count(props) {
    return(
        <div className="flex items-center">                  
            <p className="border rounded-full border-black p-16 bg-white">{props.number}</p>                    
        </div>
    )
}

export default Count;