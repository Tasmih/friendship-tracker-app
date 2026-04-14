
import { useNavigate } from "react-router";
import { RiseLoader } from "react-spinners";
import UseFriends from "../../Hooks/UseFriends";

const YourFriends = () => {
 const { friends, loading } = UseFriends();
  const navigate = useNavigate();;

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <RiseLoader color="#244d3f" />
        </div>
      ) : (
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">
            Your Friends: {friends.length}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <div
                key={friend.id}
                onClick={() => navigate(`/friend/${friend.id}`)}
                className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center cursor-pointer hover:shadow-xl hover:scale-[1.02] transition duration-300"
              >
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="rounded-full w-24 h-24 mb-4 object-cover"
                />

                <h3 className="font-semibold text-lg text-center">
                  {friend.name}
                </h3>

                <p className="text-sm text-[#64748b]">
                  {friend.days_since_contact}d ago
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {friend.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge badge-soft badge-success"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <div
                  className={`mt-3 px-4 py-1 text-white rounded-full text-sm ${
                    friend.status === "on track"
                      ? "bg-[#244d3f]"
                      : friend.status === "overdue"
                      ? "bg-[#ef4444]"
                      : friend.status === "need attention"
                      ? "bg-[#efad44]"
                      : ""
                  }`}
                >
                  {friend.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default YourFriends;