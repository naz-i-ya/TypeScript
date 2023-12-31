//Partial 

interface Assignment{
  studentId: string, 
  title: string,
  grade: number,
  verified?: boolean
}

const updateAssigment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
  studentId: 'comsci123',
  title: "Final Project",
  grade: 0
}

console.log(updateAssigment(assign1, {grade: 95}));

const assignGrade: Assignment = updateAssigment(assign1, { grade: 95})

//Required: Require all properties
//  and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign
}

const assignVerified: Readonly<Assignment> = {...assignGrade, verified: true
}

// recordAssignment.grade = 88 will not bcz its read only propert

recordAssignment({...assignGrade, verified: true})

//Record
const hexaCode: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF'
}

type Student = 'Sara' | 'Keyl'
type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrade: Record<Student, LetterGrade> = {
  Sara: "B",
  Keyl: 'U'
}


// Using Interface will b obj
interface Grades{
  assign1: number,
  assign2: number
}

const gradeTotal : Record<Student, Grades> = {
  Sara : {assign1: 85, assign2: 99},
  Keyl: {assign1: 9, assign2:23}
}

//Pick and Omit
type AssignmentReasult = Pick<Assignment, "studentId" | "grade">

const score: AssignmentReasult = {
  studentId: 'k123',
  grade: 45
}

type AssignmentPreview = Omit<Assignment, "grade" | "verfied">

const preview: AssignmentPreview = {
  studentId: "k123",
  title: 'Project'
}

//Exclude and Extract: it wont work with interface ..,works with string literal n union type

type adjustedGrade = Exclude<LetterGrade, 'U'>
type highGrade = Extract<LetterGrade, 'A' | 'B'>

//Nonnullable
type AllPossibleGrades = 'Naziya' | 'Nazi' | null | undefined

type namesOnly = NonNullable<AllPossibleGrades>

//ReturnType
// type newAssign = { title: string, points: number}

const createNewAssign = (title: string, points: number) => {
  return { title, points}
}

type newAssign = ReturnType<typeof createNewAssign>

const returnTypeResult: newAssign = createNewAssign("UTILITY Type", 44);

console.log(returnTypeResult)

//Parameters: it behaves like tuples
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign);

//Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number,
  name: string,
  username: string,
  email: string
}

const fetchUsers  = async (): Promise<User[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => { 
    return res.json()
}).catch(err => {
  if(err instanceof Error) console.log(err.message)
})
return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))