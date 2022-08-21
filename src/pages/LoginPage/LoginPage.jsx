import AuthorizationForm from 'components/Authorization';

const LoginPage = () => {
  return <AuthorizationForm />;
};

export default LoginPage;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { userLoginThunk } from 'redux/authorization/authorization-operations';

// import styles from './LoginPage.module.css';
// import { TextField, Button } from '@mui/material';

// export default function LoginPage() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(userLoginThunk({ email, password }));
//   };

//   const textFieldSX = {
//     '& .MuiOutlinedInput-root': {
//       '& > fieldset': {
//         borderWidth: 2,
//         borderColor: 'rgba(255, 255, 255, 0.676)',
//       },
//       '&:hover fieldset': {
//         borderColor: '#acfc00',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#acfc00',
//       },
//     },
//   };

//   const buttonSX = {
//     fontSize: 17,
//     fontWeight: 700,
//     letterSpacing: 1,
//     borderWidth: 2,
//     backgroundColor: 'transparent',
//     borderColor: 'rgba(0, 21, 255, 0.5)',
//     color: 'rgba(0, 21, 255, 0.5)',
//     '&:hover': {
//       borderColor: '#acfc00',
//       color: '#acfc00',
//       borderWidth: 2,
//     },
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <h1 className={styles.title}>Let's login to start</h1>

//       <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
//         <TextField
//           className={styles.input}
//           label="Email"
//           variant="outlined"
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//           required
//           sx={textFieldSX}
//           inputProps={{
//             style: {
//               fontSize: 17,
//               margin: 0,
//               fontWeight: 700,
//               color: 'rgba(255, 255, 255, 0.676)',
//             },
//           }}
//           InputLabelProps={{
//             style: { fontSize: 15, fontWeight: 700, color: 'rgba(255, 255, 255, 0.676)' },
//           }}
//         />

//         <TextField
//           className={styles.input}
//           label="Password"
//           variant="outlined"
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           required
//           sx={textFieldSX}
//           inputProps={{
//             style: { fontSize: 17, fontWeight: 700, color: 'rgba(255, 255, 255, 0.676)' },
//           }}
//           InputLabelProps={{
//             style: { fontSize: 15, fontWeight: 700, color: 'rgba(255, 255, 255, 0.676)' },
//           }}
//         />

//         <Button type="submit" variant="outlined" sx={buttonSX}>
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }
