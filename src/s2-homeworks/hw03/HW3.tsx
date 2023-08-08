import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import sHW2 from './hw2.module.css'
import GreetingContainer from './GreetingContainer'

/*
* [x] - описать тип UserType
* [x] - указать нужный тип в useState с users
* [x] - дописать типы и логику функции pureAddUserCallback и проверить её тестами
* [x] - в файле GreetingContainer.tsx дописать типизацию пропсов
* [x] - в файле GreetingContainer.tsx указать нужные типы в useState с name и error
* [x] - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* [x] - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами
* [x] - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)
* [x] - в файле Greeting.tsx дописать типизацию пропсов
* [x] - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* [] - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string
    name: string
}

//React.Dispatch<React.SetStateAction<UserType[]>>
export const pureAddUserCallback = (name: string, setUsers: any, users: Array<UserType>) => {
    const user = {_id: v1(), name};
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'} className={sHW2.hw3}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
