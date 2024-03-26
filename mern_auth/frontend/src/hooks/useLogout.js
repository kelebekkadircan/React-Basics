import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    const { dispatch: workoutDispatch } = useWorkoutsContext()

    const logout = () => {

        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
        workoutDispatch({ type: 'SET_WORKOUTS', payload: null })
        navigate('/login')
    }

    return { logout }
}




