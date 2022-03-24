import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { UserInfo } from '../../types/user-info';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './user-info.scss';

//UserInfo component
export default (props: UserInfo) => {
  const {
    name,
    lastName,
    userName,
    publications,
    followers,
    follows,
    profileImg,
  } = props;

  const editProfile = () => {
    alert('edit profile clicked');
  };
  console.log(props);

  return (
    <div className='container'>
      <Stack direction='row' spacing={4} justifyContent='center'>
        <Avatar
          className='img'
          alt='User picture'
          src={profileImg}
          sx={{ width: 150, height: 150 }}
        />
        <Stack justifyContent='center' spacing={0}>
          <div className='tools'>
            <Grid container spacing={3}>
              <Grid item xl={4}>
                <h2 className='user-name'>{userName}</h2>
              </Grid>
              <Grid item xl={4}>
                <Button
                  onClick={editProfile}
                  className='btn'
                  variant='outlined'
                >
                  <span className='bold'>Edit profile</span>
                </Button>
              </Grid>
              <Grid item xl={4}>
                <SettingsIcon className='settings-icon' />
              </Grid>
            </Grid>
          </div>
          <div className='activity'>
            <Grid container justifyContent='center' spacing={4}>
              <Grid item>
                <span className='bold'>{publications} </span>
                publications
              </Grid>
              <Grid item>
                <span className='bold'>{followers}</span> followers
              </Grid>
              <Grid item>
                <span className='bold'>{follows}</span> follows
              </Grid>
            </Grid>
          </div>
          <div className='name'>
            <label className='bold'>
              {name} {lastName}
            </label>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
