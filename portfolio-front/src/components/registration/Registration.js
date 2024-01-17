import * as React from "react";
import {useState} from "react";
import {InputText} from 'primereact/inputtext';
import {register} from "../../auth/auth";
import {User} from "../../models/user";
import {Formation} from "../../models/formation";
import {Experience} from "../../models/experience";
import {Skill} from "../../models/skills";
import {Language} from "../../models/language";
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';

function Registration(props) {
    let [index, setIndex] = useState(0);
    let [user, setUser] = useState(new User());
    let [formation, setFormation] = useState(new Formation());
    let [experience, setExperience] = useState(new Experience());
    let [skill, setSkill] = useState(new Skill());
    let [language, setLanguage] = useState(new Language());

    // Function to handle form input changes for user
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser((prevFormData) => ({
            ...prevFormData, [name]: value
        }))
    };

    // Function to handle form input changes for experience
    const handleExpInputChange = (event) => {
        const {name, value} = event.target;
        setExperience((prevFormData) => ({
            ...prevFormData, [name]: value
        }))
    };

    // Function to handle form input changes for skills
    const handleSkillsInputChange = (event) => {
        const {name, value} = event.target;
        setSkill((prevFormData) => ({
            ...prevFormData, [name]: value
        }))
    };

    // Function to handle form input changes for formation
    const handleFormationInputChange = (event) => {
        const {name, value} = event.target;
        setFormation((prevFormData) => ({
            ...prevFormData, [name]: value
        }))
    };

    // Function to handle form input changes for language
    const handleLangInputChange = (event) => {
        const {name, value} = event.target;
        setLanguage((prevFormData) => ({
            ...prevFormData, [name]: value
        }))
    };

    const signUp = async () => {
        register(user).then(data => {
            console.log(data)
        }, error => {
            console.error(error)
        })
    }

    const saveExp = () => {
        if (experience?.start > experience.end) {
            alert('end time should be greater than start time ');
            return
        }
        if (!user?.experiences) {
            user.experiences = []
        }
        user.experiences.push({...experience})
        setExperience(new Experience())
        console.log(user)
    };

    const saveLanguage = () => {
        if (!user?.languages) {
            user.languages = []
        }
        user.languages.push({...language})
        setLanguage(new Language())
        console.log(user)
    };
    const saveSkills = () => {
        if (!user?.skillsList) {
            user.skillsList = []
        }
        user.skillsList.push({...skill})
        setSkill(new Skill())
        console.log(user)
    };
    const saveFormation = () => {
        if (!user?.formations) {
            user.formations = []
        }
        user.formations.push({...formation})
        setFormation(new Formation())
        console.log(user)
    };


    const handleNext = () => {
        console.log(user)
        if (index < 4) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (<div className="w-full bg-gray-100 py-10 px-40 h-screen flex flex-col items-center">
        <div className="p-card w-full grid p-2 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center">

            {index === 0 ? (

                <React.Fragment>
                    <strong className="col-span-2 text-center w-full">About You</strong>

                    <div className="w-full flex gap-2 flex-col">
                        <label>First Name</label>
                        <InputText className="p-inputtext-sm" value={user.firstName}
                                   name="firstName"
                                   onChange={handleInputChange}
                        />
                    </div>

                    <div className="w-full flex gap-2 flex-col">
                        <label>Last Name</label>
                        <InputText className="p-inputtext-sm" value={user.lastName}
                                   name="lastName"
                                   onChange={handleInputChange}
                        />
                    </div>

                    <div className="w-full flex gap-2 flex-col">
                        <label>Email</label>
                        <InputText className="p-inputtext-sm" value={user.email}
                                   name="email"
                                   onChange={handleInputChange}
                        />
                    </div>

                    <div className="w-full flex gap-2 flex-col">
                        <label>Password</label>
                        <InputText className="p-inputtext-sm" value={user.password}
                                   type="password"
                                   name="password"
                                   onChange={handleInputChange}
                        />
                    </div>

                    <div className="w-full col-span-2 flex gap-2 flex-col">
                        <label>About you</label>
                        <InputTextarea className="p-inputtext-sm" value={user.title}
                                       name="title"
                                       cols={2}
                                       onChange={handleInputChange}/>
                    </div>

                </React.Fragment>

            ) : index === 1 ? (

                <React.Fragment>
                    <strong className="col-span-2 text-center w-full">Experience</strong>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Position</label>
                        <InputText className="p-inputtext-sm" value={experience.name}
                                   name="name"
                                   onChange={handleExpInputChange}/>
                    </div>

                    <div className="w-full gap-2 flex flex-col">
                        <label>Company </label>
                        <InputText className="p-inputtext-sm" value={experience.company}
                                   name="company"
                                   onChange={handleExpInputChange}/>
                    </div>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Start date</label>
                        <InputText className="p-inputtext-sm" type="date" value={experience.start}
                                   name="start"
                                   onChange={handleExpInputChange}/>
                    </div>
                    <div className="w-full flex gap-2 flex-col">
                        <label>End date</label>
                        <InputText className="p-inputtext-sm" type="date" value={experience.end}
                                   name="end"
                                   onChange={handleExpInputChange}/>
                    </div>

                    <div className="w-full flex items-center justify-center col-span-2">
                        <Button disabled={experience?.start > experience?.end}
                                onClick={saveExp} label="add" icon="pi pi-check"/>
                    </div>
                </React.Fragment>

            ) : index === 2 ? (<React.Fragment>
                    <strong className="col-span-2 text-center w-full">Languages</strong>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Language</label>
                        <InputText className="p-inputtext-sm" value={language.name}
                                   name="name"
                                   onChange={handleLangInputChange}/>
                    </div>
                    <div className="w-full gap-2 flex flex-col">
                        <label>Your level</label>
                        <InputText className="p-inputtext-sm" value={language.level}
                                   name="level"
                                   placeholder="A1,A2,B1,B2,C1"
                                   onChange={handleLangInputChange}/>
                    </div>
                    <div className="w-full flex items-center justify-center col-span-2">
                        <Button onClick={saveLanguage} label="add" icon="pi pi-check"/>
                    </div>

                </React.Fragment>

            ) : index === 3 ? (

                <React.Fragment>
                    <strong className="col-span-2 text-center w-full">Skills</strong>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Skill name</label>
                        <InputText className="p-inputtext-sm" value={skill.name}
                                   name="name"
                                   onChange={handleSkillsInputChange}/>
                    </div>
                    <div className="w-full gap-2 flex flex-col">
                        <label>Your level at 10</label>
                        <InputText className="p-inputtext-sm" value={skill.level}
                                   name="level"
                                   type="number"
                                   min="1"
                                   max="10"
                                   onChange={handleSkillsInputChange}/>
                    </div>

                    <div className="w-full flex items-center justify-center col-span-2">
                        <Button onClick={saveSkills} label="add" icon="pi pi-check"/>
                    </div>
                </React.Fragment>

            ) : (<React.Fragment>
                <strong className="col-span-2 text-center w-full">Formation</strong>

                <div className="w-full gap-2 flex flex-col">
                    <label>The school</label>
                    <InputText className="p-inputtext-sm" value={formation.school}
                               name="school"
                               onChange={handleFormationInputChange}/>
                </div>

                <div className="w-full flex gap-2 flex-col">
                    <label>Sector or Option</label>
                    <InputText className="p-inputtext-sm" value={formation.name}
                               name="name"
                               onChange={handleFormationInputChange}/>
                </div>


                <div className="w-full gap-2 flex flex-col">
                    <label>Start</label>
                    <InputText type="date" className="p-inputtext-sm" value={formation.start}
                               name="start"
                               onChange={handleFormationInputChange}/>
                </div>

                <div className="w-full gap-2 flex flex-col">
                    <label>End</label>
                    <InputText type="date" className="p-inputtext-sm" value={formation.end}
                               name="end"
                               onChange={handleFormationInputChange}/>
                </div>

                <div className="w-full flex items-center justify-center col-span-2">
                    <Button onClick={saveFormation} label="add" icon="pi pi-check"/>
                </div>

            </React.Fragment>)}


            <div className="w-full col-span-2 flex flex-row justify-between">
                <button
                    disabled={index <= 0}
                    onClick={handlePrev}
                    className="text-white disabled:bg-gray-400 disabled:border-0 text-md font-medium whitespace-nowrap bg-violet-500 self-stretch justify-center items-center
                                 mt-10 px-16 py-2 rounded-3xl border-2 border-solid border-violet-500 max-md:px-5">
                    {" "}
                    Prev
                </button>

                {index === 4 ? (<Button onClick={signUp}
                                        rounded size="small"
                                        severity="success" label="save changes"/>) : (
                    <React.Fragment></React.Fragment>)}


                <button
                    hidden={index === 1 && (experience?.start > experience?.end)}
                    onClick={handleNext}
                    className="text-white disabled:bg-gray-400 disabled:border-0 text-md font-medium whitespace-nowrap bg-violet-500 self-stretch justify-center items-center
                                 mt-10 px-16 py-2 rounded-3xl border-2 border-solid border-violet-500 max-md:px-5">
                    {" "}
                    Next
                </button>
            </div>

        </div>
    </div>);
}

export default Registration;
