import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createMovie } from '../../../redux/reducers/moviesReducer'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Select, setOptions, localeEs } from '@mobiscroll/react';


const NewMovieForm = () => {
  const [newMovie, setNewMovie] = useState({ title: '', year: '', cast: [], producer: [], director: [] })
  const dispatch = useDispatch()
  const persons = useSelector(state => state.persons)
  
  // Handle CreateMovie Submit
  const handleSubmit = async (e) => {
    e.preventDefault()
      dispatch(createMovie(newMovie))
      setNewMovie({ title: '', year: '', cast: [], producer: [], director: [] })
  }

  // Hanlde input change
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewMovie({ ...newMovie, [name]: value })
  }
  
  setOptions({
    locale: localeEs,
    theme: 'ios',
    themeVariant: 'light'
  });

  const myData = persons.map(person => {
    return {
      value: person.id,
      text: `${person.name} ${person.lastName}`
    }
  })

  return (
    <form>
      <input className='col1-2' placeholder='Title' onChange={handleInputChange} value={newMovie.title} name='title' />
      <input className='col1-2' placeholder='Year' onChange={handleInputChange} value={newMovie.year} name='year' />
      <Select
        data={myData}
        selectMultiple={true}
        label="Cast"
        filter={true}
        onChange={(event) => {
          setNewMovie({...newMovie, [`cast`]: event.value})
        }}
        inputProps={{
            inputStyle: 'outline',
            labelStyle: 'stacked',
            placeholder: 'Please select...'
        }}
      />
      <Select
        data={myData}
        selectMultiple={true}
        label="Producers"
        filter={true}
        onChange={(event) => {
          setNewMovie({...newMovie, [`producer`]: event.value})
        }}
        inputProps={{
            inputStyle: 'outline',
            labelStyle: 'stacked',
            placeholder: 'Please select...'
        }}
      />
      <Select
        data={myData}
        selectMultiple={true}
        label="Directors"
        filter={true}
        onChange={(event) => {
          setNewMovie({...newMovie, [`director`]: event.value})
        }}
        inputProps={{
            inputStyle: 'outline',
            labelStyle: 'stacked',
            placeholder: 'Please select...'
        }}
      />
      <button className='primaryButton' onClick={handleSubmit}>Create new blog</button>
    </form>
  )
}

export default NewMovieForm