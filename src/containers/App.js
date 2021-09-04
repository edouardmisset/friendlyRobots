import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import { setSearchField } from '../actions'

const mapStateToProps = state => ({
  searchField: state.searchField,
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
})

function App() {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
      .catch(console.error)
  }, [])

  const onSearchChange = event => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  )
  return !!robots.length ? (
    <div className="tc">
      <h1 className="f1">Friendly Robots</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  ) : (
    <h1 className="tc">Loading...</h1>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
