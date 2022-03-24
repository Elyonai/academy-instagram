import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../scss/Publications.scss';

export default function Plubications() {
    return (
        <div className='publicaciones'>
            <ImageList sx={{ width: 600, height: 600 }} cols={3} rowHeight={50}>
                {itemData.map((item) => (
                    
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>

                ))}
            </ImageList>
        </div>
    );
}

const itemData = [
    {
        img: 'https://images.pexels.com/photos/245035/pexels-photo-245035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Husky',
    },
    {
        img: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Canada',
    },
    {
        img: 'https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'HP',
    },
    {
        img: 'https://images.pexels.com/photos/2538225/pexels-photo-2538225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Beach',
    },
    {
        img: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Happy',
    },
    {
        img: 'https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'school',
    },
    {
        img: 'https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'working',
    },
    {
        img: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'photographer',
    },
    {
        img: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'couple',
    },
];
