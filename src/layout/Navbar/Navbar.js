import React, { Component } from 'react';
import Modal from '../../component/Modal';
class Navbar extends Component {
  render() {
    return (
      <div className='bg-info'>
        <div className='container '>
          <div className='row'>
            <div className='users col-md-6 align-self-center py-5 text-center'>
              <h1 className='display-4 text-white'>{this.props.userName}</h1>
              <p className='text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, quam.
              </p>
              <div className='badge badge-primary mr-3 p-2'>
                Following:{this.props.following}
              </div>
              <div className='badge badge-light mr-3 p-2'>
                Followers{this.props.followers}
              </div>
              <div className='badge badge-warning mr-3 p-2 text-white'>
                Conection{this.props.connection}
              </div>
            </div>
            <div className=' col-md-6 align-self-center py-5'>
              <Modal tweets={this.props.newTweet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
