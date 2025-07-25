import { Container, Stack, Typography } from '@mui/material';
import ProfileBanner from './profileBanner/ProfileBanner';
import ProfileToggle from './profileToggle/ProfileToggle';

function Profile() {
    return (
        <Stack mb={"4rem"}  mt={"100px"}>
           <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Profile</Typography>
            <ProfileBanner />
            <ProfileToggle />
        </Stack>
    )
}

export default Profile;