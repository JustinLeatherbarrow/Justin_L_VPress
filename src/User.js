import React, { Component } from 'react';
import styles from "./User.module.scss";

export default class User extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return <div className={`list-group-item m-3 w-auto ${styles.listSection}`}>
            <div className='row m-1'>
                <img src={this.props.UserData.owner.picture} className={`${styles.profileImage} rounded-circle col-auto`}></img>
                <h4 className={`col text-start justify-content-center ${styles.nameText}`}>{this.props.UserData.owner.title}. {this.props.UserData.owner.firstName} {this.props.UserData.owner.lastName}</h4>
            </div> <div className='row m-2'>
                <h6 className={`col text-start justify-content-center ${styles.nameText}`}>{this.props.UserData.publishDate}</h6>
            </div>
            <div className='row'>
                <img src={this.props.UserData.image} className={`${styles.postImage} col-auto`}></img>
                <div className='col'>
                    <h5 className={`row text-start ${styles.nameText}`}>{this.props.UserData.text}</h5>
                    <div className={`row text-start`}>
                        <div className='col justify-content-start'>
                            <img src="/images/like-icon.png" className={`${styles.likeIcon}`}></img>
                            <h5 className={`strong ${styles.likeText}`}>{this.props.UserData.likes}</h5>
                        </div>
                    </div>
                    <div className='row text-start p-2'>{
                        this.props.UserData.tags.map((x) => {
                            return <h6 key={x.toString()}><span className={`${styles.tags} badge badge-info`}>{x}</span></h6>
                        })
                    }</div>
                </div>
            </div>
        </div>
    }
}
