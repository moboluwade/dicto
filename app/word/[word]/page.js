export default async function AboutWord({ params }) {
    const word = params.word
    const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    const wordData = (await res.json())[0]
    // const {word:newWord, phonetic, phonetics, origin, meanings} = wordDescription[0]

    return (
        <main>
            {/* <pre>{JSON.stringify(wordData, null, 2)}</pre> */}
            <div className="word-definition">
                <h2>{wordData.word}</h2>
                <div className="phonetics">
                    {wordData.phonetics.map((phonetic, index) => (
                        <div key={index} className="phonetic">
                            <p>{phonetic.text}</p>
                            {phonetic.audio && <audio controls src={phonetic.audio}></audio>}
                        </div>
                    ))}
                </div>
                <p><strong>Origin:</strong> {wordData.origin}</p>
                {wordData.meanings.map((meaning, index) => (
                    <div key={index} className="meaning">
                        <h3>{meaning.partOfSpeech}</h3>
                        {meaning.definitions.map((definition, index) => (
                            <div key={index} className="definition">
                                <p><strong>Definition:</strong> {definition.definition}</p>
                                <p><strong>Example:</strong> {definition.example}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    )
}