import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from "redux"

import { Repository } from "../../store/duck/repositories/types"
import { AplicationState } from "../../store"
import * as RepositoriesActions from "../../store/duck/repositories/actions"

import RepositoryItem from "../RepositoryItem/index"

interface StateProps {
    repositories: Repository[]
}

interface DispatchProps {
    loadRequest(): void
}


type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {

    componentDidMount() {
        const { loadRequest } = this.props

        loadRequest()
    }

    render() {

        const { repositories } = this.props

        return (
            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
            </ul>
        )
    }
}

const mapStateToProps = (state: AplicationState) => ({
    repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)