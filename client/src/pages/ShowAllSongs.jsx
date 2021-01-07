import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class ShowAllSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllSong().then(song => {
            this.setState({
                song: song.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { song, isLoading } = this.state

        const columns = [
            {
                Header: 'Link',
                accessor: 'link',
                filterable: true,
            },
            {
                Header: 'Notes',
                accessor: 'notes',
                filterable: true,
            },            
        ]

        let showTable = true
        if (!song.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={song}
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

export default ShowAllSong
