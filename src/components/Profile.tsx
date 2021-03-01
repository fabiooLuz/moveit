import { useContext } from 'react'

import styles from '../styles/components/Profile.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContext } from "../contexts/ProfileContext";

export function Profile() {
 const { level } = useContext(ChallengesContext);
 const { user } = useContext(ProfileContext);

    return (
      
         <div className={styles.profileContainer}>
           <img src={user.avatar_url} alt={user.name} />
           <div>
             <strong>{user.name}</strong>
             <p>
               <img src="icons/level.svg" alt="Level" />
               Level {level}
             </p>
           </div>
         </div>
    );
 }    