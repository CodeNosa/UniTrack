// src/pages/prof/Appel.jsx
import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, List, ListItem, Paper, Typography } from '@mui/material';

const appel = () => {
  // Données simulées
  const etudiants = [
    { id: 1, nom: "Ali Benali" },
    { id: 2, nom: "Sara Meziani" },
    { id: 3, nom: "Youssef Kadi" },
    { id: 4, nom: "Leila Rahmani" }
  ];

  const [presences, setPresences] = useState(
    etudiants.reduce((acc, etud) => ({ ...acc, [etud.id]: false }), {})
  );

  const togglePresence = (id) => {
    setPresences({ ...presences, [id]: !presences[id] });
  };

  const sauvegarderAppel = () => {
    // À remplacer par un appel API
    console.log("Présences enregistrées :", presences);
    alert("Appel enregistré !");
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto', mt: 3 }}>
      <Typography variant="h5" gutterBottom>Faire l'appel</Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Cours : Algorithmes avancés • Aujourd'hui
      </Typography>

      <List>
        {etudiants.map((etud) => (
          <ListItem key={etud.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={presences[etud.id]}
                  onChange={() => togglePresence(etud.id)}
                />
              }
              label={etud.nom}
            />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        color="success"
        onClick={sauvegarderAppel}
        sx={{ mt: 2 }}
      >
        Enregistrer l'appel
      </Button>
    </Paper>
  );
};

export default appel;