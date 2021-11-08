import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setSearchField } from '../actions'
import CardList from '../components/CardList'
import ErrorBoundary from '../components/ErrorBoundary'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import './App.css'

const mapStateToProps = state => ({
  searchField: state.searchField,
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
})

function App(props) {
  const [robots, setRobots] = useState([])
  const { searchField, onSearchChange } = props

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
      .catch(console.error)
  }, [])

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
