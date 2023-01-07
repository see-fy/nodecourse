let { people } = require('../data');

const getPeople = (req, res)=>{
    res.status(200).json({success: true, data: people});
}

const createPerson = (req, res)=>{
    const { name } = req.body;
    if(!name) {
        return res.status(401).json({ success: false, msg: 'Please provide valid credentials...' })
    }
    res.status(201).json({ success: true, person: name })
}

const createPersonPostman = (req, )=>{
    const { name } = req.body;
    if(!name) {
        return res.status(401).json({ success: false, msg: 'Please provide valid credentials...' })
    }
    res.status(201).json({ success: true, person: [...people, name] })
}

const updatePerson = (req, res)=>{
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find(person => person.id === Number(id));
    if(!person) {
        return res.status(404).json({ success: false, msg: 'No such person in the database...' })
    }
    const  newPeople = people.map(person => {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    })
    return res.status(200).json({success: true, data: newPeople});
}

const deletePerson = (req, res)=>{
    const { id } = req.params;
    const person = people.find(person => person.id === Number(id));
    if(!person) {
        return res.status(404).json({ success: false, msg: 'No such person in the database...' })
    }
    const  newPeople = people.filter(person => person.id !== Number(id));
    return res.status(200).json({success: true, data: newPeople});
}

module.exports = { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson }