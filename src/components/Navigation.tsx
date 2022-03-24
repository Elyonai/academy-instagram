import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import '../scss/Navigation.scss';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Navigation() {
  return (
      <div>
      <hr></hr>
    <div role="presentation" onClick={handleClick} className="breadCrumbs">
      <Breadcrumbs separator=" " aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <BorderAllIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Publicaciones
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/getting-started/installation/"
        >
          <OndemandVideoIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Reels
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/getting-started/installation/"
        >
          <BookmarkAddedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Guardado
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/getting-started/installation/"
        >
          <PersonPinIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Etiquetadas
        </Link>
      </Breadcrumbs>
    </div>
    </div>
  );
}
