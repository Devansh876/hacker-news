import axios from 'axios';

function NewsItem(props) {
    return (
        <div className="row mt-20">
            <div className="col-10">
                <span>{props.data.title}</span> <br/>
                <small>
                    <i>
                        Author: {props.data._highlightResult.author.value},
                        Comments: {props.data.num_comments},
                        Points: {props.data.points}
                    </i>
                </small>
            </div>
            <div className="col-2">
                <a target="_blank" href={`${props.data.url}`}>Read more</a>
            </div>
        </div>
    );
}

export default NewsItem;