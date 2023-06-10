import React from 'react'
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'
import Carousel from '../../../Components/carousel/Carousel'
import useFetch from '../../../Components/hooks/useFetch'

const AiringToday = () => {

    const {data,loading}= useFetch('tv/airing_today')

  return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Airing Today</span>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
        </div>
    )
}

export default AiringToday