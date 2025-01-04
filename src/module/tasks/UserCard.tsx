import { removeUser } from "@/redux/features/tasks/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { Trash2 } from "lucide-react";
import { IUser } from "types";
import { Button } from "../../components/ui/button";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  console.log(user);
  const dispatch = useAppDispatch();

  return (
    <div className="user-card">
      <div className="border w-full px-4 py-3 rounded-md my-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2>{user.name}</h2>
          </div>
          <div className="flex gap-3 items-center">
            <Button
              onClick={() => dispatch(removeUser(user.id))}
              variant="link"
              className="p-0 text-red-500"
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
