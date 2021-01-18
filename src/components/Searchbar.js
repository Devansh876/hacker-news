import {setKey} from "../store/actions";
import {connect} from "react-redux";

function Searchbar({
                       store,
                       setKey,
                       getKey
                   }) {

    const handleSearch = async e => {
        e.preventDefault();
        let keyword = e.target.value;

        if(!keyword || keyword.length < 3) return;

        setKey('keyword', keyword);
    }

    return (
        <div className="mt-30">
            <input type="text" placeholder="Search for news" className="form-control"
                onChange={handleSearch} />
            <small><i>Search will be started when you type atleast 3 characters.</i></small>
        </div>
    );
}

const mapStateToProps = store => ({store: store});
const mapDispatchToProps = dispatch => ({setKey: (key, value) => dispatch(setKey(key, value))});
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
