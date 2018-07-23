import users from './users-db';

export const signIn = ({ login, password }) => 
  new Promise((resolve, reject) => {
    const user = users.find(userFromDb => userFromDb.login === login);

    setTimeout(() => {
      if (!user) {
        reject('User does not exist!');
        return;
      }

      if (user.password !== password) {
        reject('Invalid password!');
        return;
      }

      resolve({
        name: user.name,
        login: user.login,
        avatar: user.avatar,
      });
    }, 300);
  });
;

export const signOut = () => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
;
