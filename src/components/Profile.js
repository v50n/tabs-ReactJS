import ProfileDetail from './ProfileDetail';

const Profile = ({company, handleSelectProfile,index, isSelected}) =>{
    return (
        <div className={`profile ${isSelected}` } onClick={() => handleSelectProfile(index)}>{company}</div>
    );
}

export default Profile;