import useAuthStore from "@/store/useAuthStore";

const UserInfo = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <div className="flex flex-row justify-start gap-2 p-2 ">
        <div className=" h-12 w-12 rounded-full">
          <img src={user.photoURL} className="object-fill rounded-full " />
        </div>
        <div className="flex flex-col justify-center ">
          <span className="text-[14px] font-medium">{user.displayName}</span>
          <span className="text-[10px] font-medium">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
