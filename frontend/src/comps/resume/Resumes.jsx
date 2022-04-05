import React from 'react'
import {
  FaCheckSquare as FullCheckIcon,
  FaRegCheckSquare as CheckIcon,
  FaRegComment as CommentIcon,
} from 'react-icons/fa';
import './comp/style.css'
import Details from './comp/details';
import FullName from './comp/full-name';
import Summary from './comp/summary';
import Projects from './comp/projects';
import WorkExperience from './comp/experience';
import Certificates from './comp/certificates';
import Education from './comp/education';
import data from './resume.data'
import { LightSpeed } from 'react-reveal'
function Resumes() {
  return (
    <>
    <LightSpeed>
      <div className="page">
        <div  className="column left">
           <Details data={data.contact} />
          <Details data={data.keySkills} defaultIcon={<FullCheckIcon />} />
          <Details data={data.additionalSkills} defaultIcon={<CheckIcon />} />
          <Details data={data.languages} defaultIcon={<CommentIcon />} />
          <Details data={data.interests} />
        </div >
       <div  className="column right">
           <FullName text={data.fullName} />
          <Summary data={data.summary} />
          <Projects data={data.projects} />
          <WorkExperience data={data.workExperience} />
          <Certificates data={data.certificates} />
          <Education data={data.education} />
        </div>
      </div>
      </LightSpeed>
      </>
  )
}

export default Resumes