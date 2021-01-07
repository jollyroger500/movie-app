import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    TuneMeUp
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/showall" className="nav-link">
                            Show All Movies
                            </Link>
                        </Item>   
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                Movie Admin
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Add Movie
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/votemovie" className="nav-link">
                            Vote For Movie
                            </Link>
                        </Item> 
                        <Item>
                            <Link to="/movies/submitsong" className="nav-link">
                                Submit Song Category DoesntWork
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/song/showall" className="nav-link">
                                Show All Songs
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/showcategories" className="nav-link">
                                Show All Categories
                            </Link>
                        </Item>
       
                                      
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
