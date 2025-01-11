import UserProfile from "@/app/_components/social/UserProfile";

function Page() {
  return (
    <div>
      <UserProfile isCurrentUser={false} />
    </div>
  );
}

export default Page;
