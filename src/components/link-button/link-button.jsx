import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LinkButton = ({to, label}) => {
  return (
    <Link to={to}>
      <button>{label}</button>
    </Link>
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkButton

/* 
  Можно лучше: 
  Исправить code style ошибки (пробелы до и после параметров, запись стрелочной функции в одну линию) - это 
  легче читается и уменьшает размер исходников
*/
