import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> 
    addUserCallback: (name: string) => void
}



export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
}

export const pureOnEnter = (key: string, addUser: any) => { // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') 
    const [error, setError] = useState<string>('') 


     const pureAddUser = (name: string) => {
        // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

        if(name.trim() === "")
        {setError("Ошибка! Введите имя")}
        else
        {
        addUserCallback(name.trim())
        setName("")
        setError("")
        }
        
    }


    const setNameCallback = (text: string) => { // need to fix any
        setName(text) // need to fix

        /* error && setError('') */
    }

    const addUser = (name: string) => {
        pureAddUser(name)
       /* alert(`Hello from GreetingContainer.tsx : ${name}`) */
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (key: string) => {
       if(key === "Enter")
       {addUser(name)}
    }

    const totalUsers = users.length 
    const lastUserName = totalUsers > 0 && users[users.length - 1].name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
