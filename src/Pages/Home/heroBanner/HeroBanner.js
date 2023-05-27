import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../Components/hooks/useFetch';
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper';
import Img from '../../../Components/lazyLoad/LazyLoad';
import './HeroBanner.css';

export const HeroBanner = () => {
    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const url  = useSelector((state)=> state.home.url)
    const { data, loading } = useFetch('/movie/upcoming')

    useEffect(() => {
        const bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    }, [data])

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`search/${query}`)
        }
    }

    return (
        <div className='heroBanner'>
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background}  />
                </div>
            )}
            <div className='opacity-layer'>
                <ContentWrapper>
                    <div className='heroBannerContent'>
                        <span className='title'>Welcome.</span>
                        <span className='subTitle'>
                            Millions of movies, TV shows and people to discover.
                            Explore now.
                        </span>
                        <div className='searchInput'>
                            <input
                                value={query}
                                type='text'
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                                placeholder='Search for a movie or tv show...' />
                            <button >Search</button>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        </div>
    )
}
