import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm({ onChangePassword }) {
  const newPasswordRef = useRef(null);
  const oldPasswordRef = useRef(null);

  function submitHandler(event) {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;
    const enteredOldPassword = oldPasswordRef.current.value;

    onChangePassword({
      newPassword: enteredNewPassword,
      oldPassword: enteredOldPassword,
    });
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPasswordRef} type="password" id="new-password" />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input ref={oldPasswordRef} type="password" id="old-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
