import profilePic from '../assets/profile.jpg'

function Profile() {
return (
    <>
      <img src={profilePic} alt="profile-picture" />
    <h2>Name</h2>
    <p>Text</p>
    </>
);
}

export default Profile;