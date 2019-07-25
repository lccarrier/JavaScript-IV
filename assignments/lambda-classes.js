// CODE here for your Lambda Classes

// PERSON
class Person{
    constructor(attributes) {
    this.name = attributes.name,
    this.age = attributes.age,
    this.location = attributes.location
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
      }
}    



// INSTRUCTOR
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.cathPhrase = attributes.cathPhrase
    }
    
    demo(subject) {
        return `Today we are learning ${subject}`
    }
    
    grade(subject) {
        return `${this.name} receives a perfect score on ${subject}`
    }
}

const britt = new Instructor({name:'Britt Hemming', age: 28, location: 'Toronto', specialty: 'Front End', favLanguage: 'Javascript', cathPhrase: 'ABC'})
const dan = new Instructor({name:'Dan Frehner', age: 35, location: 'Miami', specialty: 'Back End', favLanguage: 'CSS', cathPhrase: 'ABC'})
const austen = new Instructor({name:'Austen Allred', age: 30, location: 'SF', specialty: 'Business', favLanguage: 'HTML', cathPhrase: 'ABC'})





// STUDENTS
class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
        this.grade = attributes.grade;
        

        const random = Math.floor((Math.random() * 100) + 1);
    }
    
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

    const sal = new Student({name:'Salvador Gonzalez', age: 28, location: 'Toronto', previousBackground: 'Front End', className: 'Javascript', favSubjects: ['Flexbox', 'CSS', 'HTML', 'JS'], grade: Math.floor((Math.random() * 100) + 1)});

    console.log(sal.listsSubjects());


    const adan = new Student({name:'Adan Rodriguez', age: 35, location: 'Miami', previousBackground: 'Back End', className: 'CSS', favSubjects: 'CSS Grid', grade: Math.floor((Math.random() * 100) + 1)});
    const varrick = new Student({name:'Varrick Inzar', age: 30, location: 'SF', previousBackground: 'Business', className: 'HTML',favSubjects: 'CSS-in-JS', grade: Math.floor((Math.random() * 100) + 1)});



console.log(varrick.grade);


// TEAM LEADS
class TL extends Instructor {
    constructor(attributes) {
        super(attributes) 
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }

    standup(slack) {
        return `${this.name} announces to ${slack}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const melissa = new TL({name:'Melissa Murphy', age: 45, location: 'CA', specialty: 'Front End', favLanguage: 'Javascript', cathPhrase: 'ABC', gradClassName: 'WEB19', favInstructor: 'Dan Frehner'})

console.log(melissa.debugsCode(sal,'Flexbox'))







const brandonp = new TL({name:'Brandon Pampuch', age: 35, location: 'SEA', specialty: 'Front End', favLanguage: 'JS', cathPhrase: 'ABC', gradClassName: 'WEB19', favInstructor: 'Dan Frehner'})
const amanda = new TL({name:'Amanda Lane', age: 33, location: 'Miami', specialty: 'Front End', favLanguage: 'JS', cathPhrase: 'ABC', gradClassName: 'WEB19', favInstructor: 'Dan Frehner'})


