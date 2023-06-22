"use strict";
//Partial 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssigment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'comsci123',
    title: "Final Project",
    grade: 0
};
console.log(updateAssigment(assign1, { grade: 95 }));
const assignGrade = updateAssigment(assign1, { grade: 95 });
//Required: Require all properties
//  and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
// recordAssignment.grade = 88 will not bcz its read only propert
recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true }));
//Record
const hexaCode = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
};
const finalGrade = {
    Sara: "B",
    Keyl: 'U'
};
const gradeTotal = {
    Sara: { assign1: 85, assign2: 99 },
    Keyl: { assign1: 9, assign2: 23 }
};
const score = {
    studentId: 'k123',
    grade: 45
};
const preview = {
    studentId: "k123",
    title: 'Project'
};
//ReturnType
// type newAssign = { title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const returnTypeResult = createNewAssign("UTILITY Type", 44);
console.log(returnTypeResult);
const assignArgs = ["Generics", 100];
const tsAssign = createNewAssign(...assignArgs);
console.log(tsAssign);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
