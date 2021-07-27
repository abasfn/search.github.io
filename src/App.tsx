import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { mainState } from './reduser';
import { addlist, getdata, removeitem, search } from './action';
import { loadingReduser } from './reduser/lauding.reduser';
import { data } from './model/state.model';
import DeletePage from './pages/deletepage/delete.page';
import SearchPage from './pages/search-page/search.page';

function App() {
  const container = useSelector(mainState);
  const loadingState = useSelector(loadingReduser);
  const dispach = useDispatch();
  useEffect(() => {
    dispach(getdata())
  }, [])
  const [input, setinput] = useState<string>(' ')
  const [inputSearch, setinputSearch] = useState<string>('')
  const [data, setdata] = useState<boolean>(false)
  const onChangeInput = (e: any) => {
    setinput(e.target.value)
  }
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      dispach(addlist({ title: input, }))
      setinput('')
    }
  }
  const handelAdd = () => {
    dispach(addlist({ title: input, }))
    setinput('')
  }
  const onClick = () => {
    dispach(getdata())
  }
  const [show, setShow] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [item, setitem] = useState({});
  const removeItem = (item: data) => {
    setShow(true);
    setitem(item)
  }
  const handeleClose = () => setShow(false);
  const handelDeletItem = () => {
    dispach(removeitem(item))
    setShow(false);
  }
  const handeleCloseSerachPage = () => setshowSearch(false)
  const HndeleOpenSearchPage = () => setshowSearch(true)
  const onChange = (e: any) => {
    setinputSearch(e.target.value)
  }
  const handelSearchPage = () => {
    if (data === true) {
      dispach(getdata())
      if (inputSearch === '') {
        dispach(getdata())
      }
      setTimeout(() => {
        dispach(search(inputSearch))
      }, 500);
      setshowSearch(false)
      return
    }
    if (inputSearch === '') {
      dispach(getdata())
    }
    dispach(search(inputSearch))
    setshowSearch(false)
    setdata(true)
  }
  const handelInputButton = () => {
    setinputSearch('')
  }
  return (
    <div className="App">
      <div>
        <input className="input-add" value={input} onKeyPress={handleKeyPress} onChange={onChangeInput} />
        <button type="button" onClick={handelAdd} className="btn btn-outline-secondary add-button">Add</button>
      </div>
      <div>
        <button type="button" onClick={onClick} className="btn btn-outline-secondary refresh-button">Refresh</button>
        <button type="button" onClick={HndeleOpenSearchPage} className="btn btn-outline-secondary refresh-button">Search</button>
      </div>
      {loadingState.loading === true && <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>}
      <div className="data">
        {loadingState.data === true && container.data.map(item => {
          return (
            <div key={item.id} className="card" >
              <div>
                <button onClick={() => removeItem(item)} type="button" className="btn-close float-end close-button" aria-label="Close"></button>
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
          )
        })}
        <DeletePage show={show} delet={handelDeletItem} close={handeleClose} />
        <SearchPage inputButton={handelInputButton} value={inputSearch} onChange={onChange} show={showSearch} delet={handelSearchPage} close={handeleCloseSerachPage} />
      </div>
    </div>
  );
}

export default App;
