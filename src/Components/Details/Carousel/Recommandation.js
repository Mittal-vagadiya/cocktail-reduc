import React from "react";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../carousel/Carousel";


const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );
    return (
        <>
            {data?.results?.length > 0 &&
                <>
                    <div style={{ color: "white", padding: "2px 22px", display: "flex", justifyContent: "flex-start", fontSize: "24px" }}>Recommendation</div>
                    <Carousel
                        title="Recommendations"
                        data={data?.results}
                        loading={loading}
                        endpoint={mediaType}
                    />
                </>
            }
        </>
    );
};

export default Recommendation;