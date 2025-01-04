import { Tabs } from "@/components/ui/tabs";
import { AddUserModal } from "@/module/tasks/AddUserModal";
import UserCard from "@/module/tasks/UserCard";
import { selectUsers } from "@/redux/features/tasks/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUsers);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">User</h1>
        <Tabs defaultValue="all" className="w-[400px]"></Tabs>
        <AddUserModal />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
