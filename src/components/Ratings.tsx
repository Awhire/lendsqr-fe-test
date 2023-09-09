
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export default function TextRating({value}: any) {

  return (
    <Box
      sx={{
        width: 120,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '26px'
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        max={3}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.65, color: 'rgba(33, 63, 125, 0.2)'}} fontSize="inherit" />}
      />
    </Box>
  );
}