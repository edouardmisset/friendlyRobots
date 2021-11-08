import { useEffect } from 'react'
import { connect } from 'react-redux'
import { requestRobots, setSearchField } from '../actions'
import CardList from '../components/CardList'
import ErrorBoundary from '../components/ErrorBoundary'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import './App.css'

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
})

function App(props) {
  const { searchField, onSearchChange, onRequestRobots, robots, isPending } =
    props

  useEffect(() => {
    onRequestRobots()
  }, [onRequestRobots])

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  )
  return isPending ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Friendly Robots</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
