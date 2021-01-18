import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {setKey, getKey} from "../store/actions";
import NewsItem from "./NewsItem";
const API_URL = `https://hn.algolia.com/api/v1/search?query=`;

function News({
    store,
    setKey,
    getKey
              }) {

    const [news, setNews] = useState([]);

    useEffect(() => {
        (async () => {
            if(store.keyword && store.keyword.length >= 3) {
                const url = `${API_URL}${store.keyword}`;
                const response = await axios.get(url);
                const news = response.data.hits;
                console.log(news);
                setNews(news);
            }
        })();
    }, [store.keyword]);

    return (
        <div className="mt-30">
            <div className="row">
                <div className="col">
                    <h4>Search results</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    { news.length === 0 && <div><i>No news found.</i></div> }
                    {
                        news.map(n => <NewsItem key={n.objectID} data={n} />)
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = store => ({store: store});
const mapDispatchToProps = dispatch => ({
    setKey: (key, value) => dispatch(setKey(key, value)),
    getKey: key => dispatch(getKey(key)),
});
export default connect(mapStateToProps, mapDispatchToProps)(News);