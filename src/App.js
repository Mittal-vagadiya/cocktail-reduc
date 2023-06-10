import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getApiConfiguration, getGerns } from './Redux/slice';
import { FetchApiFromUrl } from './utils/Api';
import Home from './Pages/Home/Home';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Explore from './Pages/Explore/Explore';
import SearchResult from './Components/searchResult/SearchResult';
import Details from './Components/Details/Details';
import PageNotFound from './Pages/NotFound/PageNotFound';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall()
  }, []);

  const fetchApiConfig = () => {
    FetchApiFromUrl('/configuration').then((res) => {
      const url = {
        backdrop: res?.images.secure_base_url + "original",
        poster: res?.images.secure_base_url + "original",
        profile: res?.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    }
    )
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(FetchApiFromUrl(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data?.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGerns(allGenres));
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
