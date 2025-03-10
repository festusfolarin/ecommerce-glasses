import { useSelector } from "react-redux";

const UserProfiles = () => {
  const { user } = useSelector((state) => state.user);
  return <section>Welcome Back, {user.name.split(" ").slice(0, 1)}</section>;
};

export default UserProfiles;
