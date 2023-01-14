import { useEffect, useState } from "react"

/**
 * Component for fetching game data from backend
 * @returns game data from backend
 */

export function UseGetGames() {
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