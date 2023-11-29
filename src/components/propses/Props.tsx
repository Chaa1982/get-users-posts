import React from 'react'

interface PropsInterface {
    name: string;
    age: number;
    fn: ()=>void;
}

export const Props = (props: PropsInterface) => {
  return (
    <div>
        <span>{props.name}</span>
        <span> - {props.age}</span>
    </div>
  )
}
