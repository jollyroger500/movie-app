import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MusicSubmitSong extends Component {
    constructor(props) {
        super(props)

        this.state = {
            link: '',
            notes: '',
        }
    }

    handleChangeInputLink = async event => {
        const link = event.target.value
        this.setState({ link })
    }

    handleChangeInputNotes = async event => {
        const notes = event.target.validity.valid
            ? event.target.value
            : this.state.notes

        this.setState({ notes })
    }

    handleIncludeSong = async () => {
        const { link, notes } = this.state
        const payload = { link, notes }

        await api.insertSong(payload).then(res => {
            window.alert(`Song inserted successfully`)
            this.setState({
                link: '',
                notes: '',
            })
        })
    }

    render() {
        const { link , notes } = this.state
        return (
            <Wrapper>
                <Title>Create Song</Title>

                <Label>Link: </Label>
                <InputText
                    type="text"
                    value={link}
                    onChange={this.handleChangeInputLink}
                />

                <Label>Notes: </Label>
                <InputText
                    type="text"
                    value={notes}
                    onChange={this.handleChangeInputNotes}
                />

                <Button onClick={this.handleIncludeSong}>Add Song</Button>
                <CancelButton href={'/movies/showcategories'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MusicSubmitSong
