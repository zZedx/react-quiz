import React, { useEffect , useState } from 'react'

const Timer = ({dispatch}) => {
    const [time, setTime] = useState(420)
    useEffect(() => {
        setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
    }, [])
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    useEffect(() => {
        if(time === 0){
            dispatch({type:'finish'})
        }
    }, [time , dispatch])
  return (
    <div className='timer'><strong>0{minutes} : {seconds}</strong></div>
  )
}

export default Timer