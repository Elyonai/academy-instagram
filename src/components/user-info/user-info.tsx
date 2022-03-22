import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { UserInfo } from '../../types/user-info';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './user-info.scss';

//UserInfo component
export default () => {
  const urlImage =
    'https://img2.freepng.es/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg';

  const userInfo: UserInfo = {
    name: 'Elyonai',
    lastName: 'Hernandez',
    userName: 'elyolml',
    publications: 231,
    followers: 134,
    follows: 294,
  };

  return (
    <div className='container'>
      <Stack direction='row' spacing={4}>
        <Avatar
          className='img'
          alt='User picture'
          src={urlImage}
          sx={{ width: 150, height: 150 }}
        />
        <Stack spacing={2}>
          <div className='tools'>
            <Grid container spacing={3}>
              <Grid item xl={4}>
                <h3 className='user-name'>{userInfo.userName}</h3>
              </Grid>
              <Grid item xl={4}>
                <Button className='btn' variant='outlined'>
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
                <span className='bold'>{userInfo.publications} </span>
                publications
              </Grid>
              <Grid item>
                <span className='bold'>{userInfo.followers}</span> followers
              </Grid>
              <Grid item>
                <span className='bold'>{userInfo.follows}</span> follows
              </Grid>
            </Grid>
          </div>
          <div className='name'>
            <label className='bold'>
              {userInfo.name} {userInfo.lastName}
            </label>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
