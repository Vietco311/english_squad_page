import { Box, Breadcrumbs, Link, Typography, useTheme } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const MyProfile = () => {
    const location = useLocation();
    const student = location.state;
    const theme = useTheme();

    if (!student) return <Typography variant="h6">Student data not found</Typography>;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ alignSelf: 'flex-start', mb: 2 }}>
                <Link
                    component={RouterLink}
                    to="/"
                    underline="hover"
                    color="inherit"
                >
                    List of students
                </Link>
                <Typography color="text.primary">{`${student.Prenom} ${student.Nom}`}</Typography>
            </Breadcrumbs>
            <Typography variant="h4" gutterBottom>
                {`${student.Prenom} ${student.Nom}`}
            </Typography>
            <img
                src={`${process.env.PUBLIC_URL}/photo/${student.Genre}/${student.Photo}`}
                alt={`${student.Nom} ${student.Prenom}`}
                style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
            />
            <Box
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    p: 2,
                    mt: 2,
                    borderRadius: '8px',
                    width: '60%',
                    textAlign: 'center',
                    boxShadow: theme.shadows[3],
                }}
            >
                <Typography variant="h5" sx={{ borderBottom: `1px solid ${theme.palette.divider}`, pb: 1, mb: 2 }}>
                    Coder Profile
                </Typography>
                <Typography variant="body1">Age: {student.Age}</Typography>
                <Typography variant="body1">First nationality: {student.Nationalite1}</Typography>
                <Typography variant="body1">Second nationality: {student.Nationalite2 || 'Not specified'}</Typography>
                <Typography variant="body1">Strength: {student.Strengths}</Typography>
                <Typography variant="body1">Weakness: {student.Weaknesses}</Typography>
                <Typography variant="body1">Fun Fact: {student.FunFact}</Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    p: 2,
                    mt: 2,
                    borderRadius: '8px',
                    width: '60%',
                    textAlign: 'center',
                    boxShadow: theme.shadows[3],
                }}
            >
                <Typography>
                    Arrived in the Squad at the start of Licence 3, Anthony Colin had a really little experience about coding after graduating highschool. Both shy and not really inclined to learn about coding at the time due to not being able to go the desired path, Anthony had to learn from the beginning to be able to stand where he is.
                </Typography>
                <Typography>
                    With time, Anthony learnt how coding could bring to him a forgotten dream: Being able to code his own games. His creative way of thinking already wanted him to push further. And then, he had to realize that coding was, indeed, quite fun. However, wanting to create something is often similar to a poison for him. His confidence in coding something that could satisfy him enough is not that high, and frustration might come along the way as he realizes that he lacks both the time and the skills -according to him-.
                </Typography>
                <Typography>
                    Now, Anthony has indeed some self-esteem. His major achievements relied on his perseverance. As it is, being the Front-end web developer of project TrackMates is what he considered his most complete work. There are some other projects that satisfied him, like his web game based on AimTracker. As of late, his most recent work is a multi-agents simulation which is a work in progress.
                </Typography>
                <Typography>
                    Anthony has gained some confidence in coding, and while he thinks of himself as not worthy, he will thrive in coding.

                </Typography>
            </Box>
        </Box>
    );
};

export default MyProfile;
