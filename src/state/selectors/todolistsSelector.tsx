import {useSelector} from 'react-redux'
import {AppRootStateType} from '../store'
import {TasksStateType} from '../../App'


export const todolistsSelector = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)