import React from 'react';

const Modal = (props) => {
  const create = () => {
    const title = document.querySelector('.title');
    const text = document.querySelector('.text');
    props.tweets(title.value, text.value);
  };

  const clearPost = () => {
    const title = document.querySelector('.title');
    const text = document.querySelector('.text');
    title.value = '';
    text.value = '';
  };

  return (
    <div className='newTweet text-center'>
      <button
        className='btn btn-outline-light text-center'
        data-toggle='modal'
        data-target='.myTweet'
      >
        Create New Tweet
      </button>
      <div className='modal fade myTweet'>
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>New Tweet</h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group'>
                  <label className='text-left'>Title</label>
                  <input type='text' className='form-control title' />
                </div>

                <div className='form-group mt-3'>
                  <textarea
                    placeholder="What's New....."
                    id=''
                    cols='30'
                    rows='10'
                    className='form-control text'
                  ></textarea>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                className='btn btn-info'
                data-dismiss='modal'
                // onClick={create}
                onMouseDown={create}
                onMouseUp={clearPost}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
