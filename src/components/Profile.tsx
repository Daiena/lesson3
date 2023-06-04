const Profile = () => {
    const user={
        name: "Илон Маск",
        img: "https://3dnews.ru/assets/external/illustrations/2021/02/12/1032514/Tesla-Elon-Musk.jpg"
    }
  return (
    <>
<strong>{user.name}</strong>
<img 
className="img"
src={user.img} 
alt="Илон Маск"
style={{
  maxWidth: "200px",
  display: "block"
}}
/>
    </>
  );
};
export default Profile;