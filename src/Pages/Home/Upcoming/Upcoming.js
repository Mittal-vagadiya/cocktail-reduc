import React, { useState } from 'react';
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper';
import useFetch from '../../../Components/hooks/useFetch';
import Carousel from '../../../Components/carousel/Carousel';

const Upcoming = () => {
    const [endpoint, setEndpoint] = useState("movie")
    const {data,loading}= useFetch(`/${endpoint}/upcoming`)

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Upcoming Movies</span>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
        </div>
    )
}

export default Upcoming;