import React, {useState} from 'react';

const Search = (props) => {
  const [search, setSearch] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if(search === ''){
      props.alert('Please enter something', 'light')
    }else{
      props.searchUsers(search)
      setSearch('')
    }
  }


  return(
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type="text" name='text' placeholder='search Users' value={search} onChange={e => setSearch(e.target.value)}/>
        <input type="submit" value='Search' className='btn btn-dark btn-block'/>
      </form>
      {props.showClear && <button className="btn btn-light btn-block" onClick={props.clearUsers} >Clear Users</button>}
      
    </div>
  )
}

export default Search;