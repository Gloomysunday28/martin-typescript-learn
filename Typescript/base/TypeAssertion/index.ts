// 写法1
function myPerson(person: number | string) : number {
  return (<string>person).length
} 

// 写法2
function myReact(person: number | string) : number {
  return (person as string).length
} 