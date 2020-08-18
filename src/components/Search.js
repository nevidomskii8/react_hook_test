import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubCuntext } from '../context/gitHub/githubContext'

export const Search = () => {
    const { show } = useContext(AlertContext)
    const [value, setValue] = useState('')
    const github = useContext(GithubCuntext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }
        if (value.trim()) {
            github.search(value.trim) 
        } else {
            show('введиде данные пользователя!')
        }
    }

    return (
        <div className="form-group">
            <input 
                type="text"
                className="form-control"
                placeholder="enter user nic"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}