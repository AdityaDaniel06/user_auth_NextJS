/* eslint-disable @typescript-eslint/no-explicit-any */
export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>Profile Page</h1>
      <p className="">user id is: {params.id}</p>
    </div>
  );
}
