function MiniProfile() {
  return (
    <div className={"flex items-center justify-between mt-14 ml-10"}>
      <img
        className={"h-16 rounded-full border p-[2px] "}
        alt={"user-image"}
        src={
          "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
        }
      />
      <div className={"flex-1 ml-4"}>
        <h2 className={"font-bold"}>gurtang</h2>
        <h3 className={"text-sm text-gray-400"}>Welcome to Instagram</h3>
      </div>
      <button className={"font-semibold text-blue-400 text-sm"}>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
