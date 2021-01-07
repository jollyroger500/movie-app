import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class ShowAllSongs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllSongs().then(songs => {
            this.setState({
                songs: songs.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { songs, isLoading } = this.state

        const columns = [
            {
                Header: 'Link',
                accessor: 'link',
                filterable: true,
            },
            {
                Header: 'Notes',
                accessor: 'rating',
                filterable: true,
            },            
        ]

        let showTable = true
        if (!songs.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={songs}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ShowAllSongs
