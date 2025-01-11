import NavBar from "@/app/_components/social/NavBar";
import UserProfile from "@/app/_components/social/UserProfile";

export const metadata = {
  title: "Profile",
  description: "User profile page of the Mimic",
};

function Page() {
  return (
    <div>
      <NavBar />
      <UserProfile isCurrentUser={true} />
    </div>
  );
}

export default Page;
