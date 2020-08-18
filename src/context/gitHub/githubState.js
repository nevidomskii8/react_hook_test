import React, { useReducer } from 'react'
import { GithubCuntext } from './githubContext'
import { githubReducer } from './githubReducer'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types'
import axios from 'axios'

const CLIENT_SECTET = process.env.REACT_APP_CLIENT_SECTET
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export const GithubState = ({ children }) => {
    const initialState = {
        user:  {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()
        const response = await axios.get(
            `http://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_sectet=${CLIENT_SECTET}`
        )
        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name => {
        setLoading()
        const response = await axios.get(
            `http://api.github.com/users/${name}&client_id=${CLIENT_ID}&client_sectet=${CLIENT_SECTET}`
        )

        dispatch({
            type: GET_USER,
            payload: {}
        })
    }

    const getRepos = async name => {
        setLoading()
        //...

        dispatch({
            type: GET_REPOS,
            payload: []
        })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    const setLoading = () => dispatch({ type: SET_LOADING })

    const { user, users, repos, loading } = state

    return (
        <GithubCuntext.Provider value={{
            setLoading, search, getUser, getRepos, clearUsers,
            user, users, repos, loading 
        }}>
            {children}
        </GithubCuntext.Provider>
    )
}