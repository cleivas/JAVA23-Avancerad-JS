function LastSearches({searchHistory, setSearchHistory}) {

    function handleClick(event){
        console.log(event.target.innerText)

        setSearchHistory( current => {
            const newState = [...current]; //klona arrayen innan ändringar görs
            newState.push(event.target.innerText.trim())
            if(newState.length > 3) newState.shift();

            // console.log(newState)
            return newState;
        })
    }

    return ( <div>
        {searchHistory.map((language, i) => <span onClick={handleClick} key={i}> {language}</span>)}
    </div> );
}

export default LastSearches;