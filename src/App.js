import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar/Navbar';

class App extends Component {
  state = {
    about: {
      title: '',
      text: '',
    },
  };

  // Getting title and text
  newTweet = (title, text) => {
    this.setState({
      about: {
        title,
        text,
      },
    });
    console.log(this.state.about);
    this.newItem(title, text);
  };

  // creating new items
  newItem = (title, text) => {
    if (title !== '' || text !== '') {
      const row = document.createElement('div');
      row.className = 'grid';

      row.innerHTML = `
      
            <div className='img-container'>
              <img src='https://source.unsplash.com/user/erondu/daily' alt='' />
            </div>
            <div className='about'>
              <h2 className='caps'>${title}</h2>
    <p className='lead'>${text}</p>
            </div>

      `;

      const a = document.querySelector('.main');
      a.appendChild(row);
    }
  };
  render() {
    return (
      <div className='main-div'>
        <Navbar
          userName='Ankur Yadav'
          followers='10'
          following='12'
          connection='12'
          newTweet={this.newTweet}
        />
        <br />
        <br />
        <br />
        <div className='main container'>
          <div className='grid'>
            <div className='img-container'>
              <img src='https://source.unsplash.com/user/erondu/daily' alt='' />
            </div>
            <div className='about'>
              <h2 className='caps'>Title</h2>
              <p className='lead'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                ducimus officia maiores veniam vel. Reprehenderit voluptas
                pariatur sapiente perferendis molestias, ut odit quo saepe
                maiores voluptates neque totam eligendi aspernatur.
              </p>
            </div>
          </div>
          <div className='grid'>
            <div className='img-container'>
              <img src='https://source.unsplash.com/user/erondu/daily' alt='' />
            </div>
            <div className='about'>
              <h2 className='caps'>Title2</h2>
              <p className='lead'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                ducimus officia maiores veniam vel. Reprehenderit voluptas
                pariatur sapiente perferendis molestias, ut odit quo saepe
                maiores voluptates neque totam eligendi aspernatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
