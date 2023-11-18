import React, {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  useState
} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (name.trim()) {
    addUserCallback(name.trim())
    setName('')
  } else {
    setError('Ошибка! Введите имя!')
  }
}

export const pureOnBlur = (name: any, setError: any) => {
  // если имя пустое - показать ошибку
  if (!name.trim()) {
    setError('Ошибка! Введите имя!')
  }
}

export const pureOnEnter = (e: any, addUser: () => void) => {
  // если нажата кнопка Enter - добавить
  if (e.key === 'Enter') {
    addUser()
  }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                   users,
                                                                   addUserCallback,
                                                                 }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    setName(e.currentTarget.value) // need to fix

    error && setError('')
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser)
  }

  const totalUsers = users.length
  const lastUserName = users[users.length - 1]?.name || '';

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