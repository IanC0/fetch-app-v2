import { useEffect, useState } from 'react'


const MyFetch = () => {
    const [facts, setFacts] = useState([])
    const [error, setError] = useState(null)    
    
    useEffect(() => {
    const fetchApiFacts = async () => {
        try{
            const response = await fetch('https://cat-fact.herokuapp.com/facts');
        if (!response.ok) {
            throw new Error(response.statusText);
        }    
        const data = await response.json();
        setFacts(data);    
    } catch (err) {
        setError('Could not fetch data');
        console.log(err.message);
    }
    }


    fetchApiFacts()
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {facts.map((x) => (
                <p>{x.text}</p>
            ))}
        </div>
    )
    }

export default MyFetch