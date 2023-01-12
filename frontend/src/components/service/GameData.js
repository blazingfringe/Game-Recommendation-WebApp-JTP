import { useEffect, useState } from "react"

export function GetGames() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/game-list")
            .then(response => response.json())
            .then((json) => {
                setGames(json);
            })
    }, [])
    return games
};


export function GetRecommendations(selectedGames,) {
    const [recs, setRecs] = useState(null)
    useEffect(() => {
        const getRecommendations = async () => {
            setRecs(null)
            await fetch('http://localhost:8000/api/recommendations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selectedGames)
            }).then((resp) => {
                return resp.json()
            }).then((res) => {
                setRecs(res)
            });
        }
        if (selectedGames.length > 4) {

            getRecommendations()
        }
    }, [selectedGames])
    return recs
}
