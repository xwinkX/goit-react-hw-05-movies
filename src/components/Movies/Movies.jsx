import { useState, useEffect } from "react";

const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        
    }, [])
    
    return (
        <ul></ul>
    )
}

export default Movies;