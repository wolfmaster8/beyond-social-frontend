interface UserEntity {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  avatarUrl?: string;
}

export default UserEntity;
