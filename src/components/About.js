
import React, { Component } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


class About extends Component {
  render() {
    return (
       <GridWrapper>
        <div>
          <h2>About Me</h2>
        </div>
         </GridWrapper>
    );
  }
}

export default About;

//
// import React from 'react';
// import Layout from '../../components/Layout';
// import { SectionTitle, Paragraph, Pill } from '../../styles';
// import { ProfileLink } from './styles';
//
// const Me = ({ user }) => {
//   return (
//     <Layout user={user}>
//       <div>
//         <SectionTitle>About Me</SectionTitle>
//         <Paragraph>{user.basics.summary}</Paragraph>
//       </div>
//       <div>
//         <SectionTitle>Skills</SectionTitle>
//         <div>
//           {user.skills.map(skill => (
//             <Pill key={skill.name}>{skill.name}</Pill>
//           ))}
//         </div>
//       </div>
//       <div>
//         <SectionTitle>Profiles</SectionTitle>
//         <ul>
//           {user.basics.profiles.map((profile, i) => (
//             <ProfileLink key={profile.network}>
//               {i !== 0 && ' | '}
//               <a href={profile.url} target="_blank" rel="noreferrer noopener">
//                 {profile.network}
//               </a>
//             </ProfileLink>
//           ))}
//         </ul>
//       </div>
//     </Layout>
//   );
// };
//
// export default Me;
//
//
//
//
//
//
