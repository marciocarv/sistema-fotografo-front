import StatCard from "../components/StatCard";
import {
  AiFillMoneyCollect,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiFillSignal,
} from "react-icons/ai";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <StatCard
        title="Today's Money"
        value="$53k"
        percent="55%"
        up={true}
        icon={<AiFillMoneyCollect size={22} />}
        subtitle="than last week"
      />

      <StatCard
        title="Today's Users"
        value="2,300"
        percent="3%"
        up={true}
        icon={<AiOutlineUser size={22} />}
        subtitle="than last month"
      />

      <StatCard
        title="New Clients"
        value="3,462"
        percent="2%"
        up={false}
        icon={<AiOutlineUsergroupAdd size={22} />}
        subtitle="than yesterday"
      />

      <StatCard
        title="Sales"
        value="$103,430"
        percent="5%"
        up={true}
        icon={<AiFillSignal size={22} />}
        subtitle="than yesterday"
      />

    </div>
  );
}