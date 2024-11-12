import React from 'react'
import AccountIcon from '@mui/icons-material/AccountBox';
import EducationIcon from '@mui/icons-material/School';
import ExperiencesIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/Computer';

export const SidebarData =[
    {
        title : "Profile",
        icon : <AccountIcon/>,
        link : "/"
    },
    {
        title : "Education",
        icon : <EducationIcon/>,
        link : "/Education"
    },
    {
        title : "Experiences",
        icon : <ExperiencesIcon/>,
        link : "/Experiences"
    },
    {
        title : "Skills",
        icon : <SkillsIcon/>,
        link : "/Skills"
    },
] 