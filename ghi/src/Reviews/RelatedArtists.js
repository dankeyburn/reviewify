import { useEffect } from "react";
import { useState } from "react";

function RelatedArtists(props) {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/${props.artist_id}/related`
        )
            .then((response) => response.json())
            .then((data) => {
                let first_3 = [
                    {
                        name: data.artists[0]["name"],
                        artist_id: data.artists[0]["id"],
                    },
                    {
                        name: data.artists[1]["name"],
                        artist_id: data.artists[1]["id"],
                    },
                    {
                        name: data.artists[2]["name"],
                        artist_id: data.artists[2]["id"],
                    },
                ];
                setArtists(first_3);
            });
    }, []);

    return (
        <>
            {artists ? (
                <>
                    <div>If you like {props.artist}, you may also like:</div>
                    <ul>
                        {artists?.map((artist) => {
                            return (
                                <li key={artist.artist_id}>{artist.name}</li>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <></>
            )}
        </>
    );
}
export default RelatedArtists;
