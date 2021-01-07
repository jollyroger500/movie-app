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

class MoviesCategoryInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: '',
            description: '',
        }
    }

    handleChangeInputCategory = async event => {
        const category = event.target.value
        this.setState({ category })
    }

    handleChangeInputDescription = async event => {
     const description = event.target.value
     this.setState({ description })
 }

 
    handleIncludeMovieCategory = async () => {
        const { category, description } = this.state
        const payload = { category, description }

        await api.insertCategory(payload).then(res => {
            window.alert(`Category inserted successfully`)
            this.setState({
                category: '',
                description: '',
            })
        })
    }

    render() {
        const { category, description } = this.state
        return (
            <Wrapper>
                <Title>Create Category</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={category}
                    onChange={this.handleChangeInputCategory}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />

                <Button onClick={this.handleIncludeMovieCategory}>Add Category</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesCategoryInsert
