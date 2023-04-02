import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (text: string) => void
    addUser: (name: string) => void
    onBlur: any // need to fix any
    onEnter: (key: string) => void
    error: string
    totalUsers: number
    lastUserName?: string | false
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={(e) => setNameCallback(e.currentTarget.value)}
                        className={error?s.errorInput:s.input}
                        onKeyDown={(e) => onEnter(e.key)}
                        onBlur={onBlur}
                    />

                    <button
                        id={'hw3-button'}
                        onClick={() => addUser(name)}
                        className={s.button}
                        disabled={!name.trim()}
                    >
                        Add
                    </button>

                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>


            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет: <span id={'hw3-last-user'}>{lastUserName}</span> !
                </div>
            )}
        </div>
    )
}

export default Greeting
