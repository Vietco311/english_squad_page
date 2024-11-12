import { Box, Breadcrumbs, Link, Typography, useTheme } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const StudentProfile = () => {
    const location = useLocation();
    const student = location.state; // Les informations de l'étudiant sont ici
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
        </Box>
    );
};

export default StudentProfile;
