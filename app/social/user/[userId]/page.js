import UserProfile from "@/app/_components/social/UserProfile";

export const metadata = {
  title: "Profile",
  description: "User profile page of the Mimic",
};

function Page() {
  return (
    <div>
      <UserProfile isCurrentUser={false} />
    </div>
  );
}

export default Page;
