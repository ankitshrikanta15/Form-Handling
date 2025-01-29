const Card = ({ user, handleRemove, id }) => {
  return (
    <div className="w-48 h-full bg-zinc-100 rounded-lg flex items-center flex-col p-2">
      <div className="image w-20 h-20 rounded-full bg-blue-800 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={user.image}
          alt=""
        />
      </div>
      <h1 className="mt-1 font-semibold text-2xl">{user.name}</h1>
      <h4 className="opacity-40 text-xs font-semibold mb-2">{user.email}</h4>
      <p className="text-xs text-center font-semibold leading-none tracking-tight">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum.
      </p>
      <button onClick={() => handleRemove(id)} className="px-3 py-1 bg-red-400 text-xs rounded-sm font-semibold text-white mt-3">
        Remove It
      </button>
    </div>
  );
};

export default Card;
