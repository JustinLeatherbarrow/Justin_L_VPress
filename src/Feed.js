import React, {Component} from 'react';
import FeedAPI from './FeedAPI';
import { connect } from "react-redux";
import updateAPIData  from "./actions/api";
import User from "./User";

const $ = new FeedAPI();

class Feed extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.NextPage = this.NextPage.bind(this);
        this.PrevPage = this.PrevPage.bind(this);

        this.state = {
            dataType: "post",
            currentPage: 1,
        }
    }

    componentDidMount() {
        this.GetFeedList();
    }

    GetFeedList() {
        $.getData(this.state.dataType, this.state.currentPage).then((data) => {
            this.props.sendData(data);
        });
    }

    NextPage = () => {
        this.setState(prevState => {
            return {
                currentPage: prevState.currentPage + 1,
            }
        }, () => {
            this.GetFeedList();
        });
    }  
    
    PrevPage = () => {
        this.setState(prevState => {
            return {
                currentPage: prevState.currentPage - 1,
            }
        }, () => {
            this.GetFeedList();
        });
    }

    render() {
        return <div className='container'>
            <div className='row w-75 m-auto'>
                <div className='list-group list-group-flush'>{
                    this.props.apiData.map((x) => {
                        return <User key={x.id.toString()} UserData={x} />
                    })
                }</div>
                <button type="button" className="btn btn-danger p-2 m-1" onClick={this.NextPage}>Next Page</button>
                {
                    this.state.currentPage > 1 ? 
                    <button type="button" className="btn btn-danger p-2 m-1" onClick={this.PrevPage}>Previous Page</button>
                    : 
                    <div></div>
                }
                <div className='m-3'></div>
            </div>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return({
        sendData: (data) => {dispatch(updateAPIData(data))}
    })
}

function mapStateToProps(state) {
    return({apiData: state.apiData})
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)