import { useRouter } from "next/router";

const index = () => {
  const route = useRouter();
  console.log(route);
  return <div>This page is {route.query.id}</div>;
};

export default index;
