import React, { useState } from 'react';
import { 
  Container, Typography, Box, Paper, Card, CardMedia, 
  CardContent, CardActions, Button, Collapse, IconButton 
} from '@mui/material';
import { ChevronLeft, ChevronRight, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { personalities } from './data';

function App() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % personalities.length);
    setExpanded(false);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + personalities.length) % personalities.length);
    setExpanded(false);
  };

  const current = personalities[index];

  return (
    <Container maxWidth="sm" sx={{ py: 4, textAlign: 'center' }}>
      {/* Header Section */}
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Aurora Music Festival Clark 2026 Lineup
      </Typography>

      <Paper elevation={2} sx={{ p: 2, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="subtitle1"><strong>Name:</strong> Kirsen Yaj Villanueva</Typography>
        <Typography variant="subtitle1"><strong>Subject:</strong> C-PEITEL6</Typography>
        <Typography variant="subtitle1"><strong>Section:</strong> IT3A</Typography>
      </Paper>

      {/* Main Display Card */}
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="350"
          image={current.image}
          alt={current.name}
          sx={{ objectPosition: 'top' }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {current.name}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button 
            size="small" 
            variant="outlined" 
            onClick={() => setExpanded(!expanded)}
            endIcon={<ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}/>}
          >
            {expanded ? "Read Less" : "Read More"}
          </Button>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ textAlign: 'left', bgcolor: 'action.hover' }}>
            <Typography variant="body1" color="text.secondary">
              {current.description}
            </Typography>
          </CardContent>
        </Collapse>

        {/* Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, borderTop: '1px solid #eee' }}>
          <IconButton onClick={handlePrev} color="primary">
            <ChevronLeft fontSize="large" />
          </IconButton>
          <Typography variant="body2" sx={{ alignSelf: 'center' }}>
            {index + 1} / {personalities.length}
          </Typography>
          <IconButton onClick={handleNext} color="primary">
            <ChevronRight fontSize="large" />
          </IconButton>
        </Box>
      </Card>
    </Container>
  );
}

export default App;