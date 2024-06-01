import { Metadata } from 'next';
import { useRouter } from 'next/router';

interface UserProfileProps {
  id: string;
}

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  return {
    title: `Help ${id}`,
  };
}

const UserProfile = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserProfile;
