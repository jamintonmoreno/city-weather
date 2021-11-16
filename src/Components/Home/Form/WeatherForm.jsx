import React from 'react'

const WeatherForm = ({ handleCity, handleSearchweather }) => {
  return (
    <form
      className='text-center  '
      action=''
      onSubmit={e => handleSearchweather(e)}
    >
      <input
        className='border border-gray-300 focus:border-blue-500 p-1.5 mx-1 rounded-lg'
        type='text'
        placeholder='City Name'
        onChange={({ target }) => handleCity(target)}
      />
      <input
        className='bg-blue-700 text-white p-1.5 rounded-lg '
        type='submit'
        value='Search'
      />
    </form>
  )
}

export default WeatherForm
