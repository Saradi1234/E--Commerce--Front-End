import React, { useState,useEffect } from 'react';
import Products from './Components/ProductsPage';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const [page, setPage] = useState({
    page_no: 1,
  })

  const [filteredData, setFilteredData] = useState([]);
  const [Items, setItems] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  useEffect(() => {
    data.map(item => {
      let isPresent = false;
      for (let i = 0; i < Items.length; i++) {
        console.log(Items[i].category, item.category);
        if (Items[i].category === item.category) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        setItems(prevItems => [
          ...prevItems, 
          item
        ]);
      }
    })
  }, data)

  function incrementPage() {
    if (page.page_no >= Math.ceil(data.length / 5)) {
      return;
    }
    setPage(prevPage => ({ page_no: prevPage.page_no + 1 }));
  }

  function decrementPage() {
    if (page.page_no <= 1) {
      return;
    }
    setPage(prevPage => ({ page_no: prevPage.page_no - 1 }));
  }

  function handleChange(e) {
    if (e.target.value !== "") {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }

    data.map(item => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === e.target.value) {
          setFilteredData(prevData => ([...prevData, item]));
        }
      }
    })
  }

  return (
    <div className="main-container">
      <select name="catagory" id="catagory" onChange={handleChange}>
        <option value="" selected >Choose Catagory</option>
        {Items.map(item => 
        <option value={item.category}>{item.category}</option>)}
      </select>

      <h1>Page: {page.page_no}</h1>
      {isFiltered ? <Products info={filteredData} /> :
        <div>
          <Products info={data.slice((page.page_no - 1) * 10, (page.page_no - 1) * 10 + 10)} />
          <div className="buttons">
            <button onClick={decrementPage}>Prev</button>
            <button onClick={incrementPage}>Next</button>
          </div>
        </div>

      }
    </div>
  );
}

export default App;