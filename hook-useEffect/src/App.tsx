import {useState, useEffect} from 'react'

export default function App() {

  const [ list, setList ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/skyrons/repos')
      .then(response => response.json())
      .then(data => {
        setList(data.map(( item: any ) => item.full_name))
      } )
  },[])

  const filteredList = list.filter( item => item.includes( filter ))

  return (
    <div>
      <input 
        type="text"
        onChange={e => setFilter(e.target.value)}
        value={filter}
      />
      <ul>
        {list.map(item =><li>{item}</li>)}
      </ul>

      <ul>
        { filteredList.length >= 0 ? filteredList.map(item =><li>{item}</li>) : ''}

      </ul>
    </div>
  )
}
