import logo from './logo.svg';
import './App.css';
import { Box, Breadcrumbs, Card, CardActionArea, CardContent, CardMedia, Link, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

function StudentList() {
  const [genre, setGenre] = useState('Men');
  const [menImages, setMenImages] = useState([]);
  const [womenImages, setWomenImages] = useState([]);
  const getFlagEmoji = (country) => {
    const flags = {
      "France": "🇫🇷",
      "Algeria": "🇩🇿",
      "Morocco": "🇲🇦",
      "Italy": "🇮🇹",
      "America": "🇺🇸",
      "Djibouti": "🇩🇯",
      "Mali": "🇲🇱",
      "Bénin": "🇧🇯",
      "Ukraine": "🇺🇦",
      "Belgique": "🇧🇪",
      // Ajoutez d'autres pays ici si nécessaire
    };
    return flags[country] || "🏳️"; // Utilise un drapeau neutre si le pays n'est pas défini
  };
  const navigate = useNavigate();

  const toProfile = (student) => () => {
    navigate(`/profile/${student.ID}`, { state: student }); 
  };

  const toMyProfile = (student) => () => {
    navigate(`/my_profile`, { state: student });
  };


  useEffect(() => {
    Papa.parse(`${process.env.PUBLIC_URL}/promo.csv`, {
      download: true,
      header: true,
      complete: (result) => {
        console.log('Parsed Data:', result.data);
        const men = result.data.filter(student => student.Genre && student.Genre.trim() === 'Men');
        const women = result.data.filter(student => student.Genre && student.Genre.trim() === 'Women');
        console.log('Filtered Men:', men);
        console.log('Filtered Women:', women);
        setMenImages(men);
        setWomenImages(women);
      },
      error: (error) => {
        console.error('Error while parsing CSV:', error);
      }
    });
  }, []);

  const handleChange = (event) => {
    setGenre(event.target.value);
  };


  return (
    <div className="App">
      <Breadcrumbs aria-label="breadcrumb" sx={{ alignSelf: 'flex-start', mb: 2 }}>
        <Typography color="text.primary">List of students</Typography>
      </Breadcrumbs>
      <Select
        sx={{ width: 150, margin: 2 }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={genre}
        label="Genre"
        onChange={handleChange}
      >
        <MenuItem value={'Men'}>Men</MenuItem>
        <MenuItem value={'Women'}>Women</MenuItem>
      </Select>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {(genre === 'Men' ? menImages : womenImages).map((student, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              margin: 1,
              transition: "0.3s ease",
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
              }
            }}
          >
            <CardActionArea>
              <CardMedia
                onClick={student.ID !== "20221185" ? toProfile(student) : toMyProfile(student)}
                component="img"
                height="350"
                image={`${process.env.PUBLIC_URL}/photo/${student.Genre}/${student.Photo}`}
                alt={`${student.Nom} ${student.Prenom}`}
                className="card-image-hover"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {`${student.Prenom} ${student.Nom}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {student.Age ? `Age: ${student.Age}` : 'Age not specified'}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  {getFlagEmoji(student.Nationalite1)} {student.Nationalite1}
                </Typography>
                {student.Nationalite2 ?
                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    {getFlagEmoji(student.Nationalite2)} {student.Nationalite2}
                  </Typography> : ''}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default StudentList;
