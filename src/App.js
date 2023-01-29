import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PaginatedItems from './Components/PaginatedItems';

const APP_ID = '6JJbm2PGIBx0oU-on2vqjzF9cwIAJ-EGMyjtf0KkToc';

function App() {
  // const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async (query = 'tree') => {
		axios
		  .get(
		    `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${APP_ID}`
		  )
		  .then(data => {
        setRes(data.data.results);
		  })
		  .catch(err => {
		    console.log('Error happened during fetching!', err);
		  });
  };


  // for add images
  var [itemsNum, setItemsNum] = useState(5);

  const onAddImgClick = event => {
    itemsNum = itemsNum + 1;
    console.log('itemNum:'+itemsNum);
    setItemsNum(itemsNum);
  };

  useEffect(() => {
    fetchRequest();
  }, []);


  return (
    <div className="App">
			<div>

        <div className="main-content">
          <div className="fbox">
            <div>
              <button type="button" className="btn btn-primary"
               onClick={onAddImgClick}
              >Add Image</button>
              {/* <ImgList data={res} /> */}
              <PaginatedItems itemsPerPage={itemsNum} imgList={res} />
            </div>
          </div>          
        </div>

			</div>      
    </div>
  );
}

export default App;

