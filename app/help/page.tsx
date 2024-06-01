import { Metadata } from 'next';
import { useRouter } from 'next/router';

interface UserProfileProps {
  params: { id: string };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: UserProfileProps): Promise<Metadata> {
  return {
    title: `User Profile ${params.id}`,
  };
}

async function getUserData(id: string) {
  // Replace this with your actual data fetching logic
  return { id };
}

const UserProfile = async ({ params }: UserProfileProps) => {
  const user = await getUserData(params.id);

  return (
    <div>
      <metadata>
        <title>Help</title>
      </metadata>
      <h1>User Profile</h1>
      <p>User ID: {user.id}</p>
    </div>
  );
};

export default UserProfile;
