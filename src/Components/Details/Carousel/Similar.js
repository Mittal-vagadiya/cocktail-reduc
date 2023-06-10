import React from 'react'
import Carousel from '../../carousel/Carousel';
import useFetch from '../../hooks/useFetch';

const Similar = ({ id, mediaType }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    console.log('data', data)

    return (
        <>
            {data?.results?.length > 0 &&
                <>
                    <div style={{ color: "white", padding: "2px 22px", display: "flex", justifyContent: "flex-start", fontSize: "24px" }}>Similar</div>
                    <Carousel
                        title={title}
                        data={data?.results}
                        loading={loading}
                        endpoint={mediaType}
                    />
                </>}
        </>
    )
}

export default Similar
